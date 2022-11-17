import React, { useState } from "react";
import "./styles.scss";
import { ReactComponent as Bell } from "../../../icons/bell.svg";
import { Dropdown, Menu, Space } from "antd";
import type { MenuProps } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import Title from "../../Title";

const items = [
  {
    label: "Người dùng: Nguyễn Thị Thùy Dung",
    time: "Thời gian nhận số: 12h20 ngày 30/11/2021",
  },
  {
    label: "Người dùng: Nguyễn Thiên Chinh",
    time: "Thời gian nhận số: 12h20 ngày 30/11/2021",
  },
  {
    label: "Người dùng: Võ Thị Kim Liên",
    time: "Thời gian nhận số: 12h20 ngày 30/11/2021",
  },
  {
    label: "Người dùng: Hoàng Nguyễn Quốc Huy",
    time: "Thời gian nhận số: 12h20 ngày 30/11/2021",
  },
  {
    label: "Người dùng: Võ Ngọc Lan Anh",
    time: "Thời gian nhận số: 12h20 ngày 30/11/2021",
  },
  {
    label: "Người dùng: Nguyễn Thị Trúc Anh",
    time: "Thời gian nhận số: 12h20 ngày 30/11/2021",
  },
];
const menu = (
  <Menu
    className="Menu"
    style={{
      width: 360,
      height: 450,
      borderRadius: 10,
      overflow: "auto",
    }}
  >
    <Title fontSize="20px" children="Thông báo" />
    {items.map((item) => (
      <Menu.Item>
        <div className="row item-noti">
          <span>{item.label}</span>
          <span>{item.time}</span>
        </div>
      </Menu.Item>
    ))}
  </Menu>
);
const Notification: React.FC = () => {
  return (
    <>
      <div className="notification">
        <Dropdown overlay={menu} trigger={["click"]} placement="bottom">
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Bell />
            </Space>
          </a>
        </Dropdown>
      </div>
    </>
  );
};

export default Notification;
