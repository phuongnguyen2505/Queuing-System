import React from "react";
import "./styles.scss";

interface Props {
  label: string;
  text: string;
  width: string;
}

const FormLabel: React.FC<Props> = ({ label, text, width }) => {
  return (
    <>
      <div className="FormLabel">
        <span>{label}:</span>
        <input
          type="text"
          placeholder={text}
          style={{ width: width }}
          readOnly
        />
      </div>
    </>
  );
};

export default FormLabel;
