import { useNavigate } from "react-router-dom";
import Button from "../../../../Components/Button";
import FromPassword from "../../../../Components/FormPassword";
import Logo from "../../../../Components/Logo";
import Title from "../../../../Components/Title";
import bg from "../../../../icons/bg-forgot.svg";
import "./styles.scss";

function ResetPassword() {
  let navigate = useNavigate();
  return (
    <>
      <div className="container-fluid flex">
        <div className="row">
          <Logo width="170px" />
          <div className="loginFrom">
            <Title
              children="Đặt lại mật khẩu mới"
              fontSize="22px"
              color="var(--gray-500)"
            />
            <FromPassword label="Mật khẩu" place="Nhập mật khẩu" />
            <FromPassword label="Nhập lại mật khẩu" place="Nhập lại mật khẩu" />
            <Button
              border="none"
              color="var(--orange)"
              textColor="var(--white)"
              height="40px"
              onClick={() => navigate("/profile")}
              radius="8px"
              width="162px"
              children="Xác nhận"
            />
          </div>
        </div>
        <div className="row">
          <div className="queuing">
            <img src={bg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
