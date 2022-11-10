import React from "react";
import "./styles.scss";
import logo from "../../images/logo.png";

interface Props {
  // onClick: () => void;
  width: string;
}

const Logo: React.FC<Props> = ({ width }) => {
  return (
    <>
      <div
        className="logo"
        style={{
          width,
        }}
      >
        <img src={logo} alt="" />
      </div>
    </>
  );
};

export default Logo;
