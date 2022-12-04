import React from "react";
import Button from "../../../../../Components/Button";
import FormInput from "../../../../../Components/FormInput";
import FormTextArea from "../../../../../Components/FormTextArea";
import Title from "../../../../../Components/Title";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import CheckboxForm from "../../Components/CheckboxForm";

const ServiceUpdate = () => {
  const listCheck = [
    {
      label: "Tăng tự động từ",
      label2: "đến",
      value: "0001",
      value2: "9999",
      className: "show",
      className2: "show",
    },
    {
      label: "Prefix",
      value: "0001",
      className2: "show",
    },
    {
      label: "Surfix",
      value: "0001",
      className2: "show",
    },
    {
      label: "Reset mỗi ngày",
    },
  ];
  let navigate = useNavigate();

  return (
    <>
      <Title
        color="var(--orange-500)"
        fontSize="24px"
        children="Quản lý dịch vụ"
      />
      <div className="serviceUpdate">
        <Title
          color="var(--orange-500)"
          fontSize="20px"
          children="Thông tin dịch vụ"
        />
        <div className="row">
          <div className="col">
            <FormInput
              label="Mã dịch vụ"
              placeholder=""
              type="text"
              value="201"
              width="100%"
            />
            <FormInput
              label="Tên dịch vụ"
              placeholder="Nhập tên dịch vụ"
              type="text"
              value="Khám tim mạch"
              width="100%"
            />
          </div>
          <div className="col">
            <FormTextArea label="Mô tả" placeholder="Mô tả dịch vụ" />
          </div>
        </div>
        <Title
          color="var(--orange-500)"
          fontSize="20px"
          children="Quy tắc cấp số"
        />
        <div className="serviceUpdate__form-checkbox">
          <CheckboxForm prop={listCheck} width="150px" />
          <p className="imp-text">Là trường thông tin bắt buộc</p>
        </div>
      </div>
      <div className="serviceUpdate__gr-btn">
        <Button
          border="1.5px solid var(--orange-400)"
          color="var(--orange-50)"
          height="48px"
          radius="8px"
          textColor="var(--orange-400)"
          width="147px"
          children="Hủy bỏ"
          onClick={() => navigate("/service/listService")}
        />
        <Button
          border="none"
          color="var(--orange-400)"
          height="48px"
          radius="8px"
          textColor="var(--white)"
          width="147px"
          children="Cập nhật"
          onClick={() => navigate("/service/listService")}
        />
      </div>
    </>
  );
};

export default ServiceUpdate;
