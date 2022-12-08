import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../Components/Button";
import CheckAllForm from "../../../../../Components/CheckAllForm";
import FormInput from "../../../../../Components/FormInput";
import FormTextArea from "../../../../../Components/FormTextArea";
import Title from "../../../../../Components/Title";

const UpdateRole = () => {
  const listCheck = ["Chức năng x", "Chức năng y", "Chức năng z"];
  const checked = ["Chức năng x", "Chức năng z"];
  let navigate = useNavigate();

  return (
    <>
      <Title
        color="var(--orange-500)"
        fontSize="24px"
        children="Danh sách vai trò"
      />
      <div className="addRole">
        <Title
          color="var(--orange-500)"
          fontSize="20px"
          children="Thông tin vai trò"
        />
        <div className="row">
          <div className="col">
            <FormInput
              label="Tên vai trò"
              placeholder="Nhập tên vai trò"
              type="text"
              value=""
              width=""
            />
            <FormTextArea label="Mô tả" placeholder="Nhập mô tả" size={6} />
            <span className="noti">Là trường thông tin bắt buộc</span>
          </div>
          <div className="col">
            <div className="addRole__dec">
              <span className="noti-role">Phân quyền chức năng</span>
              <div className="row addRole__dec-inner">
                <div className="col">
                  <Title
                    color="var(--orange-500)"
                    fontSize="20px"
                    children="Nhóm chức năng A"
                  />
                  <CheckAllForm prop={listCheck} checked={checked} />
                  <Title
                    color="var(--orange-500)"
                    fontSize="20px"
                    children="Nhóm chức năng B"
                  />
                  <CheckAllForm prop={listCheck} />
                  <Title
                    color="var(--orange-500)"
                    fontSize="20px"
                    children="Nhóm chức năng C"
                  />
                  <CheckAllForm prop={listCheck} />
                </div>
              </div>
            </div>
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
          onClick={() => navigate("/systemSetting/roleManage")}
        />
        <Button
          border="none"
          color="var(--orange-400)"
          height="48px"
          radius="8px"
          textColor="var(--white)"
          width="147px"
          children="Cập nhật"
          onClick={() => navigate("/systemSetting/roleManage")}
        />
      </div>
    </>
  );
};

export default UpdateRole;
