import { useDispatch, useSelector } from "react-redux";
import ItemEmpty from "../components/ItemEmpty/ItemEmpty";
import {
  clearItem,
  removeTaskBask,
  selectItems,
} from "../redux/BasketSlices/BasketSlices";
import { addHome } from "../redux/HomeSlices/HomeSlices";

import classes from "../components/ToDo/ToDoItem/ToDoItem.module.scss";

import { useState } from "react";

const Basket = () => {
  const [open, setOpen] = useState(false);
  const { items } = useSelector(selectItems);
  const dispatch = useDispatch();

  const onClickBack = (id) => {
    dispatch(addHome(...items));
    dispatch(removeTaskBask(id));
  };

  const onClickRemove = (id) => {
    if (window.confirm("удалить безвозвратно?")) dispatch(removeTaskBask(id));
  };

  const onClickClear = () => {
    if (window.confirm("очитить корзину?")) {
      dispatch(clearItem());
    }
  };

  if (!items.length) {
    return <ItemEmpty title={"корзина пустая!"} />;
  }

  return (
    <>
      <div className={classes.clear}>
        <span onClick={() => onClickClear()}>очистить корзину</span>
      </div>

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
    </>
  );
};

export default Basket;
