import React from "react";
import { Table } from "antd";
import { ReactComponent as Next } from "../../icons/next.svg";
import { ReactComponent as Prev } from "../../icons/prev.svg";
import { useId } from "react-id-generator";

interface Props {
  dataSource: any;
  columns: any;
  size: number;
  // name: string;
  // code: string;
}

const FormTable: React.FC<Props> = ({ dataSource, columns, size }) => {
  // const [filterInput, setFilterInput] = React.useState<any>("");
  // const filterData = () => {
  //   if (filterInput === "") return dataSource;

  //   if (isNaN(filterInput)) {
  //     return dataSource.filter(({ name }) => name.includes(filterInput));
  //   }
  //   return dataSource.filter(({ code }) => code === filterInput);
  // };
  const itemRender = (_, type: string, originalElement: any) => {
    console.log(type, "a");
    if (type === "prev") {
      return (
        <>
          <Prev />
        </>
      );
    }
    if (type === "next") {
      return (
        <>
          <Next />
        </>
      );
    }
    return originalElement;
  };
  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          itemRender: itemRender,
          defaultPageSize: size,
        }}
      />
    </>
  );
};

export default FormTable;
