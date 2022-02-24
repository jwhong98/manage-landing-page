import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../images/logo.svg";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav id={classes.nav}>
      <div className={classes.navContainer}>
        <a href="#home" id={classes.logo}>
          <img src={logo} alt="logo" />
        </a>
        <div className={classes.mobileIconContainer}>
          <img className={classes.mobileIcon} src="" alt="" />
        </div>
        <ul className={classes.navMenu}>
          <li className={classes.navItem}>Pricing</li>
          <li className={classes.navItem}>Product</li>
          <li className={classes.navItem}>About Us</li>
          <li className={classes.navItem}>Careers</li>
          <li className={classes.navItem}>Community</li>
        </ul>
        <Button />
      </div>
    </nav>
  );
};

export default Navbar;
