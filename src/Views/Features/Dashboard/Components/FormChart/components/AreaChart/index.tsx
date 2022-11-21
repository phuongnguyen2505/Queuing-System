import ReactApexChart from "react-apexcharts";
import "./styles.scss";

const AreaChart: React.FC<Props> = ({ tasks }) => {
  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: ["01", "", "", "13", "", "19", "", "", "31"],
    },
  };

  const series = [
    {
      name: "All Tasks",
      data: [2500, 4200, 4000, 3500, 3200, 4221, 3300, 4300, 3200],
    },
  ];

  return (
    <ReactApexChart
      type="area"
      options={options}
      series={series}
      height={300}
    />
  );
};

export default AreaChart;
