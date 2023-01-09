import { useDispatch, useSelector } from "react-redux";
import ItemEmpty from "../components/ItemEmpty/ItemEmpty";
import {
  removeTaskArchives,
  selectItems,
} from "../redux/ArchiveSlices/ArchiveSlices";
import { addHome } from "../redux/HomeSlices/HomeSlices";

const Archive = () => {
  const { items } = useSelector(selectItems);
  const dispatch = useDispatch();

  const onClickBack = (id) => {
    dispatch(dispatch(addHome([...items])));
    dispatch(removeTaskArchives(id));
  };

  if (!items.length) {
    return <ItemEmpty title={"архив пустой!"} />;
  }

  return (
    <div>
      <ul>
        {items.map((obj) => (
          <li key={obj.id}>
            выполнено: {obj.task}
            <span onClick={() => onClickBack(obj.id)}>Back</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Archive;
