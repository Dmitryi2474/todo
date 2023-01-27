import { useState } from "react";

import BtnBack from "../../ui/BtnBack";
import BtnBasket from "../../ui/BtnBasket";
import BtnExpand from "../../ui/BtnExpand";

import classes from "../../App.module.scss";

const Cart = ({ id, task, title, onClickBack, onClickRemove}) => {
  const [open, setOpen] = useState(false);

  const openItem = () => {
    setOpen(!open)
  }

  return (
    <>
      <li key={id} className={open ? `${classes.active}` : ""}>
        <div className={classes.itemHead}>
          <div className={classes.task}>
            нужно выполнить : <span>{title}</span>
          </div>
          <div>
            <BtnExpand open={open} openItem={openItem} />
            <BtnBack onClickBack={onClickBack} id={id} onClickRemove={onClickRemove}/>
            <BtnBasket onClickBack={onClickBack} onClickRemove={onClickRemove} id={id}/>
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
