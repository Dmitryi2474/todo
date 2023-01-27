
import classes from "./Btn.module.scss";

const BtnExpand = ({open, openItem }) => {

  return (
    <button onClick={() => openItem(!open)}>
      <img
        className={open ? `${classes.imgArrow}` : ""}
        src="../../../../img/arrow.webp"
        alt=""
        title="развернуть"
      />
    </button>
  );
};

export default BtnExpand;
