import { useState } from 'react';
import { selectItems, setItems } from '../../redux/ToDoSlices/ToDoSlices';
import { useDispatch, useSelector } from 'react-redux';

import ToDoItem from './ToDoItem/ToDoItem';

import './ToDo.module.scss';

const ToDo = () => {
  const { items } = useSelector(selectItems);
  const [currentCard, setCurrentCard] = useState(null);
  const disaptch = useDispatch();

  // const [cardList, setCardList] = useState([
  //   {
  //     id: '0',
  //     task: 'задача № 1',
  //     category: 1,
  //   },
  //   {
  //     id: '1',
  //     task: 'задача № 2',
  //     category: 2,
  //   },
  //   {
  //     id: '2',
  //     task: 'задача № 3',
  //     category: 3,
  //   },
  //   {
  //     id: '3',
  //     task: 'задача № 4',
  //     category: 4,
  //   },
  //   {
  //     id: '4',
  //     task: 'задача № 5',
  //     category: 5,
  //   },
  // ]);

  const dragStartHandler = (e, card) => {
    console.log('drag', card);
    setCurrentCard(card);
  };

  const dargEndHandler = (e) => {
    e.target.style.background = 'white';
  };
  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.background = 'grey';
  };

  const dropHandler = (e, card) => {
    console.log('drop', card);
    e.preventDefault();
    disaptch(
      setItems(
        items.map((c) => {
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
    e.target.style.background = 'grey';
  };

  const sortCards = (a, b) => {
    if (a.category > b.category) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <ul>
      {items.sort(sortCards).map((card) => (
        <ToDoItem
          card={card}
          dragStartHandler={dragStartHandler}
          dargEndHandler={dargEndHandler}
          dragOverHandler={dragOverHandler}
          dropHandler={dropHandler}
          key={card.id}
          {...card}
        />
      ))}
    </ul>
  );
};

export default ToDo;
