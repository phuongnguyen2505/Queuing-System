import { CaretDownOutlined } from "@ant-design/icons";
import { DatePicker, Input, Select, Space } from "antd";
import React from "react";
import "./styles.scss";

interface Props {
  onSearch: string;
  prop: any;
}
const { Option } = Select;
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const dateFormat = "DD/MM/YYYY";
const { RangePicker } = DatePicker;

const { Search } = Input;

const FormGroup: React.FC<Props> = ({ onSearch, prop }) => {
  return (
    <>
      <div className="groupService">
        <div className="row">
          <div className="groupService__select flex">
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
                {prop.map((item) => (
                  <Option key={item.id} value={item.option}>
                    {item.option}
                  </Option>
                ))}
              </Select>
            </div>
            <div className="col">
              <p>Chọn thời gian</p>
              <RangePicker
                suffixIcon=""
                placeholder={["Ngày bắt đầu", "Ngày kết thúc"]}
                format={dateFormat}
              />
            </div>
          </div>
          <div className="groupService__search">
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
