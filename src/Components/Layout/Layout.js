import React from "react";
import Auxiliary from "../../hoc/Auxiliary";

const Layout = props => (
  <Auxiliary>
    <div>Toolbar, Sidedrawer,Backdrop</div>
    <main>{props.children}</main>
  </Auxiliary>
);

export default Layout;