import React from "react";
import Percent from "./components/Percent";
import dash3 from "../../../../../icons/dashboard3.svg";
import dash4 from "../../../../../icons/dashboard4.svg";
import dash5 from "../../../../../icons/dashboard5.svg";
import dash6 from "../../../../../icons/dashboard6.svg";
import arrowUp from "../../../../../icons/arrow-up.svg";
import arrowDown from "../../../../../icons/arrow-down.svg";
import "./styles.scss";

function CardStatus() {
  let cardItem = [
    {
      src: `${dash3}`,
      title: "Số thứ tự đã cấp",
      serial: "4.221",
      src2: `${arrowUp}`,
      percent: 32.41,
      color: "var(--orange-400)",
      bg: "rgba(255, 149, 1, 0.15)",
    },
    {
      src: `${dash4}`,
      title: "Số thứ tự đã sử dụng",
      serial: "3.721",
      src2: `${arrowDown}`,
      percent: 32.41,
      color: "var(--red)",
      bg: "rgba(231, 63, 63, 0.15)",
    },
    {
      src: `${dash5}`,
      title: "Số thứ tự đã cấp",
      serial: "468",
      src2: `${arrowUp}`,
      percent: 56.41,
      color: "var(--orange-400)",
      bg: "rgba(255, 149, 1, 0.15)",
    },
    {
      src: `${dash6}`,
      title: "Số thứ tự đã cấp",
      serial: "32",
      src2: `${arrowDown}`,
      percent: 22.41,
      color: "var(--red)",
      bg: "rgba(231, 63, 63, 0.15)",
    },
  ];
  return (
    <>
      <div className="CardStatus">
        {cardItem.map((item) => (
          <div className="CardStatus__item">
            <div className="row">
              <div className="CardStatus__icon">
                <img src={item.src} alt={item.title} />
              </div>
              <div className="CardStatus__title">
                <p>{item.title}</p>
              </div>
            </div>
            <div className="row bottomcard">
              <div className="CardStatus__serial">
                <p>{item.serial}</p>
              </div>
              <Percent
                children={item.percent}
                src={item.src2}
                color={item.color}
                background={item.bg}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardStatus;
