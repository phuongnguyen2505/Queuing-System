import React from "react";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { Checkbox, Input } from "antd";
import "./styles.scss";

interface Props {
  prop: any;
  width: string;
}

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};
const CheckboxForm: React.FC<Props> = ({ prop, width }) => {
  return (
    <>
      <div className="CheckboxForm">
        {prop.map((item) => (
          <div className="row">
            <Checkbox onChange={onChange} style={{ width: width }}>
              {item.label}
            </Checkbox>
            <Input
              className={`hidden-item ${item.className2}`}
              style={{ width: "62px", borderRadius: "8px", fontSize: "16px" }}
              value={item.value}
            />
            <p className="text-check">{item.label2}</p>
            <Input
              className={`hidden-item ${item.className}`}
              style={{ width: "62px", borderRadius: "8px", fontSize: "16px" }}
              value={item.value2}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckboxForm;
