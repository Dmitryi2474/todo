import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemEmpty from "../components/ItemEmpty/ItemEmpty";
import {
  clearItem,
  removeTaskBask,
  selectItems,
} from "../redux/BasketSlices/BasketSlices";
import { addHome } from "../redux/HomeSlices/HomeSlices";

import classes from "../App.module.scss";

const Basket = () => {
  const { items } = useSelector(selectItems);
  const dispatch = useDispatch();

  const onClickBack = (id) => {
    dispatch(dispatch(addHome([...items])));
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
    <div>
      <div>
        <div className={classes.clear}>
          <span onClick={() => onClickClear()}>очистить корзину</span>
        </div>
        <ul>
          {items.map((obj) => (
            <li key={obj.id}>
              выполнено: {obj.task}{" "}
              <span onClick={() => onClickBack(obj.id)}>Back</span>
              <span onClick={() => onClickRemove(obj.id)}>X</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Basket;
