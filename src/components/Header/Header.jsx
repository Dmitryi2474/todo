import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectItemsHome, setItems } from "../../redux/HomeSlices/HomeSlices";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

import Categories from "../Categories/Categories";

import classes from "./Header.module.scss";

const Header = () => {
  const { pathname } = useLocation();
  const [userInput, setUserInput] = useState("");
  const { itemsHome } = useSelector(selectItemsHome);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(itemsHome);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [itemsHome]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(15).substring(2, 9),
        title: "Добавленая задача ",
        task: userInput,
      };
      dispatch(setItems([...itemsHome, newItem]));
    }
  };

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const onClickClear = () => {
    setUserInput("");
    inputRef.current?.focus();
  };

  return (
    <section className={classes.Header}>
      <header>
        <h1>Список задач:{itemsHome.length}</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div
          className={clsx(
            classes.InputWrapper,
            pathname !== "/" && classes.InputWrapper_disabled
          )}
        >
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
          <button>Добавить</button>
        </div>
      </form>
      <Categories />
    </section>
  );
};

export default Header;
