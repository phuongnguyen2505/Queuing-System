import React from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { Input, Select, Space } from "antd";
import "./styles.scss";
import "antd/dist/antd.css";

interface Props {
  onSearch: string;
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
              <p>Trạng thái hoạt động</p>
              <Select
                suffixIcon={
                  <CaretDownOutlined
                    style={{
                      fontSize: "20px",
                      color: "var(--orange-500)",
                      pointerEvents: "none",
                    }}
                  />
                }
                style={{ width: 300 }}
                defaultValue="Tất cả"
                optionFilterProp="children"
                onChange={handleChange}
              >
                {listActive.map((item) => (
                  <Option value={item.option}>{item.option}</Option>
                ))}
              </Select>
            </div>
            <div className="col">
              <p>Trạng thái kết nối</p>
              <Select
                suffixIcon={
                  <CaretDownOutlined
                    style={{
                      fontSize: "20px",
                      color: "var(--orange-500)",
                      pointerEvents: "none",
                    }}
                  />
                }
                style={{ width: 300 }}
                defaultValue="Tất cả"
                optionFilterProp="children"
                onChange={handleChange}
              >
                {listConnect.map((item) => (
                  <Option value={item.option}>{item.option}</Option>
                ))}
              </Select>
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
