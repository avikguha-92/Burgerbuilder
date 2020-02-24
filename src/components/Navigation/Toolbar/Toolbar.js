import React from "react";
import Classes from "./Toolbar.module.css";
import Logo from "../../../components/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../../../components/Navigation/NavigationItems/SideDrawer/DrawerToggle/DrawerToggle";
const toolbar = props => (
  <header className={Classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={Classes.Logo}>
      <Logo />
    </div>
    <nav className={Classes.Desktoponly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
