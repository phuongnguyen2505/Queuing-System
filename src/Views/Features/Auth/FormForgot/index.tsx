import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../Components/Button";
import FormInput from "../../../../Components/FormInput";
import Logo from "../../../../Components/Logo";
import Title from "../../../../Components/Title";
import bg from "../../../../icons/bg-forgot.svg";
import "./styles.scss";

function FormForgot() {
  let navigate = useNavigate();

  return (
    <>
      <div className="container-fluid flex">
        <div className="row">
          <Logo width="170px" />
          <div className="loginFrom">
            <Title children="Đặt lại mật khẩu" fontSize="22px" />
            <FormInput
              label="Vui lòng nhập email để đặt lại mật khẩu của bạn"
              width="400px"
              type="email"
            />
            <div className="loginFrom__btn">
              <Button
                border="1px solid var(--orange-400)"
                color="var(--white)"
                textColor="var(--orange-400)"
                height="40px"
                onClick={() => navigate("/")}
                radius="8px"
                width="162px"
                children="Hủy"
                cursor="pointer"
              />
              <Button
                border="none"
                color="var(--orange)"
                textColor="var(--white)"
                height="40px"
                onClick={() => navigate("/resetPassword")}
                radius="8px"
                width="162px"
                children="Tiếp tục"
                cursor="pointer"
              />
            </div>
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

export default FormForgot;
