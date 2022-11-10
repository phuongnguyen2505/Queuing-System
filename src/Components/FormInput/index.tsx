import { Input } from "antd";
import React from "react";
import "./styles.scss";

interface Props {
  label: string;
  width: string;
  type: string;
}

const FormInput: React.FC<Props> = ({ label, width, type }) => {
  return (
    <>
      <form className="form-input">
        <label htmlFor="">{label}</label>
        <Input style={{ width }} type={type} />
      </form>
    </>
  );
};

export default FormInput;
