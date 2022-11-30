import { Badge, Space } from "antd";
import React from "react";
import { useId } from "react-id-generator";
import { Link, Route } from "react-router-dom";
import ReadMore from "../../../../../Components/ReadMore-Less";
import FormTable from "../../../../../Components/FormTable";
import Title from "../../../../../Components/Title";
import { ReactComponent as Next } from "../../../../../icons/next.svg";
import { ReactComponent as Plus } from "../../../../../icons/plus.svg";
import { ReactComponent as Prev } from "../../../../../icons/prev.svg";
import FormGroup from "../../Components/FormGroup";
import "./styles.scss";
import AddService from "../../../ServicePage/Pages/AddService";

function Maincontent() {
  const dataSource = [
    {
      code: "KIO_01",
      name: "Kiosk",
      ip: "192.168.1.10",
      active: "Ngưng hoạt động",
      connect: "Mất kết nối",
      service:
        "Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
    },
    {
      code: "KIO_01",
      name: "Kiosk",
      ip: "192.168.1.10",
      active: "Hoạt động",
      connect: "Kết nối",
      service:
        "Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
    },
    {
      code: "KIO_01",
      name: "Kiosk",
      ip: "192.168.1.10",
      active: "Hoạt động",
      connect: "Mất kết nối",
      service:
        "Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
    },
    {
      code: "KIO_01",
      name: "Kiosk",
      ip: "192.168.1.10",
      active: "Ngưng hoạt động",
      connect: "Kết nối",
      service:
        "Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
    },
    {
      code: "KIO_01",
      name: "Kiosk",
      ip: "192.168.1.10",
      active: "Hoạt động",
      connect: "Mất kết nối",
      service:
        "Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
    },
    {
      code: "KIO_01",
      name: "Kiosk",
      ip: "192.168.1.10",
      active: "Hoạt động",
      connect: "Kết nối",
      service:
        "Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
    },
    {
      code: "KIO_01",
      name: "Kiosk",
      ip: "192.168.1.10",
      active: "Ngưng hoạt động",
      connect: "Kết nối",
      service:
        "Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
    },
    {
      code: "KIO_01",
      name: "Kiosk",
      ip: "192.168.1.10",
      active: "Hoạt động",
      connect: "Kết nối",
      service:
        "Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
    },
    {
      code: "KIO_01",
      name: "Kiosk",
      ip: "192.168.1.10",
      active: "Hoạt động",
      connect: "Mất kết nối",
      service:
        "Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
    },
    {
      code: "KIO_01",
      name: "Kiosk",
      ip: "192.168.1.10",
      active: "Hoạt động",
      connect: "Kết nối",
      service:
        "Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
    },
    {
      code: "KIO_01",
      name: "Kiosk",
      ip: "192.168.1.10",
      active: "Hoạt động",
      connect: "Mất kết nối",
      service:
        "Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
    },
    {
      code: "KIO_01",
      name: "Kiosk",
      ip: "192.168.1.10",
      active: "Hoạt động",
      connect: "Kết nối",
      service:
        "Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
    },
    {
      code: "KIO_01",
      name: "Kiosk",
      ip: "192.168.1.10",
      active: "Hoạt động",
      connect: "Mất kết nối",
      service:
        "Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
    },
  ];
  const columns = [
    {
      title: "Mã thiết bị",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Tên thiết bị",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Địa chỉ IP",
      dataIndex: "ip",
      key: "ip",
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "active",
      key: "active",
      render: (active: string) => (
        <span>
          <Badge status={active === "Hoạt động" ? "success" : "error"} />
          &nbsp; {active}
        </span>
      ),
    },
    {
      title: "Trạng thái kết nối",
      dataIndex: "connect",
      key: "connect",
      render: (connect: string) => (
        <span>
          <Badge status={connect === "Kết nối" ? "success" : "error"} />
          &nbsp; {connect}
        </span>
      ),
    },
    {
      title: "Dịch vụ sử dụng",
      dataIndex: "service",
      key: "service",
      render: (service: string) => (
        <>
          <ReadMore limit={80}>{service}</ReadMore>
        </>
      ),
    },
    {
      title: "",
      key: "details",
      render: () => (
        <Space size="middle">
          <Link to={"/device/listDevice/deviceDetails"}>Chi tiết</Link>
        </Space>
      ),
    },
    {
      title: "",
      key: "update",
      render: () => (
        <Space size="middle">
          <Link to={"/device/listDevice/deviceUpdate"}>Cập nhật</Link>
        </Space>
      ),
    },
  ];
  return (
    <>
      <div className="DeviceContent">
        <div className="row">
          <div className="col">
            <Title
              children="Danh sách thiết bị"
              fontSize="24px"
              color="var(--orange-500)"
            />
            <FormGroup onSearch="" />
            <div className="table">
              <FormTable columns={columns} dataSource={dataSource} />
            </div>
          </div>
          <div className="btn-add">
            <Link to="/device/listDevice/addDevice">
              <button className="col" style={{ cursor: "pointer" }}>
                <Plus />
                <br />
                Thêm thiết bị
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Maincontent;
