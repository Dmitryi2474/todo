import { useDispatch } from "react-redux";
import { addBasket } from "../../../redux/BasketSlices/BasketSlices";
import { removeTask } from "../../../redux/HomeSlices/HomeSlices";
import classes from "./ToDoItem.module.scss";
import { addArchive } from "../../../redux/ArchiveSlices/ArchiveSlices";
import { useState } from "react";

const ToDoItem = ({
  id,
  task,
  title,
  items,
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

  return (
    <>
      <li
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
            <img
              onClick={() => setOpen(!open)}
              className={open ? `${classes.imgArrow}` : ''}
              src="../../../../img/arrow.webp"
              alt=""
            />
            <img
              className={classes.imgArchive}
              src="../../../../img/archive.webp"
              alt=""
              title="добавить в архив"
              onClick={onClickAdd}
            />
            <button onClick={onClickRemove}>
              <img
                src="../../../../img/basket.webp"
                alt=""
                title="добавить в корзину"
              />
            </button>
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
