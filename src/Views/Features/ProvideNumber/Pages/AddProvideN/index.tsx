import React, { useState } from "react";
import { Select, Modal } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import Title from "../../../../../Components/Title";
import "./styles.scss";
import Button from "../../../../../Components/Button";
import { useNavigate } from "react-router-dom";

const { Option } = Select;
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const AddProvideN = () => {
  let navigate = useNavigate();

  const listService = [
    {
      option: "Khám tim mạch",
    },
    {
      option: "Khám sản - phụ khoa",
    },
    {
      option: "Khám răng hàm mặt",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <Title
        color="var(--orange-500)"
        fontSize="24px"
        children="Quản lý cấp số"
      />
      <div className="addProvideN">
        <Title
          color="var(--orange-500)"
          fontSize="32px"
          children="Cấp số mới"
        />
        <Title
          color="var(--gray-400)"
          fontSize="20px"
          children="Dịch vụ khách hàng lựa chọn"
        />
        <div className="addProvideN__select">
          <Select
            suffixIcon={
              <CaretDownOutlined
                style={{
                  fontSize: "20px",
                  color: "var(--orange-500)",
                  pointerEvents: "none",
                }}
              />
            }
            style={{ width: "400px" }}
            placeholder="Chọn dịch vụ"
            optionFilterProp="children"
            onChange={handleChange}
          >
            {listService.map((item) => (
              <Option value={item.option}>{item.option}</Option>
            ))}
          </Select>
        </div>
        <div className="addProvideN__gr-btn">
          <Button
            border="1.5px solid var(--orange-400)"
            color="var(--orange-50)"
            height="48px"
            radius="8px"
            textColor="var(--orange-400)"
            width="147px"
            children="Hủy bỏ"
            onClick={() => navigate("/provideN/listProvideN")}
          />
          <Button
            border="none"
            color="var(--orange-400)"
            height="48px"
            radius="8px"
            textColor="var(--white)"
            width="147px"
            children="In số"
            onClick={() => setOpen(true)}
          />
          <Modal
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => navigate("/provideN/listProvideN")}
            width={469}
            footer={[
              <div className="ft-text">
                <p>Thời gian cấp: 09:30 11/10/2021</p>
                <p>Hạn sử dụng: 17:30 11/10/2021</p>
              </div>,
            ]}
          >
            <Title
              color="var(--gray-400)"
              fontSize="32px"
              children="Số thứ tự được cấp"
            />
            <p className="provideN">2001201</p>
            <p className="provideText">
              DV: Khám răng hàm mặt <b>(tại quầy số 1)</b>
            </p>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default AddProvideN;
