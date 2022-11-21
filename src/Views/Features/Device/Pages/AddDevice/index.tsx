import React from "react";
import Title from "../../../../../Components/Title";
import FormAddDevice from "./components/FormAddDevice";

const AddDevice = () => {
  return (
    <>
      <div className="AddDevice">
        <Title
          color="var(--orange-500)"
          fontSize="24px"
          children="Quản lý thiết bị"
        />
        <FormAddDevice />
      </div>
    </>
  );
};

export default AddDevice;
