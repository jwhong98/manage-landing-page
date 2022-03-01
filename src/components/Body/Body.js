import React from "react";
import classes from "./Body.module.css";

const Body = (props) => {
  return <div className={classes.bodyContainer}>{props.children}</div>;
};

export default Body;
