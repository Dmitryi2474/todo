import { useDispatch } from "react-redux";
import { addBasket } from "../../../redux/BasketSlices/BasketSlices";
import { removeTask } from "../../../redux/HomeSlices/HomeSlices";
import classes from "./ToDoItem.module.scss";
import { addArchive } from "../../../redux/ArchiveSlices/ArchiveSlices";

const ToDoItem = ({
  id,
  task,
  card,
  dragStartHandler,
  dargEndHandler,
  dragOverHandler,
  dropHandler,
}) => {
  const dispatch = useDispatch();

  const item = {
    id,
    task,
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
        onDragStart={(e) => dragStartHandler(e, card)}
        onDragLeave={(e) => dargEndHandler(e)}
        onDragEnd={(e) => dargEndHandler(e)}
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dropHandler(e, card)}
      >
        нужно выполнить : <span>{task}</span>
        <span className={classes.complited} onClick={onClickAdd}>
          OK
        </span>
        <button onClick={onClickRemove}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
          >
            <line x1="18" x2="6" y1="6" y2="18" />
            <line x1="6" x2="18" y1="6" y2="18" />
          </svg>
        </button>
      </li>
    </>
  );
};

export default ToDoItem;
