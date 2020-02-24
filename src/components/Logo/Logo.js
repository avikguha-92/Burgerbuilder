import React from "react";
import LogoURL from "../../assets/burger-logo.png";
import Classes from "./Logo.module.css";
const Logo = props => (
  <div className={Classes.Logo}>
    <img src={LogoURL} alt="MyBurger" />
  </div>
);

export default Logo;
