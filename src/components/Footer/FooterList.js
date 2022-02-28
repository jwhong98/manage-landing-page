import React from "react";
import classes from "./FooterList.module.css";

const FooterList = () => {
  return (
    <ul className={classes.list}>
      <li>home</li>
      <li>pricing</li>
      <li>products</li>
      <li>about us</li>
      <li>careers</li>
      <li>community</li>
      <li>privacy policy</li>
    </ul>
  );
};

export default FooterList;
