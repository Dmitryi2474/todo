import Header from "./components/Header/Header";
import Basket from "./pages/Basket";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";

import classes from "./App.module.scss";
import Archive from "./pages/Archive";

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.Wrapper}>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
