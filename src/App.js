import { useState, useEffect } from "react";
import { fetchPrefectureList } from "./fetchers";
import PrefectureList from "./components/PrefectureList";
import "./App.css";

function App() {
  const [prefectureList, setPrefectureList] = useState([]);
  useEffect(() => {
    (async () => {
      const list = await fetchPrefectureList();
      setPrefectureList(list);
    })();
  }, []);
  return (
    <div className="App">
      <div className="App-header">総人口推移グラフ</div>
      <PrefectureList prefectureList={prefectureList} />
    </div>
  );
}

export default App;
