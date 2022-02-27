import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.profile} alt="profile" className={classes.profile} />
      <p className={classes.name}>{props.name}</p>
      <p className={classes.review}>"{props.review}"</p>
    </div>
  );
};

export default Card;
