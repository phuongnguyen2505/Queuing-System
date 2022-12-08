import React from "react";
import FormSelect from "../../../../../../../Components/FormSelect";
import { Input, Select, Space } from "antd";
import "./styles.scss";

const FormGroup = () => {
  const select = [
    {
      option: "Kế toán",
    },
    {
      option: "Bác sĩ",
    },
    {
      option: "Quản lý",
    },
  ];
  const { Search } = Input;
  return (
    <>
      <div className="formGroup">
        <div className="row account">
          <FormSelect
            label="Tên vai trò"
            place=""
            prop={select}
            value="Tất cả"
            width="300px"
          />
          <div className="search">
            <p>Từ Khóa</p>
            <Space direction="vertical">
              <Search
                allowClear
                // onSearch={onSearch}
                placeholder="Nhập từ khóa"
                style={{ width: 300 }}
              />
            </Space>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormGroup;
