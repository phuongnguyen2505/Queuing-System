import React from "react";

interface Props {
  children?: React.ReactNode;
  fontSize: string;
  color: string;
}

const Title: React.FC<Props> = ({ children, fontSize, color }) => {
  return (
    <>
      <p
        className="title"
        style={{ fontSize, fontWeight: "700", textAlign: "left", color }}
      >
        {children}
      </p>
    </>
  );
};

export default Title;
