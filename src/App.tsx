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
