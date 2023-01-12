import classes from "./ItemEmpty.module.scss";

const ItemEmpty = ({title}) => {

  return (
    <div className={classes.cart}>
      <h2>{title}</h2>
      <img src="../img/empty-cart.png" alt="" />
    </div>
  );
};

export default ItemEmpty;
