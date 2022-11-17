import { Breadcrumb } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.scss";
import "antd/dist/antd.min.css";

const Breadcrumbs = () => {
  const location = useLocation();
  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);
    return (
      <>
        <Breadcrumb separator=">">
          {pathnames.length > 0 ? (
            <Breadcrumb.Item className="breadcrumbsCustomStyle"></Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item className="breadcrumbsCustomStyle">
              Dashboard
            </Breadcrumb.Item>
          )}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const pages: any = {
              Device: "Thiết bị",
              profile: "Thông tin cá nhân",
              Service: "Dịch vụ",
              Level: "Cấp số",
              Report: "Báo cáo",
              Setting: "Cài đặt hệ thống",
              listDevice: "Danh sách thiết bị",
            };
            return isLast ? (
              <Breadcrumb.Item key={name} className="breadcrumbsCustomStyle">
                {pages[name]}
              </Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item className="breadcrumbsCustomStyle">
                <Link to={`${routeTo}`}>{pages[name]}</Link>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </>
    );
  };
  return <>{breadCrumbView()}</>;
};

export default Breadcrumbs;
