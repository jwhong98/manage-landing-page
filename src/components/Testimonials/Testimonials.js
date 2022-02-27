import React from "react";
import Button from "../Button/Button";
import classes from "./Testimonials.module.css";
import { data } from "./data";
import Card from "./Card";

const Testimonials = () => {
  const createCard = (info) => {
    return (
      <Card
        key={info.id}
        profile={info.profile}
        name={info.name}
        review={info.review}
      />
    );
  };
  return (
    <section>
      <div className={classes.testimonialContainer}>
        <h1>What they've said</h1>
        <div className={classes.testimonialWrap}>{data.map(createCard)}</div>
        <Button />
      </div>
    </section>
  );
};

export default Testimonials;
