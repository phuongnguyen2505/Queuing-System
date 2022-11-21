import React, { useState } from "react";
import "./styles.scss";

interface Props {
  limit: any;
  children: string;
}

const ReadMore: React.FC<Props> = ({ limit, children }) => {
  const text = children;
  const [Show, setShow] = useState(false);
  const toggle = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <>
      <div className="ReadMore">
        {Show ? text : text.substring(0, limit)}
        &nbsp;
        <button onClick={toggle}>{Show ? "Bớt đi" : " Xêm thêm"}</button>
      </div>
    </>
  );
};

export default ReadMore;
