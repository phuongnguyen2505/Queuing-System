import React from "react";
import Title from "../../../../../Components/Title";
import FormUpdate from "./components/FormUpdate";

const DeviceUpdate = () => {
  return (
    <>
      <div className="DeviceUpdate">
        <Title
          color="var(--orange-500)"
          fontSize="24px"
          children="Quản lý thiết bị"
        />
        <FormUpdate />
      </div>
    </>
  );
};

export default DeviceUpdate;
