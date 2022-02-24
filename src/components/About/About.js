import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.aboutContainer}>
        <div className={classes.textWrap}></div>
        <div className={classes.imgWrap}>
          <img src="" alt="charts" className={classes.img} />
        </div>
      </div>
    </div>
  );
};

export default About;
