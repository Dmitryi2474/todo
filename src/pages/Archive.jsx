import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemEmpty from "../components/ItemEmpty/ItemEmpty";
import {
  removeTaskArchives,
  selectItems,
} from "../redux/ArchiveSlices/ArchiveSlices";
import { addHome } from "../redux/HomeSlices/HomeSlices";

import classes from "../components/ToDo/ToDoItem/ToDoItem.module.scss";
import { addBasket } from "../redux/BasketSlices/BasketSlices";

const Archive = () => {
  const [open, setOpen] = useState(false);
  const { items } = useSelector(selectItems);
  const dispatch = useDispatch();

  const onClickBack = (id) => {
    dispatch(addHome(...items));
    dispatch(removeTaskArchives(id));
  };

  const onClickRemove = (id) => {
    if (window.confirm("переместить в корзину?")) {
      dispatch(removeTaskArchives(id));
    }
    dispatch(addBasket(...items));
  };

  if (!items.length) {
    return <ItemEmpty title={"архив пустой!"} />;
  }

  return (
    <div>
      <ul>
        {items.map((obj) => (
          <li key={obj.id}>
            <div className={classes.itemHead}>
              <div className={classes.task}>
                нужно выполнить : <span>{obj.title}</span>
              </div>
              <div>
                <img
                  onClick={() => setOpen(!open)}
                  className={open ? `${classes.imgArrow}` : ""}
                  src="../../../../img/arrow.webp"
                  alt=""
                />
                <img
                  className={classes.imgArchive}
                  src="../../../../img/back.webp"
                  alt=""
                  title="вернуть в актуальные"
                  onClick={() => onClickBack(obj.id)}
                />
                <button onClick={() => onClickRemove(obj.id)}>
                  <img
                    src="../../../../img/basket.webp"
                    alt=""
                    title="удалить из архива"
                  />
                </button>
              </div>
            </div>
            {open && (
              <div className={classes.itemHidden}>
                <span>{obj.task}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Archive;
