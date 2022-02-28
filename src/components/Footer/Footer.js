import React from "react";
import classes from "./Footer.module.css";
import FooterList from "./FooterList";
import Input from "./Input";
import logo from "../../images/logo2.svg";
import facebook from "../../images/icon-facebook.svg";
import youtube from "../../images/icon-youtube.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div className={classes.footerContainer}>
        <div className={classes.social}>
          <img src={logo} alt="logo" className={classes.logo} />
          <div className={classes.socialWrap}>
            <img src={facebook} alt="icon" />
            <img src={youtube} alt="icon" />
            <img src={twitter} alt="icon" />
            <img src={pinterest} alt="icon" />
            <img src={instagram} alt="icon" />
          </div>
        </div>
        <FooterList />
        <Input />
        <p className={classes.legal}>Copyright 2022. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
