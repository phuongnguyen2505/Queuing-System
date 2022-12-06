import { DatePicker, Space } from "antd";
import "./styles.scss";

const { RangePicker } = DatePicker;
const FormDatePicker: React.FC = () => {
  return (
    <>
      <div className="formDatePicker">
        <p>Chọn thời gian</p>
        <Space direction="vertical" size={12}>
          <RangePicker
            suffixIcon=""
            bordered={false}
            placeholder={["Ngày bắt đầu", "Ngày kết thúc"]}
          />
        </Space>
      </div>
    </>
  );
};

export default FormDatePicker;
