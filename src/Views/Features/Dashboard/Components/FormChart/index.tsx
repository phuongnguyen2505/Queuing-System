import { Select } from "antd";
import React from "react";
import Title from "../../../../../Components/Title";
import { CaretDownOutlined } from "@ant-design/icons";
import "./styles.scss";
import AreaChart from "./components/AreaChart";

const { Option } = Select;
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const listTimes = [
  {
    option: "Ngày",
  },
  {
    option: "Tuần",
  },
  {
    option: "Tháng",
  },
];

const FormChart = () => {
  return (
    <>
      <div className="formchart">
        <div className="row formchart__topbar">
          <div className="col">
            <Title
              fontSize="20px"
              children="Bảng thống kê theo ngày"
              color="var(--orange-500)"
            />
            <div className="formchart__selected-day">
              <p>Tháng 11/2022</p>
            </div>
          </div>
          <span>
            Xem theo
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
              style={{ width: 100, borderRadius: 12 }}
              defaultValue="Ngày"
              optionFilterProp="children"
              onChange={handleChange}
            >
              {listTimes.map((item) => (
                <Option value={item.option}>{item.option}</Option>
              ))}
            </Select>
          </span>
        </div>
        <div className="formchart__chart">
          <AreaChart />
          {/* <TestChart /> */}
        </div>
      </div>
    </>
  );
};

export default FormChart;
