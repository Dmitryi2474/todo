import classes from "./Btn.module.scss";

const BtnBack = ({ onClickBack, id }) => {
  return (
    <button onClick={() => onClickBack(id)}>
      <img
        className={classes.imgArchive}
        src="../../../../img/back.webp"
        alt=""
        title="вернуть в актуальные"
      />
    </button>
  );
};

export default BtnBack;
