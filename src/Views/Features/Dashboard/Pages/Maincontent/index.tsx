import React from "react";
import Title from "../../../../../Components/Title";
import CardStatus from "../../Components/CardStatus";
import FormChart from "../../Components/FormChart";
import "./styles.scss";

function Maincontent() {
  return (
    <>
      <div className="maincontent">
        <div className="row">
          <div className="col">
            <Title
              children="Biểu đồ cấp số"
              fontSize="24px"
              color="var(--orange-500)"
            />
            <CardStatus />
            <FormChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default Maincontent;
