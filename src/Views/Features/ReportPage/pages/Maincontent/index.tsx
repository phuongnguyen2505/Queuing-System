import { Badge } from "antd";
import FormDatePicker from "../../../../../Components/FormDatePicker";
import FormTable from "../../../../../Components/FormTable";
import type { ColumnsType } from "antd/es/table";
import { ReactComponent as Download } from "../../../../../icons/download.svg";
import "./style.scss";
import { Link } from "react-router-dom";

interface DataType {
  no: number;
  nameser: string;
  time: string;
  status: string;
  cre: string;
}
const Maincontent = () => {
  const dataSource = [
    {
      no: "201001",
      nameser: "Khám tim mạch",
      time: "14:37 - 07/11/2022",
      status: "Đang chờ",
      cre: "Kiosk",
    },
    {
      no: "201002",
      nameser: "Khám phụ sản",
      time: "14:35 - 07/11/2022",
      status: "Đã sử dụng",
      cre: "Kiosk",
    },
    {
      no: "201003",
      nameser: "Khám tổng quát",
      time: "14:39 - 07/11/2022",
      status: "Hủy bỏ",
      cre: "Kiosk",
    },
  ];
  const columns: ColumnsType<DataType> = [
    {
      title: "Số thứ tự",
      dataIndex: "no",
      key: "no",
      sorter: (a, b) => a.no - b.no,
    },
    {
      title: "Tên dịch vụ",
      dataIndex: "nameser",
      key: "nameser",
      sorter: (a, b) => a.nameser.length - b.nameser.length,
    },
    {
      title: "Thời gian cấp",
      dataIndex: "time",
      key: "time",
      sorter: (a, b) => a.time.length - b.time.length,
    },
    {
      title: "Tình trạng",
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
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Nguồn cấp",
      dataIndex: "cre",
      key: "cre",
      sorter: (a, b) => a.status.length - b.status.length,
    },
  ];
  return (
    <>
      <div className="reportContent">
        <div className="row">
          <div className="col">
            <FormDatePicker />
            <FormTable columns={columns} dataSource={dataSource} size={10} />
          </div>
          <div className="btn-add">
            <Link to="/service/listService/addService">
              <button className="col" style={{ cursor: "pointer" }}>
                <Download />
                <br />
                Tải về
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maincontent;
