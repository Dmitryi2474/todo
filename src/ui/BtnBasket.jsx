const BtnBasket = ({ onClickRemove, id }) => {
  return (
    <button onClick={() => onClickRemove(id)}>
      <img src="../../../../img/basket.webp" alt="" title="удалить" />
    </button>
  );
};

export default BtnBasket;
