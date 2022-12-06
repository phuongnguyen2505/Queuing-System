import React from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { Input, Select, Space } from "antd";
import "./styles.scss";
import "antd/dist/antd.css";
import FormSelect from "../../../../../Components/FormSelect";

interface Props {
  onSearch: any;
}
const { Option } = Select;
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const { Search } = Input;

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

const listConnect = [
  {
    option: "Tất cả",
  },
  {
    option: "Kết nối",
  },
  {
    option: "Mất kết nối",
  },
];
// const onSearch = (value: string) => console.log(value);

const FormGroup: React.FC<Props> = ({ onSearch }) => {
  return (
    <>
      <div className="formGroup">
        <div className="row">
          <div className="formGroup__select flex">
            <div className="col">
              <FormSelect
                label="Trạng thái hoạt động"
                prop={listActive}
                width="300px"
                place=""
                value="Tất cả"
              />
            </div>
            <div className="col">
              <FormSelect
                label="Trạng thái kết nối"
                prop={listConnect}
                width="300px"
                place=""
                value="Tất cả"
              />
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
