import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectItemsArchive } from "../../redux/ArchiveSlices/ArchiveSlices";
import { selectItemsBasket } from "../../redux/BasketSlices/BasketSlices";
import { selectItemsHome } from "../../redux/HomeSlices/HomeSlices";

import classes from "./Categories.module.scss";

const Categories = () => {
  const [active, setActive] = useState(0);
  const { itemsHome } = useSelector(selectItemsHome);
  const { itemsArchive } = useSelector(selectItemsArchive);
  const { itemsBasket } = useSelector(selectItemsBasket);

  const links = [
    { link: "/", title: "Актуальные", count: `${itemsHome.length}` },
    { link: "/archive", title: "Архив", count: `${itemsArchive.length}` },
    { link: "/basket", title: "Корзина", count: `${itemsBasket.length}` },
  ];

  const onCnangeCategoryId = (id) => {
    setActive(id);
  };

  return (
    <ul className={classes.NavList}>
      {links.map((obj, id) => (
        <li className={classes.item} key={id}>
          <Link
            to={obj.link}
            className={active === id ? `${classes.active}` : ""}
            onClick={() => onCnangeCategoryId(id)}
          >
            {obj.title}
            <span className={classes.count}>{obj.count}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
