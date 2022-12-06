import React from "react";
import { Input, Select, Space } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
// import "./styles.scss";
import FormSelect from "../../../../../Components/FormSelect";
import FormDatePicker from "../../../../../Components/FormDatePicker";

interface Props {
  onSearch: any;
}

const { Search } = Input;

const FormGroup: React.FC<Props> = ({ onSearch }) => {
  const listService = [
    {
      option: "Tất cả",
    },
    {
      option: "Khám sản - Phụ khoa",
    },
    {
      option: "Khám răng hàm mặt",
    },
    {
      option: "Khám tai mũi họng",
    },
    {
      option: "Khám hô hấp",
    },
    {
      option: "Khám tim mạch",
    },
    {
      option: "Khám tổng quát",
    },
  ];
  const lissActive = [
    {
      option: "Tất cả",
    },
    {
      option: "Đang chờ",
    },
    {
      option: "Đã sử dụng",
    },
    {
      option: "Bỏ qua",
    },
  ];

  const listCre = [
    {
      option: "Kiosk",
    },
    {
      option: "Hệ thống",
    },
  ];
  return (
    <>
      <div className="formGroup">
        <div className="row">
          <div className="formGroup__select flex">
            <div className="col">
              <FormSelect
                label="Tên dịch vụ"
                prop={listService}
                width="154px"
                place=""
                value="Tất cả"
              />
            </div>
            <div className="col">
              <FormSelect
                label="Tình trạng"
                prop={lissActive}
                width="154px"
                place=""
                value="Tất cả"
              />
            </div>
            <div className="col">
              <FormSelect
                label="Nguồn cấp"
                prop={listCre}
                width="154px"
                place=""
                value="Tất cả"
              />
            </div>
            <div className="col">
              <FormDatePicker />
            </div>
          </div>
          <div className="formGroup__search">
            <div className="col" style={{ fontSize: "16px" }}>
              <p>Từ Khóa</p>

              <Space direction="vertical">
                <Search
                  allowClear
                  onSearch={onSearch}
                  placeholder="Nhập từ khóa"
                  style={{ width: 300 }}
                />
              </Space>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormGroup;
