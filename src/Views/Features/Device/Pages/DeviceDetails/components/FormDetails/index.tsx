import React from "react";
import { Link, useLocation } from "react-router-dom";
import FormLabel from "../../../../../../../Components/FormLabel";
import Title from "../../../../../../../Components/Title";
import { ReactComponent as Edit } from "../../../../../../../icons/edit.svg";

import "./styles.scss";

const FormDetails = () => {
  const listDetails = [
    {
      label: "Mã thiết bị",
      text: "KIO_01",
    },
    {
      label: "Tên thiết bị",
      text: "Kiosk",
    },
    {
      label: "Địa chỉ IP",
      text: "128.172.308",
    },
  ];
  const listDetail = [
    {
      label: "Loại thiết bị",
      text: "Kiosk",
    },
    {
      label: "Tên đăng nhập",
      text: "Linhkyo011",
    },
    {
      label: "Mật khẩu",
      text: "CMS",
    },
  ];

  return (
    <>
      <div className="FormDetails">
        <div className="row">
          <div className="FormDetails__left">
            <Title
              color="var(--orange-500)"
              fontSize="20px"
              children="Thông tin thiết bị"
            />
            <div className="row">
              <div className="col">
                {listDetails.map((item) => (
                  <FormLabel label={item.label} text={item.text} />
                ))}
              </div>
              <div className="col">
                {listDetail.map((item) => (
                  <FormLabel label={item.label} text={item.text} />
                ))}
              </div>
              <div className="FormDetails__service">
                <span>Dịch vụ sử dụng:</span>
                <p>
                  Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám
                  tai mũi họng, Khám hô hấp, Khám tổng quát.
                </p>
              </div>
            </div>
          </div>
          <div className="FormDetails__right">
            <Link to="/device/listDevice/deviceUpdate">
              <button className="col" style={{ cursor: "pointer" }}>
                <Edit />
                <br />
                Cập nhật thiết bị
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormDetails;
