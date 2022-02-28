import React from "react";
import classes from "./Input.module.css";

const Input = () => {
  return (
    <form action="" className={classes.form}>
      <input type="text" placeholder="Updates in your inbox..." />
      <button>Go</button>
    </form>
  );
};

export default Input;
