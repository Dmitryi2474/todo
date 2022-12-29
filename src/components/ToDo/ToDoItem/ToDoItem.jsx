import { useDispatch } from 'react-redux';
import { removeTask } from '../../../redux/ToDoSlices/ToDoSlices';
import './ToDoItem.module.scss';

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

  const onClickRemove = () => {
    if (window.confirm('удалить?')) {
      dispatch(removeTask(id));
    }
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
