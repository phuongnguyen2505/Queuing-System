import { Input, Space } from "antd";
import React from "react";
import FormDatePicker from "../../../../../Components/FormDatePicker";
import FormTable from "../../../../../Components/FormTable";
import "./styles.scss";
const { Search } = Input;

const UserDiary = () => {
  const data = [
    {
      idlogin: "admin123",
      time: "01/12/2021 15:12:17",
      ip: "192.168.1.1",
      operations: "Cập nhật thông tin người dùng",
    },
    {
      idlogin: "admin123",
      time: "01/12/2021 15:12:17",
      ip: "192.168.1.1",
      operations: "Cập nhật thông tin người dùng",
    },
    {
      idlogin: "admin123",
      time: "01/12/2021 15:12:17",
      ip: "192.168.1.1",
      operations: "Cập nhật thông tin người dùng",
    },
    {
      idlogin: "admin123",
      time: "01/12/2021 15:12:17",
      ip: "192.168.1.1",
      operations: "Cập nhật thông tin người dùng",
    },
    {
      idlogin: "admin123",
      time: "01/12/2021 15:12:17",
      ip: "192.168.1.1",
      operations: "Cập nhật thông tin người dùng",
    },
    {
      idlogin: "admin123",
      time: "01/12/2021 15:12:17",
      ip: "192.168.1.1",
      operations: "Cập nhật thông tin người dùng",
    },
    {
      idlogin: "admin123",
      time: "01/12/2021 15:12:17",
      ip: "192.168.1.1",
      operations: "Cập nhật thông tin người dùng",
    },
    {
      idlogin: "admin123",
      time: "01/12/2021 15:12:17",
      ip: "192.168.1.1",
      operations: "Cập nhật thông tin người dùng",
    },
    {
      idlogin: "admin123",
      time: "01/12/2021 15:12:17",
      ip: "192.168.1.1",
      operations: "Cập nhật thông tin người dùng",
    },
    {
      idlogin: "admin123",
      time: "01/12/2021 15:12:17",
      ip: "192.168.1.1",
      operations: "Cập nhật thông tin người dùng",
    },
    {
      idlogin: "admin123",
      time: "01/12/2021 15:12:17",
      ip: "192.168.1.1",
      operations: "Cập nhật thông tin người dùng",
    },
    {
      idlogin: "admin123",
      time: "01/12/2021 15:12:17",
      ip: "192.168.1.1",
      operations: "Cập nhật thông tin người dùng",
    },
    {
      idlogin: "admin123",
      time: "01/12/2021 15:12:17",
      ip: "192.168.1.1",
      operations: "Cập nhật thông tin người dùng",
    },
  ];
  const columns = [
    {
      title: "Tên đăng nhập",
      dataIndex: "idlogin",
      key: "idlogin",
    },
    {
      title: "Thời gian tác động",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "IP thực hiện",
      dataIndex: "ip",
      key: "ip",
    },
    {
      title: "Thao tác thực hiện",
      dataIndex: "operations",
      key: "operations",
    },
  ];
  return (
    <>
      <div className="userDiary">
        <div className="row">
          <div className="col">
            <FormDatePicker />
          </div>
          <div className="search">
            <p>Từ Khóa</p>
            <Space direction="vertical">
              <Search
                allowClear
                // onSearch={onSearch}
                placeholder="Nhập từ khóa"
                style={{ width: 300 }}
              />
            </Space>
          </div>
        </div>
        <FormTable columns={columns} dataSource={data} size={10} />
      </div>
    </>
  );
};

export default UserDiary;
