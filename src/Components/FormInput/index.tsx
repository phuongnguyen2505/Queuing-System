import { Form, Input } from "antd";
import React from "react";
import "./styles.scss";

interface Props {
  label: string;
  width: string;
  type: string;
  placeholder: string;
  value: string;
}

const FormInput: React.FC<Props> = ({
  label,
  width,
  type,
  placeholder,
  value,
}) => {
  return (
    <>
      <Form className="form-input">
        <label htmlFor="">{label}</label>
        <Form.Item
          name={label}
          rules={[{ required: true, message: "Không được bỏ trống!" }]}
        >
          <Input
            style={{ width }}
            defaultValue={value}
            type={type}
            placeholder={placeholder}
          />
        </Form.Item>
      </Form>
    </>
  );
};

export default FormInput;
