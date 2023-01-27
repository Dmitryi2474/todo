import { useDispatch, useSelector } from "react-redux";
import ItemEmpty from "../components/ItemEmpty/ItemEmpty";
import {
  clearItem,
  removeTaskBask,
  selectItemsBasket,
} from "../redux/BasketSlices/BasketSlices";
import { addHome } from "../redux/HomeSlices/HomeSlices";

import Cart from "../components/Cart/Cart";

import classes from "../components/ToDo/ToDoItem/ToDoItem.module.scss";

const Basket = () => {
  const { itemsBasket } = useSelector(selectItemsBasket);
  const dispatch = useDispatch();

  const onClickBack = (id) => {
    dispatch(addHome(...itemsBasket));
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

  if (!itemsBasket.length) {
    return <ItemEmpty title={"корзина пустая!"} />;
  }

  return (
    <>
      <div className={classes.clear}>
        <span onClick={() => onClickClear()}>очистить корзину</span>
      </div>

      <ul>
        {itemsBasket.map((item) => (
          <Cart
            hint="удалить"
            key={item.id}
            onClickBack={onClickBack}
            onClickRemove={onClickRemove}
            {...item}
          />
        ))}
      </ul>
    </>
  );
};

export default Basket;
