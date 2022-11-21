import React from "react";
import "./styles.scss";

interface Props {
  label: string;
  text: string;
}

const FormLabel: React.FC<Props> = ({ label, text }) => {
  return (
    <>
      <div className="FormLabel">
        <span>{label}:</span>
        <input type="text" placeholder={text} readOnly />
      </div>
    </>
  );
};

export default FormLabel;
