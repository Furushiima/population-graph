import PropTypes from "prop-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function PopulationChart(props) {
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
  // eslint-disable-next-line react/destructuring-assignment
  props.chartDataList.forEach((chartData) => {
    const name = chartData.prefName;
    const data = chartData.populationData.map((obj) => obj.value);
    options.series.push({ name, data });
  });
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

PopulationChart.propTypes = {
  chartDataList: PropTypes.arrayOf(
    PropTypes.shape({
      prefCode: PropTypes.number,
      prefName: PropTypes.string,
      populationData: PropTypes.arrayOf(
        PropTypes.shape({
          year: PropTypes.number,
          value: PropTypes.number,
        })
      ),
    })
  ).isRequired,
};

export default PopulationChart;
