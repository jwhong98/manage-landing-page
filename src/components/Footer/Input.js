import React from "react";
import classes from "./Input.module.css";

const Input = () => {
  return (
    <form action="" className={classes.form}>
      <input type="text" placeholder="Updates in your inbox..." />
      <div className={classes.formButton}>
        <button>Go</button>
      </div>
    </form>
  );
};

export default Input;
