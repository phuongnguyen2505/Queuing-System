import { Badge } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import FormLabel from "../../../../../Components/FormLabel";
import Title from "../../../../../Components/Title";
import { ReactComponent as Back } from "../../../../../icons/back.svg";
import "./styles.scss";

const ProvideNDetails = () => {
  const listLeft = [
    {
      label: "Họ tên",
      text: "Nguyễn Thị Dung",
    },
    {
      label: "Tên dịch vụ",
      text: "Khám tim mạch",
    },
    {
      label: "Số thứ tự",
      text: "2001201",
    },
    {
      label: "Thời gian cấp",
      text: "14:35 - 07/11/2021",
    },
    {
      label: "Hạn sử dụng",
      text: "18:00 - 07/11/2021",
    },
  ];
  let listRight: { text: any; label: string }[] = [
    {
      label: "Nguồn cấp",
      text: "Kiosk",
    },
    {
      label: "Trạng thái",
      text: "Đang chờ",
    },
    {
      label: "Số điện thoại",
      text: "0948523623",
    },
    {
      label: "Địa chỉ Email",
      text: "nguyendung@gmail.com",
    },
  ];

  return (
    <>
      <Title
        color="var(--orange-500)"
        fontSize="24px"
        children="Quản lý cấp số"
      />
      <div className="row">
        <div className="col">
          <div className="provideNDetails">
            <Title
              color="var(--orange-500)"
              fontSize="20px"
              children="Thông tin cấp số"
            />
            <div className="row">
              <div className="col">
                {listLeft.map((left) => (
                  <FormLabel
                    label={left.label}
                    text={left.text}
                    width="180px"
                  />
                ))}
              </div>
              <div className="col">
                {listRight.map((left) => (
                  <FormLabel
                    label={left.label}
                    text={left.text}
                    width="180px"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="btn-add">
          <Link to="/provideN/listProvideN">
            <button className="col" style={{ cursor: "pointer" }}>
              <Back />
              <br />
              Quay lại
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProvideNDetails;
