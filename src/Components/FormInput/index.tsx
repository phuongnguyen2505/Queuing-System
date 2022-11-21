import { Input } from "antd";
import React from "react";
import "./styles.scss";

interface Props {
  label: string;
  width: string;
  type: string;
  placeholder: string;
}

const FormInput: React.FC<Props> = ({ label, width, type, placeholder }) => {
  return (
    <>
      <form className="form-input">
        <label htmlFor="">{label}</label>
        <Input style={{ width }} type={type} placeholder={placeholder} />
      </form>
    </>
  );
};

export default FormInput;
