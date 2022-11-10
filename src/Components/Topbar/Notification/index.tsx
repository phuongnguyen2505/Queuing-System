import React from "react";
import "./styles.scss";
import { ReactComponent as Bell } from "../../../icons/bell.svg";

function Notification() {
  return (
    <>
      <div className="notification">
        <Bell />
      </div>
    </>
  );
}

export default Notification;
