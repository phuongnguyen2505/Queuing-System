import { Form, Input, Space } from "antd";
import React from "react";
import "./styles.scss";

interface Props {
  label: string;
  place: string;
  width: string;
}

const FromPassword: React.FC<Props> = ({ label, place, width }) => {
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
        <Form>
          <label htmlFor="">{label}</label>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Không được bỏ trống!" }]}
          >
            <Input.Password
              style={{ width: width, height: "44px" }}
              placeholder={place}
            />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Nhập mật khẩu"
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
              hidden
            />
          </Form.Item>
        </Form>
      </Space>
    </>
  );
};

export default FromPassword;
