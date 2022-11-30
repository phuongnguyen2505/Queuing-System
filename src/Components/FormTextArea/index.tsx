import TextArea from "antd/lib/input/TextArea";
import React from "react";
import "./styles.scss";

interface Props {
  label: string;
  placeholder: string;
}

const FormTextArea: React.FC<Props> = ({ label, placeholder }) => {
  return (
    <>
      <form className="FormTextArea">
        <p>{label}:</p>
        <TextArea
          //   rows={6}
          placeholder={placeholder}
          style={{ resize: "none" }}
        />
      </form>
    </>
  );
};

export default FormTextArea;
