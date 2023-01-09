import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchTodo, selectItems } from "../redux/HomeSlices/HomeSlices";
import ToDo from "../components/ToDo/ToDo";
import Preloader from "../components/Preloader/preloader";

import classes from "../App.module.scss";
import { useEffect } from "react";

const Home = () => {
  const {status } = useSelector(selectItems);
  const dispatch = useDispatch();

  const getTodo = async () => {
    dispatch(FetchTodo());
  };

  useEffect(() => {
    getTodo();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {status === "error" ? (
        <span>error</span>
      ) : (
        <div>
          {status === "loading" ? (
            <div className={classes.Preloader}>
              <Preloader />
            </div>
          ) : (
            <ToDo />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
