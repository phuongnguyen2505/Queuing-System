import React from "react";

interface Props {
  children?: React.ReactNode;
  fontSize: string;
}

const Title: React.FC<Props> = ({ children, fontSize }) => {
  return (
    <>
      <p
        className="title"
        style={{ fontSize, fontWeight: "700", textAlign: "center" }}
      >
        {children}
      </p>
    </>
  );
};

export default Title;
