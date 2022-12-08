import "antd/dist/antd.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../Components/Button";
import FormInput from "../../../../Components/FormInput";
import FromPassword from "../../../../Components/FormPassword";
import Logo from "../../../../Components/Logo";
import bg from "../../../../icons/bg-img.svg";
import "./styles.scss";

function FormLogin() {
  let navigate = useNavigate();

  return (
    <>
      <div className="container-fluid flex">
        <div className="row">
          <Logo width="170px" />
          <div className="loginFrom">
            <FormInput
              label="Tên đăng nhập"
              width="400px"
              type="text"
              placeholder="Nhập tên đăng nhập"
              value=""
            />
            <FromPassword label="Mật khẩu" place="Nhập mật khẩu" width="" />
            <Link to="/forgot">Quên mật khẩu?</Link>
            <Button
              border="none"
              color="var(--orange)"
              textColor="var(--white)"
              height="40px"
              onClick={() => navigate("/")}
              radius="8px"
              width="162px"
              children="Đăng nhập"
            />
          </div>
        </div>
        <div className="row">
          <div className="queuing">
            <div className="queuing__bg-img">
              <img src={bg} alt="" />
            </div>
            <div className="queuing__title">
              <p>Hệ thống</p>
              <span>QUẢN LÝ XẾP HÀNG</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormLogin;
