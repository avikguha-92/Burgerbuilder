import React from "react";
import Classes from "./NavigationItems.module.css";
import NavigationItem from "../NavigationItems/NavaigationItem/NavigationItem";

const navigationItems = () => (
  <ul className={Classes.NavigationItems}>
    <NavigationItem link="/" active={true}>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">Check Out</NavigationItem>
  </ul>
);

export default navigationItems;
