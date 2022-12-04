import React, { useState } from "react";
import Title from "../../../../../Components/Title";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";
import { Progress } from "antd";
import { ReactComponent as Monitor } from "../../../../../icons/monitor.svg";
import { ReactComponent as Service } from "../../../../../icons/quest2.svg";
import { ReactComponent as Level } from "../../../../../icons/dashboard2.svg";

function RightBar() {
  const [startDate, setStartDate] = useState(new Date());
  const totalItem = [
    {
      percent1: 90,
      percent2: 10,
      numeral: "4.221",
      label: "Thiết bị",
      color: "var(--orange-500)",
      color2: "var(--yellow)",
      color3: "var(--gray-300)",
      status1: "Đang hoạt động",
      status2: "Ngưng hoạt động",
      value1: "3.799",
      value2: "422",
      src: <Monitor style={{ stroke: "var(--orange-500)", width: "14px" }} />,
    },
    {
      percent1: 76,
      percent2: 24,
      numeral: "276",
      label: "Dịch vụ",
      color: "var(--blue)",
      color2: "var(--blue)",
      color3: "var(--gray-300)",
      status1: "Đang hoạt động",
      status2: "Ngưng hoạt động",
      value1: "210",
      value2: "66",
      src: <Service />,
    },
    {
      percent1: 86,
      percent2: 13,
      percent3: 1,
      numeral: "4.221",
      label: "Cấp số",
      classNames: "hidden-process",
      classNames2: "show-item",
      color: "var(--green)",
      color2: "var(--green)",
      color3: "var(--gray-300)",
      color4: "var(--fuschia-50)",
      status1: "Đã sử dụng",
      status2: "Đang chờ",
      status3: "Bỏ qua",
      value1: "3.721",
      value2: "486",
      value3: "32",
      src: <Level style={{ stroke: "var(--green)", width: "14px" }} />,
    },
  ];
  return (
    <>
      <div className="RightBar">
        <div className="col">
          <div className="RightBar__topbar">
            <Title
              fontSize="24px"
              children="Tổng quan"
              color="var(--orange-500)"
            />
            {totalItem.map((item) => (
              <div className="row row-topbar">
                <div className="RightBar__process">
                  <Progress
                    type="circle"
                    percent={item.percent1}
                    width={60}
                    strokeColor={item.color}
                    trailColor={"var(--gray-50)"}
                  />
                  <div className="RightBar__mini-process">
                    <Progress
                      type="circle"
                      percent={item.percent2}
                      width={50}
                      strokeColor={"var(--gray-300)"}
                      trailColor={"var(--gray-50)"}
                    />
                    <div className={`tiny-process ${item.classNames}`}>
                      <Progress
                        type="circle"
                        percent={item.percent3}
                        width={40}
                        strokeColor={"var(--fuschia-50)"}
                        trailColor={"var(--gray-50)"}
                      />
                    </div>
                  </div>
                </div>
                <div className="RightBar__number">
                  <div className="numeral">
                    <p>{item.numeral}</p>
                  </div>
                  <div className="numeral-of">
                    {item.src}
                    <span style={{ color: `${item.color}` }}>{item.label}</span>
                  </div>
                </div>
                <div className="RightBar__status">
                  {/* <div className="status1">
                    <span>{item.status1}</span>
                  </div>
                  <div className="status2">
                    <span>{item.status2}</span>
                  </div>
                  <div className="status3">
                    <span>{item.status3}</span>
                  </div> */}
                  <ul>
                    <li>
                      <div className="row row-status">
                        <span
                          className="dot"
                          style={{ color: `${item.color2}` }}
                        ></span>
                        <span>{item.status1}</span>
                      </div>
                      <p style={{ color: `${item.color}` }}>{item.value1}</p>
                    </li>
                    <li>
                      <div className="row row-status">
                        <span className="dot"></span>
                        <span>{item.status2}</span>
                      </div>
                      <p style={{ color: `${item.color}` }}>{item.value2}</p>
                    </li>
                    <li className={`hidden-item ${item.classNames2}`}>
                      <div className="row row-status">
                        <span
                          className="dot"
                          style={{ color: `${item.color4}` }}
                        ></span>
                        <span>{item.status3}</span>
                      </div>
                      <p style={{ color: `${item.color}` }}>{item.value3}</p>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="RightBar__botbar">
            <DatePicker
              selected={startDate}
              onChange={(date: any) => setStartDate(date)}
              inline
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RightBar;
