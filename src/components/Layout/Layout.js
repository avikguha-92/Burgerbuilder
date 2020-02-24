import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/NavigationItems/SideDrawer/SideDrawer";
const Layout = props => (
  <Auxiliary>
    <Toolbar />
    <SideDrawer />
    <main className={Classes.Content}>{props.children}</main>
  </Auxiliary>
);

export default Layout;
