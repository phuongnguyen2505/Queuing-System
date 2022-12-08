import TextArea from "antd/lib/input/TextArea";
import React from "react";
import "./styles.scss";

interface Props {
  label: string;
  placeholder: string;
  size: number;
}

const FormTextArea: React.FC<Props> = ({ label, placeholder, size }) => {
  return (
    <>
      <form className="FormTextArea">
        <p>{label}:</p>
        <TextArea
          rows={size}
          placeholder={placeholder}
          style={{ resize: "none" }}
        />
      </form>
    </>
  );
};

export default FormTextArea;
