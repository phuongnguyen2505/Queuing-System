import React from "react";
import Notification from "./Notification";
import Breadcrumbs from "./Breadcrumbs";
import Profile from "./Profile";
import "./styles.scss";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

function Topbar() {
  return (
    <>
      <div className="container topbar">
        <div className="flex">
          <Breadcrumbs />
          <div className="right-group">
            <Notification />
            <Profile />
          </div>
        </div>
        <div className="content">
          <Layout>
            <Outlet />
          </Layout>
        </div>
      </div>
    </>
  );
}

export default Topbar;
