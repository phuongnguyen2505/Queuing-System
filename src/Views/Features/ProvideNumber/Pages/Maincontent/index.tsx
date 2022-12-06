import { Badge, Space } from "antd";
import { Link } from "react-router-dom";
import FormTable from "../../../../../Components/FormTable";
import Title from "../../../../../Components/Title";
import { ReactComponent as Plus } from "../../../../../icons/plus.svg";
import FormGroup from "../../Components/FormGroup";

const dataSource = [
  {
    no: "201001",
    namecus: "Lê Huỳnh Ái Vân",
    nameser: "Khám tim mạch",
    time: "14:35 - 07/11/2022",
    timeuse: "14:35 - 12/11/2022",
    status: "Đang chờ",
    cre: "Kiosk",
  },
];

const columns = [
  {
    title: "STT",
    dataIndex: "no",
    key: "no",
  },
  {
    title: "Tên khách hàng",
    dataIndex: "namecus",
    key: "namecus",
  },
  {
    title: "Tên dịch vụ",
    dataIndex: "nameser",
    key: "nameser",
  },
  {
    title: "Thời gian cấp",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Hạn sử dụng",
    dataIndex: "timeuse",
    key: "timeuse",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    render: (status: string) => (
      <span>
        {(() => {
          if (status === "Đã sử dụng") {
            return <Badge status="default" />;
          } else if (status === "Đang chờ") {
            return <Badge status="processing" />;
          } else {
            return <Badge status="error" />;
          }
        })()}
        &nbsp; {status}
      </span>
    ),
  },
  {
    title: "Nguồn cấp",
    dataIndex: "cre",
    key: "cre",
  },
  {
    title: "",
    key: "details",
    render: () => (
      <Space size="middle">
        <Link to={"/provideN/listProvideN/provideNDetails"}>Chi tiết</Link>
      </Space>
    ),
  },
];

const Maincontent = () => {
  return (
    <>
      <div className="provideContent">
        <div className="row">
          <div className="col">
            <Title
              color="var(--orange-500)"
              fontSize="24px"
              children="Quản lý cấp số"
            />
            <FormGroup onSearch="" />
            <FormTable columns={columns} dataSource={dataSource} size={10} />
          </div>
          <div className="btn-add">
            <Link to="/provideN/listProvideN/addProvideN">
              <button className="col" style={{ cursor: "pointer" }}>
                <Plus />
                <br />
                Cấp số mới
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maincontent;
