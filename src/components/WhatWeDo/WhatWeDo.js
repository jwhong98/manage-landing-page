import React from "react";
import ListItem from "./ListItem";
import classes from "./WhatWeDo.module.css";
import { data } from "./data.";

const WhatWeDo = () => {
  const createListItem = (info) => {
    return (
      <ListItem
        key={info.id}
        badge={info.badge}
        title={info.title}
        description={info.description}
      />
    );
  };
  return (
    <div className={classes.what}>
      <div className={classes.whatContainer}>
        <div className={classes.textWrap}>
          <h2>What's different about Manage?</h2>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className={classes.listContainer}>
          <ul className={classes.list}>{data.map(createListItem)}</ul>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
