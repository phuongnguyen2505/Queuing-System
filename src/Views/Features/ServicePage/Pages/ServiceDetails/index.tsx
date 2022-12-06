import { Badge, Input } from "antd";
import { Link } from "react-router-dom";
import FormLabel from "../../../../../Components/FormLabel";
import FormTable from "../../../../../Components/FormTable";
import Title from "../../../../../Components/Title";
import { ReactComponent as Back } from "../../../../../icons/back.svg";
import { ReactComponent as Edit } from "../../../../../icons/edit.svg";
import CheckboxForm from "../../Components/CheckboxForm";
import FormGroup from "../../Components/FormGroup";
import "./styles.scss";

const listDetails = [
  {
    label: "Mã dịch vụ",
    text: "201",
  },
  {
    label: "Tên dịch vụ",
    text: "Khám tim mạch",
  },
  {
    label: "Mô tả",
    text: "Chuyên các bệnh lý về tim",
  },
];
const listCheck = [
  {
    label: "Tăng tự động:",
    label2: "đến",
    value: "0001",
    value2: "9999",
    className: "show",
    className2: "show",
  },
  {
    label: "Prefix:",
    value: "0001",
    className2: "show",
  },
  {
    label: "Reset mỗi ngày",
  },
];
const dataSource = [
  {
    no: "2010001",
    active: "Đã hoàn thành",
  },
  {
    no: "2010002",
    active: "Đã hoàn thành",
  },
  {
    no: "2010003",
    active: "Đang thực hiện",
  },
  {
    no: "2010004",
    active: "Vắng",
  },
  {
    no: "2010005",
    active: "Đã hoàn thành",
  },
  {
    no: "2010006",
    active: "Đang thực hiện",
  },
  {
    no: "2010007",
    active: "Đang thực hiện",
  },
  {
    no: "2010008",
    active: "Đang thực hiện",
  },
  {
    no: "2010009",
    active: "Đang thực hiện",
  },
];
const columns = [
  {
    title: "Số thứ tự",
    dataIndex: "no",
    key: "no",
  },
  {
    title: "Trạng thái",
    dataIndex: "active",
    key: "active",
    render: (active: string) => (
      <span>
        {(() => {
          if (active === "Đã hoàn thành") {
            return <Badge status="success" />;
          } else if (active === "Đang thực hiện") {
            return <Badge status="processing" />;
          } else {
            return <Badge status="default" />;
          }
        })()}
        &nbsp; {active}
      </span>
    ),
  },
];
const ServiceDetails = () => {
  return (
    <>
      <Title
        color="var(--orange-500)"
        fontSize="24px"
        children="Quản lý dịch vụ"
      />
      <div className="serviceDetails">
        <div className="row">
          <div className="serviceDetails__gr-left col">
            <Title
              color="var(--orange-500)"
              fontSize="20px"
              children="Thông tin dịch vụ"
            />
            {listDetails.map((item) => (
              <FormLabel label={item.label} text={item.text} width="190px" />
            ))}
            <Title
              color="var(--orange-500)"
              fontSize="20px"
              children="Quy tắc cấp số"
            />
            <div className="serviceDetails__form-checkbox">
              <CheckboxForm prop={listCheck} width="110px" />
              <p>Ví dụ: 201-2001</p>
            </div>
          </div>
          <div className="serviceDetails__gr-right col">
            <FormGroup onSearch="" />
            <div className="table">
              <FormTable columns={columns} dataSource={dataSource} size={8} />
            </div>
          </div>
        </div>
        <div className="btn-add">
          <Link to="/service/listService/serviceDetails/serviceUpdate">
            <button className="col" style={{ cursor: "pointer" }}>
              <Edit />
              <br />
              Cập nhật danh sách
            </button>
          </Link>
          <Link to="/service/listService">
            <button className="col" style={{ cursor: "pointer" }}>
              <Back />
              <br />
              Quay lại
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
