import { useDispatch, useSelector } from "react-redux";
import { FetchTodo, selectItems } from "../redux/HomeSlices/HomeSlices";
import ToDo from "../components/ToDo/ToDo";
import Preloader from "../components/Preloader/preloader";

import classes from "../App.module.scss";
import { useEffect } from "react";
import Error from "../components/Error/Error";

const Home = () => {
  const { status, items } = useSelector(selectItems);
  const dispatch = useDispatch();

  const getTodo = async () => {
    dispatch(FetchTodo());
  };

  useEffect(() => {
    if (items.length === 0) {
      getTodo();
    }
    // eslint-disable-next-line
  }, []);

  console.log(items)

  return (
    <>
      {status === "error" ? (
        <Error />
      ) : (
        <>
          {status === "loading" ? (
            <div className={classes.Preloader}>
              <Preloader />
            </div>
          ) : (
            <ToDo />
          )}
        </>
      )}
    </>
  );
};

export default Home;
