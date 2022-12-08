import { Select } from "antd";
import React from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import "./styles.scss";

const { Option } = Select;

interface Props {
  prop: any;
  label: string;
  width: string;
  value: string;
  place: string;
}

const FormSelect: React.FC<Props> = ({ prop, label, width, value, place }) => {
  return (
    <>
      <div className="selectForm" style={{ width: width }}>
        <p>{label}</p>
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
          style={{ width: 300 }}
          placeholder={place}
          defaultValue={value}
          optionFilterProp="children"
        >
          {prop.map((item) => (
            <Option value={item.option}>{item.option}</Option>
          ))}
        </Select>
      </div>
    </>
  );
};

export default FormSelect;
