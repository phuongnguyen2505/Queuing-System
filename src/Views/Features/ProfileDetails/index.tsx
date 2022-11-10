import React from "react";
import FormDisabled from "../../../Components/FormDisabled";
import Title from "../../../Components/Title";
import "./styles.scss";
import Camera from "../../../icons/camera.svg";
import Avatar from "../../../images/avatar.jpg";

function ProfileDetails() {
  return (
    <>
      <div className="container">
        <div className="row details">
          <div className="profileDetails">
            <div className="profileDetails__avatar">
              <div className="profileDetails__pic">
                <img className="ava" src={Avatar} alt="" />
                <div className="profileDetails__cam">
                  <img className="cam" src={Camera} alt="" />
                </div>
              </div>
            </div>
            <Title children="Nguyễn Duy Phương" fontSize="24px" />
          </div>
          <div className="midcolumn">
            <FormDisabled
              label="Tên người dùng"
              width="384px"
              placeholder="Nguyễn Duy Phương"
            />
            <FormDisabled
              label="Số điện thoại"
              width="384px"
              placeholder="0818888480"
            />
            <FormDisabled
              label="Email"
              width="384px"
              placeholder="phuong.t13579@gmail.com"
            />
          </div>
          <div className="rightcolumn">
            <FormDisabled
              label="Tên đăng nhập"
              width="384px"
              placeholder="phuong123"
            />
            <FormDisabled label="Mật khẩu" width="384px" placeholder="123456" />
            <FormDisabled label="Vai trò" width="384px" placeholder="Intern" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileDetails;
