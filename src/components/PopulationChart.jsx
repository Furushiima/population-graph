import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function PopulationChart() {
  const options = {
    yAxis: {
      title: {
        text: "人口数",
      },
    },
    xAxis: {
      title: {
        text: "年度",
      },
    },
    series: [],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default PopulationChart;
