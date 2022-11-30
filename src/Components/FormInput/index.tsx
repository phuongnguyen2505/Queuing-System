import { Input } from "antd";
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
      <form className="form-input">
        <label htmlFor="">{label}</label>
        <Input
          style={{ width }}
          value={value}
          type={type}
          placeholder={placeholder}
        />
      </form>
    </>
  );
};

export default FormInput;
