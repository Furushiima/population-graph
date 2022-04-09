import PropTypes from "prop-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function PopulationChart(props) {
  const options = {
    title: {
      text: "都道府県別の総人口推移グラフ",
    },
    yAxis: {
      title: {
        text: "人口数",
        align: "high",
        offset: 0,
        rotation: 0,
        y: -20,
      },
    },
    xAxis: {
      title: {
        text: "年度",
        align: "high",
        offset: 0,
        x: 40,
        y: 6,
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },
    plotOptions: {
      series: {
        pointInterval: 5,
        pointStart: 1980,
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
