import React from "react";
import Button from "../Button/Button";
import classes from "./About.module.css";
import charts from "../../images/illustration-intro.svg";

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.aboutContainer}>
        <div className={classes.textWrap}>
          <h1>Bring everyone together to build better products.</h1>
          <p>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <Button />
        </div>
        <div className={classes.imgWrap}>
          <img src={charts} alt="charts" className={classes.img} />
        </div>
      </div>
    </div>
  );
};

export default About;
