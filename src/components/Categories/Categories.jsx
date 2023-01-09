import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Categories.module.scss";

const Categories = () => {
  const [active, setActive] = useState(0);

  const links = [
    { link: "/", title: "home" },
    { link: "/archive", title: "archive" },
    { link: "/basket", title: "basket" },
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
          </Link>
          <span>{}</span>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
