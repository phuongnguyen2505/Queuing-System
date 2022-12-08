import { Link, NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as Dashboardico } from "../../icons/dashboard.svg";
import { ReactComponent as Level } from "../../icons/dashboard2.svg";
import { ReactComponent as Logout } from "../../icons/logout.svg";
import { ReactComponent as Device } from "../../icons/monitor.svg";
import { ReactComponent as Service } from "../../icons/quest.svg";
import { ReactComponent as Report } from "../../icons/report.svg";
import { ReactComponent as Setting } from "../../icons/setting.svg";
import { ReactComponent as Dot } from "../../icons/3dot.svg";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Logo from "../Logo";
import Topbar from "../Topbar";
import "./styles.scss";

function Navbar() {
  let navigate = useNavigate();
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
  };
  type MenuItem = Required<MenuProps>["items"][number];
  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  const items: MenuItem[] = [
    getItem(
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        to="/systemSetting"
      >
        <div className="card">
          <div className="icon">
            <Setting />
          </div>
          <div className="title">
            <p>Cài đặt hệ thống</p>
            <Dot />
          </div>
        </div>
      </NavLink>,
      "/systemSetting",
      null,
      [
        getItem(
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/systemSetting/roleManage"
          >
            Quản lý vai trò
          </NavLink>
        ),
        getItem(
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/systemSetting/accountManage"
          >
            Quản lý tài khoản
          </NavLink>
        ),
        getItem(
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/systemSetting/userDiary"
          >
            Nhật ký người dùng
          </NavLink>
        ),
      ]
    ),
  ];
  return (
    <>
      <div className="flex">
        <div className="Menubar">
          <div className="logo-a">
            <Link to="/">
              <Logo width="80px" />
            </Link>
          </div>
          <div className="Menu-item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <div className="card">
                <div className="icon">
                  <Dashboardico />
                </div>
                <div className="title">
                  <p>Dashboard</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/device/listDevice"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <div className="card">
                <div className="icon">
                  <Device />
                </div>
                <div className="title">
                  <p>Thiết bị</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/service/listService"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <div className="card">
                <div className="icon">
                  <Service />
                </div>
                <div className="title">
                  <p>Dịch vụ</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/provideN/listProvideN"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <div className="card">
                <div className="icon">
                  <Level />
                </div>
                <div className="title">
                  <p>Cấp số</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/report/createReport"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <div className="card">
                <div className="icon">
                  <Report />
                </div>
                <div className="title">
                  <p>Báo cáo</p>
                </div>
              </div>
            </NavLink>

            <Menu
              onClick={onClick}
              style={{ width: "100%" }}
              mode="vertical"
              items={items}
              expandIcon=" "
            />
          </div>
          <div className="logout">
            <button onClick={() => navigate("/login")}>
              <div className="box">
                <Logout /> Đăng xuất
              </div>
            </button>
          </div>
        </div>

        <Topbar />
      </div>
    </>
  );
}

export default Navbar;
