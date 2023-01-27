import classes from "./Btn.module.scss";

const BtnArchive = ({ onClickAdd }) => {
  return (
    <button onClick={onClickAdd}>
      <img
        className={classes.imgArchive}
        src="../../../../img/archive.webp"
        alt=""
        title="добавить в архив"
      />
    </button>
  );
};

export default BtnArchive;
