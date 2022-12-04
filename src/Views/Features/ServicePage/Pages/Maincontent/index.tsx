import { Link } from "react-router-dom";
import { ReactComponent as Plus } from "../../../../../icons/plus.svg";

import { Badge, Space } from "antd";
import FormTable from "../../../../../Components/FormTable";
import Title from "../../../../../Components/Title";
import FormGroup from "../../Components/FormGroup";
import "./style.scss";

const dataSource = [
  {
    code: "KIO_01",
    name: "Kiosk1",
    des: "Mô tả dịch vụ",
    active: "Hoạt động",
  },
  {
    code: "KIO_01",
    name: "Kiosk2",
    des: "Mô tả dịch vụ",
    active: "Hoạt động",
  },
  {
    code: "KIO_01",
    name: "Kiosk3",
    des: "Mô tả dịch vụ",
    active: "Hoạt động",
  },
  {
    code: "KIO_01",
    name: "Kiosk4",
    des: "Mô tả dịch vụ",
    active: "Ngưng hoạt động",
  },
  {
    code: "KIO_01",
    name: "Kiosk5",
    des: "Mô tả dịch vụ",
    active: "Hoạt động",
  },
  {
    code: "KIO_01",
    name: "Kiosk6",
    des: "Mô tả dịch vụ",
    active: "Ngưng hoạt động",
  },
  {
    code: "KIO_01",
    name: "Kiosk7",
    des: "Mô tả dịch vụ",
    active: "Hoạt động",
  },
  {
    code: "KIO_01",
    name: "Kiosk8",
    des: "Mô tả dịch vụ",
    active: "Ngưng hoạt động",
  },
  {
    code: "KIO_01",
    name: "Kiosk9",
    des: "Mô tả dịch vụ",
    active: "Hoạt động",
  },
  {
    code: "KIO_01",
    name: "Kiosk10",
    des: "Mô tả dịch vụ",
    active: "Hoạt động",
  },
  {
    code: "KIO_01",
    name: "Kiosk",
    des: "Mô tả dịch vụ",
    active: "Hoạt động",
  },
];

const columns = [
  {
    title: "Mã dịch vụ",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Tên dịch vụ",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Mô tả",
    dataIndex: "des",
    key: "des",
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
    title: "",
    key: "details",
    render: () => (
      <Space size="middle">
        <Link to={"/service/listService/serviceDetails"}>Chi tiết</Link>
      </Space>
    ),
  },
  {
    title: "",
    key: "update",
    render: () => (
      <Space size="middle">
        <Link to={"/service/listService/serviceDetails/serviceUpdate"}>
          Cập nhật
        </Link>
      </Space>
    ),
  },
];

const Maincontent = () => {
  const listActive = [
    {
      option: "Tất cả",
    },
    {
      option: "Hoạt động",
    },
    {
      option: "Ngưng hoạt động",
    },
  ];

  return (
    <>
      <div className="serviceContent">
        <div className="row">
          <div className="col">
            <Title
              color="var(--orange-500)"
              fontSize="24px"
              children="Quản lý dịch vụ"
            />
            <FormGroup onSearch="" prop={listActive} />
            <div className="table">
              <FormTable columns={columns} dataSource={dataSource} size={10} />
            </div>
          </div>
          <div className="btn-add">
            <Link to="/service/listService/addService">
              <button className="col" style={{ cursor: "pointer" }}>
                <Plus />
                <br />
                Thêm dịch vụ
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maincontent;
