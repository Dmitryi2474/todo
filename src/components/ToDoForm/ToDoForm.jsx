import { useRef } from 'react';
import { useState } from 'react';
import classes from './ToDoForm.module.scss';

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState('');
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  };

  const onClickClear = () => {
    setUserInput('');
    inputRef.current?.focus();
  };

  return (
    <section className={classes.ToDoForm}>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            ref={inputRef}
            value={userInput}
            type="text"
            onChange={handleChange}
            placeholder="Введите значение..."
          />
          {userInput && (
            <svg
              onClick={onClickClear}
              className={classes.clear}
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
          )}
          <button>Сохранить</button>
        </div>
      </form>
    </section>
  );
}

export default ToDoForm;
