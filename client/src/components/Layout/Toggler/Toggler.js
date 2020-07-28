import React from "react";
import classes from "./Toggler.module.css";

const Toggler = () => {
  return (
    <>
      <a href="#menu-toggle" id="main-menu-toggle" className={classes.menuToggle} aria-label="open main menu">
        <span className="fa fa-bars" aria-hidden="true"></span>
      </a>
    </>
  )
}

export default Toggler
