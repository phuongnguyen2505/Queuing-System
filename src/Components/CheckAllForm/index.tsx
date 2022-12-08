import React, { useState } from "react";
import { Checkbox, Divider } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import "./styles.scss";

interface Props {
  prop: any;
  checked: any;
}

const CheckboxGroup = Checkbox.Group;

const CheckAllForm: React.FC<Props> = ({ prop, checked }) => {
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(checked);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setCheckAll(list.length === prop.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? prop : []);
    setCheckAll(e.target.checked);
  };
  return (
    <>
      <div className="checkAllForm">
        <Checkbox
          //   indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          Tất cả
        </Checkbox>
        <CheckboxGroup options={prop} value={checkedList} onChange={onChange} />
      </div>
    </>
  );
};

export default CheckAllForm;
