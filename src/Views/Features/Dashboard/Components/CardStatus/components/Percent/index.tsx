import React from "react";

interface Props {
  src: string;
  children?: React.ReactNode;
  color: string;
  background: string;
}

const Percent: React.FC<Props> = ({ src, children, color, background }) => {
  return (
    <>
      <div className="CardStatus__percent" style={{ color, background }}>
        <div className="row">
          <img src={src} alt="" />
          <p>{children}%</p>
        </div>
      </div>
    </>
  );
};

export default Percent;
