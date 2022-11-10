import { Input, Space } from "antd";
import React from "react";
import "./styles.scss";

interface Props {
  label: string;
}

const FromPassword: React.FC<Props> = ({ label }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  function onMouseDown() {
    setShowPassword(true);
  }

  function onMouseUp() {
    setShowPassword(false);
  }
  return (
    <>
      <Space direction="vertical">
        <label htmlFor="">{label}</label>
        <Input.Password
          style={{ width: "400px", height: "44px", borderRadius: "8px" }}
        />
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="input password"
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          hidden
        />
      </Space>
    </>
  );
};

export default FromPassword;
