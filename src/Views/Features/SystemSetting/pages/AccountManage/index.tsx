import React from "react";
import { Link } from "react-router-dom";
import FormTable from "../../../../../Components/FormTable";
import Title from "../../../../../Components/Title";
import FormGroup from "./components/FormGroup";
import { Space, Badge } from "antd";
import { ReactComponent as Plus } from "../../../../../icons/plus.svg";

import "./styles.scss";
const AccountManage = () => {
  const dataSource = [
    {
      idlogin: "admin123",
      name: "Nguyễn Văn A",
      phone: "0919256712",
      email: "admin123@gmail.com",
      role: "Admin",
      status: "Hoạt động",
    },
    {
      idlogin: "ketoan123",
      name: "Nguyễn Văn B",
      phone: "0919256712",
      email: "ketoan12345@gmail.com",
      role: "Kế toán",
      status: "Ngưng hoạt động",
    },
    {
      idlogin: "admin456",
      name: "Nguyễn Văn C",
      phone: "0919256712",
      email: "admin456@gmail.com",
      role: "Admin",
      status: "Hoạt động",
    },
    {
      idlogin: "admin789",
      name: "Nguyễn Văn D",
      phone: "0919256712",
      email: "admin789@gmail.com",
      role: "Admin",
      status: "Hoạt động",
    },
    {
      idlogin: "dr123",
      name: "Nguyễn Văn E",
      phone: "0919256712",
      email: "dr123@gmail.com",
      role: "Bác sĩ",
      status: "Ngưng hoạt động",
    },
  ];
  const columns = [
    {
      title: "Tên đăng nhập",
      dataIndex: "idlogin",
      key: "idlogin",
    },
    {
      title: "Họ tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <span>
          <Badge status={status === "Hoạt động" ? "success" : "error"} />
          &nbsp; {status}
        </span>
      ),
    },
    {
      title: "",
      key: "update",
      render: () => (
        <Space size="middle">
          <Link to={"/systemSetting/accountManage/updateAccount"}>
            Cập nhật
          </Link>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Title
        color="var(--orange-500)"
        fontSize="24px"
        children="Danh sách tài khoản"
      />
      <div className="accountManage">
        <div className="row">
          <div className="col">
            <FormGroup />
            <FormTable columns={columns} dataSource={dataSource} size={10} />
          </div>
          <div className="btn-add">
            <Link to="/systemSetting/accountManage/addAccount">
              <button className="col" style={{ cursor: "pointer" }}>
                <Plus />
                <br />
                Thêm tài khoản
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountManage;
