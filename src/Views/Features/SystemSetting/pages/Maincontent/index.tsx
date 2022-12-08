import React from "react";
import { Link } from "react-router-dom";
import FormTable from "../../../../../Components/FormTable";
import Title from "../../../../../Components/Title";
import { Space, Input } from "antd";
import { ReactComponent as Plus } from "../../../../../icons/plus.svg";
import "./styles.scss";
const { Search } = Input;

const Maincontent = () => {
  const dataSource = [
    {
      rolename: "Kế toán",
      amount: "5",
      des: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    },
    {
      rolename: "Bác sĩ",
      amount: "5",
      des: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    },
    {
      rolename: "Lễ tân",
      amount: "5",
      des: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    },
  ];
  const columns = [
    {
      title: "Tên vai trò",
      dataIndex: "rolename",
      key: "rolename",
    },
    {
      title: "Số người dùng",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Mô tả",
      dataIndex: "des",
      key: "des",
    },
    {
      title: "",
      key: "update",
      render: () => (
        <Space size="middle">
          <Link to={"/systemSetting/roleManage/updateRole"}>Cập nhật</Link>
        </Space>
      ),
    },
  ];
  return (
    <>
      <div className="systemContent">
        <div className="row">
          <div className="col">
            <Title
              color="var(--orange-500)"
              fontSize="24px"
              children="Danh sách vai trò"
            />
            <div className="systemContent__search">
              <div className="col" style={{ fontSize: "16px" }}>
                <p>Từ Khóa</p>

                <Space direction="vertical">
                  <Search
                    allowClear
                    placeholder="Nhập từ khóa"
                    style={{ width: 300 }}
                  />
                </Space>
              </div>
            </div>
            <FormTable columns={columns} dataSource={dataSource} size={10} />
          </div>
          <div className="btn-add">
            <Link to="/systemSetting/roleManage/addRole">
              <button className="col" style={{ cursor: "pointer" }}>
                <Plus />
                <br />
                Thêm vai trò
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maincontent;
