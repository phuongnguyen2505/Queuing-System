import { Link, NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as Dashboardico } from "../../icons/dashboard.svg";
import { ReactComponent as Level } from "../../icons/dashboard2.svg";
import { ReactComponent as Logout } from "../../icons/logout.svg";
import { ReactComponent as Device } from "../../icons/monitor.svg";
import { ReactComponent as Service } from "../../icons/quest.svg";
import { ReactComponent as Report } from "../../icons/report.svg";
import { ReactComponent as Setting } from "../../icons/setting.svg";
import Logo from "../Logo";
import Topbar from "../Topbar";
import "./styles.scss";

function Navbar() {
  let navigate = useNavigate();
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
              to="/service"
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
              to="/level"
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
              to="/report"
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
            <NavLink
              to="/setting"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <div className="card">
                <div className="icon">
                  <Setting />
                </div>
                <div className="title">
                  <p>Cài đặt hệ thống</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="logout">
            <button onClick={() => navigate("/login")}>
              <div className="box">
                <Logout /> Đăng xuất
              </div>
            </button>
            {/* <Button
            border="none"
            color="var(--orange-50)"
            height="100%"
            onClick={() => console.log("function")}
            radius="8px"
            width="90%"
            children="Đăng xuất"
          /> */}
          </div>
        </div>

        <Topbar />
      </div>
    </>
  );
}

export default Navbar;
