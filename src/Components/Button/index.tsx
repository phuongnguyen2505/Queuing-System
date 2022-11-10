import React from "react";

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
  textColor: string;
  cursor: string;
}
const Button: React.FC<Props> = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
  textColor,
  cursor,
}) => {
  return (
    <>
      <button
        className="btn"
        onClick={onClick}
        style={{
          backgroundColor: color,
          color: textColor,
          border,
          borderRadius: radius,
          height,
          width,
          cursor,
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
