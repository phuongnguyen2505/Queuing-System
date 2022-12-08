import { Input, Space } from "antd";
import React from "react";
import FormDatePicker from "../../../../../Components/FormDatePicker";
import FormSelect from "../../../../../Components/FormSelect";
import "./styles.scss";

interface Props {
  onSearch: string;
}

const { Search } = Input;

const FormGroup: React.FC<Props> = ({ onSearch }) => {
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
      <div className="groupService">
        <div className="row">
          <div className="groupService__select flex">
            <div className="col">
              <FormSelect
                label="Trạng thái hoạt động"
                prop={listActive}
                width="160px"
                place=""
                value="Tất cả"
              />
            </div>
            <div className="col">
              <FormDatePicker />
            </div>
          </div>
          <div className="groupService__search">
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
        </div>
      </div>
    </>
  );
};

export default FormGroup;
