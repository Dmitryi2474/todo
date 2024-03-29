import { useState } from "react";
import { selectItemsHome, setItems } from "../../redux/HomeSlices/HomeSlices";
import { useDispatch, useSelector } from "react-redux";

import ToDoItem from "./ToDoItem/ToDoItem";

const ToDo = () => {
  const { itemsHome } = useSelector(selectItemsHome);
  const [currentCard, setCurrentCard] = useState(null);
  const disaptch = useDispatch();

  const dragStartHandler = (e, card) => {
    setCurrentCard(card);
  };

  const dargEndHandler = (e) => {

  };
  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const dropHandler = (e, card) => {
    e.preventDefault();
    disaptch(
      setItems(
        itemsHome.map((c) => {
          if (c.id === card.id) {
            return { ...c, category: currentCard.category };
          }
          if (c.id === currentCard.id) {
            return { ...c, category: card.category };
          }
          return c;
        })
      )
    );
  };

  const sortCards = (a, b) => {
    if (a.category > b.category) {
      return 1;
    } else {
      return -1;
    }
  };

  const itemsSort = [...itemsHome].sort(sortCards);

  return (
    <ul>
      {itemsSort.map((items) => (
        <ToDoItem
          key={items.id}
          items={items}
          dragStartHandler={dragStartHandler}
          dargEndHandler={dargEndHandler}
          dragOverHandler={dragOverHandler}
          dropHandler={dropHandler}
          {...items}
        />
      ))}
    </ul>
  );
};

export default ToDo;
