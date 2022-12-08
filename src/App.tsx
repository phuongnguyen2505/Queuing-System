import { Route, Routes } from "react-router-dom";
import "antd/dist/antd.min.css";
import "./App.css";
import "./Styles/style.scss";
import Navbar from "./Components/Navbar";
import FormForgot from "./Views/Features/Auth/FormForgot";
import FormLogin from "./Views/Features/Auth/FormLogin";
import ResetPassword from "./Views/Features/Auth/ResetPassword";
import Dashboard from "./Views/Features/Dashboard";
import Device from "./Views/Features/Device";
import ProfileDetails from "./Views/Features/ProfileDetails";
import AddDevice from "./Views/Features/Device/Pages/AddDevice";
import DeviceDetails from "./Views/Features/Device/Pages/DeviceDetails";
import DeviceUpdate from "./Views/Features/Device/Pages/DeviceUpdate";
import Service from "./Views/Features/ServicePage";
import AddService from "./Views/Features/ServicePage/Pages/AddService";
import ServiceDetails from "./Views/Features/ServicePage/Pages/ServiceDetails";
import ServiceUpdate from "./Views/Features/ServicePage/Pages/ServiceUpdate";
import ProvideNumber from "./Views/Features/ProvideNumber";
import AddProvideN from "./Views/Features/ProvideNumber/Pages/AddProvideN";
import ProvideNDetails from "./Views/Features/ProvideNumber/Pages/ProvideNDetails";
import ReportPage from "./Views/Features/ReportPage";
import SystemSetting from "./Views/Features/SystemSetting";
import AddRole from "./Views/Features/SystemSetting/pages/AddRole";
import UpdateRole from "./Views/Features/SystemSetting/pages/UpdateRole";
import AccountManage from "./Views/Features/SystemSetting/pages/AccountManage";
import AddAccount from "./Views/Features/SystemSetting/pages/AddAccount";
import UpdateAccount from "./Views/Features/SystemSetting/pages/UpdateAccount";
import UserDiary from "./Views/Features/SystemSetting/pages/UserDiary";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Navbar />}>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/device/listDevice" element={<Device />} />
          <Route path="/device/listDevice/addDevice" element={<AddDevice />} />
          <Route
            path="/device/listDevice/deviceDetails"
            element={<DeviceDetails />}
          />
          <Route
            path="/device/listDevice/deviceUpdate"
            element={<DeviceUpdate />}
          />
          <Route path="/service/listService" element={<Service />} />
          <Route
            path="/service/listService/addService"
            element={<AddService />}
          />
          <Route
            path="/service/listService/serviceDetails"
            element={<ServiceDetails />}
          />
          <Route
            path="/service/listService/serviceDetails/serviceUpdate"
            element={<ServiceUpdate />}
          />
          <Route path="/provideN/listprovideN" element={<ProvideNumber />} />
          <Route
            path="/provideN/listprovideN/addProvideN"
            element={<AddProvideN />}
          />
          <Route
            path="/provideN/listprovideN/provideNDetails"
            element={<ProvideNDetails />}
          />

          <Route path="/report/createReport" element={<ReportPage />} />
          <Route path="/systemSetting/roleManage" element={<SystemSetting />} />
          <Route
            path="/systemSetting/roleManage/addRole"
            element={<AddRole />}
          />
          <Route
            path="/systemSetting/roleManage/updateRole"
            element={<UpdateRole />}
          />
          <Route
            path="/systemSetting/accountManage"
            element={<AccountManage />}
          />
          <Route
            path="/systemSetting/accountManage/addAccount"
            element={<AddAccount />}
          />
          <Route
            path="/systemSetting/accountManage/updateAccount"
            element={<UpdateAccount />}
          />
          <Route path="/systemSetting/userDiary" element={<UserDiary />} />
          <Route path="/profile" element={<ProfileDetails />} />
          {/* <Route path="/service" element={<Service />} />
          <Route path="/level" element={<Level />} />
          <Route path="/report" element={<Report />} />
          <Route path="/setting" element={<Setting />} /> */}
        </Route>
        <Route>
          <Route path="/login" element={<FormLogin />} />
          <Route path="/forgot" element={<FormForgot />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
