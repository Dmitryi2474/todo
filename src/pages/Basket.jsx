import React from "react";
import { useSelector } from "react-redux";
import ItemEmpty from "../components/ItemEmpty/ItemEmpty";
import { selectItems } from "../redux/BasketSlices/BasketSlices";

const Basket = () => {
  const { items } = useSelector(selectItems);

  if (!items.length) {
    return <ItemEmpty title={"корзина пустая!"} />;
  }

  return (
    <div>
      <div>
        <ul>
          {items.map((obj) => (
            <li key={obj.id}>выполнено: {obj.task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Basket;
