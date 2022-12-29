import { useEffect } from 'react';
import {
  FetchTodo,
  selectItems,
  setItems,
} from './redux/ToDoSlices/ToDoSlices';
import { useDispatch, useSelector } from 'react-redux';

import ToDo from './components/ToDo/ToDo';
import ToDoForm from './components/ToDoForm/ToDoForm';

import classes from './App.module.scss';
import Preloader from './components/Preloader/preloader';

function App() {
  const { items, status } = useSelector(selectItems);
  const dispatch = useDispatch();

  const getTodo = async () => {
    dispatch(FetchTodo());
  };

  useEffect(() => {
    getTodo();
    // eslint-disable-next-line
  }, []);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(15).substring(2, 9),
        task: userInput,
      };
      dispatch(setItems([...items, newItem]));
    }
  };

  return (
    <div className={classes.App}>
      <div className={classes.Wrapper}>
        <header>
          <h1>Список задач: {items.length}</h1>
        </header>
        <ToDoForm addTask={addTask} className={classes.TodoForm} />
        {status === 'error' ? (
          <span>error</span>
        ) : (
          <div>
            {status === 'loading' ? (
              <div className={classes.Preloader}>
                <Preloader />
              </div>
            ) : (
              <ToDo />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
