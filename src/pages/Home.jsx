import { useDispatch, useSelector } from "react-redux";
import { FetchTodo, selectItemsHome } from "../redux/HomeSlices/HomeSlices";
import ToDo from "../components/ToDo/ToDo";
import Preloader from "../components/Preloader/preloader";

import classes from "../App.module.scss";
import { useEffect } from "react";
import Error from "../components/Error/Error";

const Home = () => {
  const { status, itemsHome } = useSelector(selectItemsHome);
  const dispatch = useDispatch();

  const getTodo = async () => {
    dispatch(FetchTodo());
  };

  useEffect(() => {
    if (itemsHome.length === 0) {
      getTodo();
    }
    // eslint-disable-next-line
  }, []);

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
