import React from "react";
import Title from "../../../../../Components/Title";
import FormDetails from "./components/FormDetails";

const DeviceDetails = () => {
  return (
    <>
      <div className="DeviceDetails">
        <Title
          color="var(--orange-500)"
          fontSize="24px"
          children="Quản lý thiết bị"
        />
        <FormDetails />
      </div>
    </>
  );
};

export default DeviceDetails;
