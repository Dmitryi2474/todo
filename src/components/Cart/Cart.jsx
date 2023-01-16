import { useState } from "react";
// import classes from "./Cart.module.scss";
import classes from "../../components/ToDo/ToDoItem/ToDoItem.module.scss";


const Cart = ({ id, task, title, onClickBack, onClickRemove}) => {
  const [open, setOpen] = useState(false);


  return (
    <>
      <li key={id}>
        <div className={classes.itemHead}>
          <div className={classes.task}>
            нужно выполнить : <span>{title}</span>
          </div>
          <div>
            <img
              onClick={() => setOpen(!open)}
              className={open ? `${classes.imgArrow}` : ""}
              src="../../../../img/arrow.webp"
              alt=""
            />
            <img
              className={classes.imgArchive}
              src="../../../../img/back.webp"
              alt=""
              title="вернуть в актуальные"
              onClick={() => onClickBack(id)}
            />
            <button onClick={() => onClickRemove(id)}>
              <img
                src="../../../../img/basket.webp"
                alt=""
                title="удалить из архива"
              />
            </button>
          </div>
        </div>
        {open && (
          <div className={classes.itemHidden}>
            <span>{task}</span>
          </div>
        )}
      </li>
    </>
  );
};

export default Cart;
