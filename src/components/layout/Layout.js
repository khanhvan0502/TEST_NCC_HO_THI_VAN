import React from "react";
import SideBar from "../sidebar/SideBar";

import "./style.css";

const Layout = (props) => {
  const { children } = props;

  return (
    <div className="layout-wrapper">
      <div className="container">
        <div className="left-content">
          <SideBar />
        </div>
        <div className="right-content">
          <div className="content">{children}</div>
          <div className="footer">
            <p className="footer-copyright">Copyright © 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
