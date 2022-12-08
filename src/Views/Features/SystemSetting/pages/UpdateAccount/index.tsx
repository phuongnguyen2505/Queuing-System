import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../Components/Button";
import FormInput from "../../../../../Components/FormInput";
import FormSelect from "../../../../../Components/FormSelect";
import Title from "../../../../../Components/Title";

const UpdateAccount = () => {
  const role = [
    {
      option: "Kế toán",
    },
    {
      option: "Bác sĩ",
    },
    {
      option: "Admin",
    },
  ];
  const status = [
    {
      option: "Hoạt động",
    },
    {
      option: "Ngưng hoạt động",
    },
  ];
  let navigate = useNavigate();

  return (
    <>
      <Title
        color="var(--orange-500)"
        fontSize="24px"
        children="Quản lý tài khoản"
      />
      <div className="addAccount">
        <Title
          color="var(--orange-500)"
          fontSize="20px"
          children="Thông tin tài khoản"
        />
        <div className="row">
          <div className="col">
            <FormInput
              label="Họ tên"
              placeholder="Nhập họ tên"
              type="text"
              value="Nguyễn Văn A"
              width="100%"
            />
            <FormInput
              label="Số điện thoại"
              placeholder="Nhập số điện thoại"
              type="text"
              value="0919999999"
              width="100%"
            />
            <FormInput
              label="Email"
              placeholder="Nhập email"
              type="text"
              value="admin123@gmail.com"
              width="100%"
            />
            <FormSelect
              label="Vai trò"
              place="Chọn vai trò"
              prop={role}
              value="Admin"
              width=""
            />
            <p className="noti">Là trường thông tin bắt buộc</p>
          </div>
          <div className="col">
            <FormInput
              label="Tên đăng nhập"
              placeholder="Nhập tên đăng nhập"
              type="text"
              value="admin123"
              width="100%"
            />
            <FormInput
              label="Mật khẩu"
              placeholder=""
              type="password"
              value="password"
              width="100%"
            />
            <FormInput
              label="Nhập lại mật khẩu"
              placeholder=""
              type="password"
              value="password"
              width="100%"
            />
            <FormSelect
              label="Tình trạng"
              place=""
              prop={status}
              value="Hoạt động"
              width=""
            />
          </div>
        </div>
      </div>
      <div className="addRole__gr-btn">
        <Button
          border="1.5px solid var(--orange-400)"
          color="var(--orange-50)"
          height="48px"
          radius="8px"
          textColor="var(--orange-400)"
          width="147px"
          children="Hủy bỏ"
          onClick={() => navigate("/systemSetting/accountManage")}
        />
        <Button
          border="none"
          color="var(--orange-400)"
          height="48px"
          radius="8px"
          textColor="var(--white)"
          width="147px"
          children="Cập nhật"
          onClick={() => navigate("/systemSetting/accountManage")}
        />
      </div>
    </>
  );
};

export default UpdateAccount;
