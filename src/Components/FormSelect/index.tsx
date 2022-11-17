import { Select } from "antd";
import React from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import "./styles.scss";

const { Option } = Select;
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

interface Props {
  option: string;
  value: string;
}

const FormSelect: React.FC<Props> = ({ option, value }) => {
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
        defaultValue={option}
        optionFilterProp="children"
        onChange={handleChange}
      >
        <Option value={value}>{option}</Option>
      </Select>
    </>
  );
};

export default FormSelect;
