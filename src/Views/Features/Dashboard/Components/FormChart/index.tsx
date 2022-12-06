import { Select } from "antd";
import React from "react";
import Title from "../../../../../Components/Title";
import { CaretDownOutlined } from "@ant-design/icons";
import "./styles.scss";
import AreaChart from "./components/AreaChart";
import FormSelect from "../../../../../Components/FormSelect";

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
          <div className="select-day">
            <p>Xem theo</p>
            <FormSelect
              label=""
              prop={listTimes}
              width="106px"
              place=""
              value="Ngày"
            />
          </div>
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
