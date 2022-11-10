import React from "react";
import "./styles.scss";
import avatar from "../../../images/avatar.jpg";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <div className="profile">
        <div className="profile__avatar">
          <img src={avatar} alt="" />
        </div>
        <Link to="/profile">
          <div className="profile__name">
            <p className="hello">Xin chào</p>
            <p className="name">Nguyễn Duy Phương</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Profile;
