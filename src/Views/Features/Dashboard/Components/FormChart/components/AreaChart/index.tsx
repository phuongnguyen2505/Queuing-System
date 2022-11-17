import { Area } from "@ant-design/plots";
import "./styles.scss";

const AreaChart = () => {
  const data = [
    { days: "01", value: 2500 },
    { days: "13", value: 3500 },
    { days: "19", value: 4221 },
    { days: "31", value: 3800 },
  ];

  const config = {
    data,
    xField: "days",
    yField: "value",
    xAxis: {
      range: [0, 1],
    },
  };

  return <Area {...config} />;
};
export default AreaChart;
// ReactDOM.render(<AreaChart />, document.getElementById("container"));
