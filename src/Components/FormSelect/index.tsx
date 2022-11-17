import { Select } from "antd";
import React from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import "./styles.scss";

const { Option } = Select;
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const FormSelect = () => {
  return (
    <>
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
        style={{ width: 100 }}
        defaultValue="Ngày"
        optionFilterProp="children"
        onChange={handleChange}
      >
        <Option value="day">Ngày</Option>
        <Option value="week">Tháng</Option>
        <Option value="month">Năm</Option>
      </Select>
    </>
  );
};

export default FormSelect;
