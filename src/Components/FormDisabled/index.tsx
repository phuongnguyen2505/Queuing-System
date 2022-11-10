import { Input } from "antd";
import React from "react";
import "./styles.scss";

interface Props {
  label: string;
  width: string;
  placeholder: string;
}

const FormDisabled: React.FC<Props> = ({ label, width, placeholder }) => {
  return (
    <>
      <form className="form-disabled">
        <label htmlFor="">{label}</label>
        <Input style={{ width }} placeholder={placeholder} disabled />
      </form>
    </>
  );
};

export default FormDisabled;
