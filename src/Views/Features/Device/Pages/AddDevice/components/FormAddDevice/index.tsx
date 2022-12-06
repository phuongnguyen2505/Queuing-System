import { CaretDownOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../../../Components/Button";
import FormInput from "../../../../../../../Components/FormInput";
import Title from "../../../../../../../Components/Title";
import "./style.scss";

const { Option } = Select;
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const FormAddDevice = () => {
  const listDevice = [
    {
      option: "Kiosk",
    },
    {
      option: "Display counter",
    },
  ];
  const listItem = [
    {
      value: "*",
      label: "Tất cả",
    },
    {
      value: "tim",
      label: "Khám tim mạch",
    },
    {
      value: "gyn",
      label: "Khám sản phụ khoa",
    },
    {
      value: "dental",
      label: "Khám răng hàm mặt",
    },
    {
      value: "ent",
      label: "Khám tai mũi họng",
    },
    {
      value: "res",
      label: "Khám hô hấp",
    },
    {
      value: "general",
      label: "Khám tổng quát",
    },
  ];
  let navigate = useNavigate();

  return (
    <>
      <div className="FormAddDevice">
        <Title
          color="var(--orange-500)"
          fontSize="20px"
          children="Thông tin thiết bị"
        />
        <div className="row">
          <div className="col">
            <FormInput
              label="Mã thiết bị"
              type="text"
              width="540px"
              placeholder="Nhập mã thiết bị"
              value=""
            />
            <FormInput
              label="Tên thiết bị"
              type="text"
              width="540px"
              placeholder="Nhập tên thiết bị"
              value=""
            />
            <FormInput
              label="Địa chỉ IP"
              type="text"
              width="540px"
              placeholder="Nhập địa chỉ IP"
              value=""
            />
          </div>
          <div className="col">
            <label htmlFor="">Loại thiết bị</label>
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
              style={{ width: 300, fontSize: 16 }}
              placeholder="Chọn thiết bị"
              optionFilterProp="children"
              onChange={handleChange}
            >
              {listDevice.map((item) => (
                <Option value={item.option}>{item.option}</Option>
              ))}
            </Select>
            <FormInput
              label="Tên đăng nhập"
              type="text"
              width="540px"
              placeholder="Nhập tài khoản"
              value=""
            />
            <FormInput
              label="Mật khẩu"
              type="text"
              width="540px"
              placeholder="Nhập mật khẩu"
              value=""
            />
          </div>
        </div>
        <label htmlFor="" className="select-label">
          Dịch vụ sử dụng
        </label>
        <div className="select">
          <Select
            mode="multiple"
            style={{ width: "1104px" }}
            placeholder="Nhập dịch vụ sử dụng"
            onChange={handleChange}
            optionLabelProp="label"
          >
            {listItem.map((list) => (
              <Option value={list.value} label={list.label}>
                <div className="demo-option-label-item">{list.label}</div>
              </Option>
            ))}
          </Select>
        </div>

        <span className="FormAddDevice__noti">
          Là trường thông tin bắt buộc
        </span>
      </div>
      <div className="FormAddDevice__gr-btn">
        <Button
          border="1.5px solid var(--orange-400)"
          color="var(--orange-50)"
          height="48px"
          radius="8px"
          textColor="var(--orange-400)"
          width="147px"
          children="Hủy bỏ"
          onClick={() => navigate("/device/listDevice")}
        />
        <Button
          border="none"
          color="var(--orange-400)"
          height="48px"
          radius="8px"
          textColor="var(--white)"
          width="147px"
          children="Thêm thiết bị"
          onClick={() => navigate("/device/listDevice")}
        />
      </div>
    </>
  );
};

export default FormAddDevice;
