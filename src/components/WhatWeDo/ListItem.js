import React from "react";
import classes from "./ListItem.module.css";

const ListItem = (props) => {
  return (
    <li>
      <p className={classes.badge}>{props.badge}</p>
      <p className={classes.title}>{props.title}</p>
      <p className={classes.description}>{props.description}</p>
    </li>
  );
};

export default ListItem;
