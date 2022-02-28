import React from "react";
import classes from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <section className={classes.callToAction}>
      <div className={classes.callToActionContainer}>
        <h1>Simplify how your team works today.</h1>
        <button>Get started</button>
      </div>
    </section>
  );
};

export default CallToAction;
