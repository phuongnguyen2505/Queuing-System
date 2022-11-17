import { Item } from "@syncfusion/ej2-react-navigations";
import React from "react";
import FormSelect from "../../../../../Components/FormSelect";
import Title from "../../../../../Components/Title";
import ChartArea from "./components/AreaChart";
import "./styles.scss";

const FormChart = () => {
  return (
    <>
      <div className="formchart">
        <div className="row formchart__topbar">
          <div className="col">
            <Title fontSize="20px" children="Bảng thống kê theo ngày" />
            <div className="formchart__selected-day">
              <p>Tháng 11/2022</p>
            </div>
          </div>
          <span>
            Xem theo
            <FormSelect />
          </span>
        </div>
        <div className="formchart__chart">
          <ChartArea />
        </div>
      </div>
    </>
  );
};

export default FormChart;
