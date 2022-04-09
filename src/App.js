import { useState, useEffect } from "react";
import { fetchPrefectureList, fetchPopulationData } from "./fetchers";
import PrefectureList from "./components/PrefectureList";
import PopulationChart from "./components/PopulationChart";
import "./App.css";

function App() {
  /**
   * @typedef {Object} prefecture
   * @property {number} prefCode
   * @property {string} prefName
   */
  /**
   * @type {[Array<prefecture>, function]}
   */
  const [prefectureList, setPrefectureList] = useState([]);
  useEffect(() => {
    (async () => {
      const list = await fetchPrefectureList();
      setPrefectureList(list);
    })();
  }, []);
  /**
   * @typedef {Object} populationPerYear
   * @property {number} year
   * @property {number} value
   */
  /**
   * @typedef {Object} ChartData
   * @property {number} prefCode
   * @property {string} prefName
   * @property {Array<populationPerYear>} populationData
   */
  /**
   * @type {[Array<ChartData>, function]}
   */
  const [chartDataList, setChartDataList] = useState([]);
  const togglePrefectureCheckbox = async (prefCode) => {
    const isExistingInChartDataList = (code) =>
      chartDataList.some((data) => data?.prefCode === code);
    if (isExistingInChartDataList(prefCode)) {
      setChartDataList(
        chartDataList.filter((data) => data.prefCode !== prefCode)
      );
    } else {
      const { prefName } = prefectureList.find(
        (prefecture) => prefecture.prefCode === prefCode
      );
      const populationData = await fetchPopulationData(prefCode);
      const chartData = {
        prefCode,
        prefName,
        populationData,
      };
      setChartDataList([...chartDataList, chartData]);
    }
  };
  return (
    <div id="app">
      <div id="header">都道府県別の総人口推移グラフ</div>
      <div id="prefecture-list">
        <PrefectureList
          prefectureList={prefectureList}
          togglePrefectureCheckbox={togglePrefectureCheckbox}
        />
      </div>
      <PopulationChart chartDataList={chartDataList} />
    </div>
  );
}

export default App;
