import { useDispatch } from "react-redux";
import { addBasket } from "../../../redux/BasketSlices/BasketSlices";
import { removeTask } from "../../../redux/HomeSlices/HomeSlices";
import { addArchive } from "../../../redux/ArchiveSlices/ArchiveSlices";
import { useState } from "react";

import classes from "../../../App.module.scss";
import BtnBasket from "../../../ui/BtnBasket";
import BtnExpand from "../../../ui/BtnExpand";
import BtnArchive from "../../../ui/BtnArchive";

const ToDoItem = ({
  id,
  task,
  items,
  title,
  dragStartHandler,
  dargEndHandler,
  dragOverHandler,
  dropHandler,
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const item = {
    id,
    task,
    title,
  };

  const onClickRemove = () => {
    if (window.confirm("переместить в корзину?")) {
      dispatch(removeTask(id));
    }
    dispatch(addBasket(item));
  };

  const onClickAdd = () => {
    dispatch(addArchive(item));
    dispatch(removeTask(id));
  };

  const openItem = () => {
    setOpen(!open)
  }

  return (
    <>
      <li
        className={open ? `${classes.active}` : ""}
        draggable={true}
        onDragStart={(e) => dragStartHandler(e, items)}
        onDragLeave={(e) => dargEndHandler(e)}
        onDragEnd={(e) => dargEndHandler(e)}
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dropHandler(e, items)}
      >
        <div className={classes.itemHead}>
          <div className={classes.task}>
            нужно выполнить : <span>{items.title}</span>
          </div>
          <div>
            <BtnExpand open={open} openItem={openItem} />
            <BtnArchive onClickAdd={onClickAdd}/>
            <BtnBasket onClickRemove={onClickRemove} />
          </div>
        </div>
        {open && (
          <div className={classes.itemHidden}>
            <span>{items.task}</span>
          </div>
        )}
      </li>
    </>
  );
};

export default ToDoItem;
