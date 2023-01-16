import { useDispatch, useSelector } from "react-redux";
import {
  removeTaskArchives,
  selectItemsArchive,
} from "../redux/ArchiveSlices/ArchiveSlices";
import { addHome } from "../redux/HomeSlices/HomeSlices";
import { addBasket } from "../redux/BasketSlices/BasketSlices";

import ItemEmpty from "../components/ItemEmpty/ItemEmpty";
import Cart from "../components/Cart/Cart";

const Archive = () => {
  const { itemsArchive } = useSelector(selectItemsArchive);
  const dispatch = useDispatch();

  const onClickBack = (id) => {
    dispatch(addHome(...itemsArchive));
    dispatch(removeTaskArchives(id));
  };

  const onClickRemove = (id) => {
    if (window.confirm("переместить в корзину?")) {
      dispatch(removeTaskArchives(id));
    }
    dispatch(addBasket(...itemsArchive));
  };

  if (!itemsArchive.length) {
    return <ItemEmpty title={"архив пустой!"} />;
  }

  return (
    <div>
      <ul>
        {itemsArchive.map((item) => (
          <Cart
            key={item.id}
            onClickBack={onClickBack}
            onClickRemove={onClickRemove}
            {...item}
          />
        ))}
      </ul>
    </div>
  );
};

export default Archive;
