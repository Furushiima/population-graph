import axios from "axios";

const myAxios = axios.create({
  baseURL: "https://opendata.resas-portal.go.jp/",
  headers: { "X-API-KEY": process.env.REACT_APP_X_API_KEY },
});

async function fetchPrefectureList() {
  const prefectureList = await myAxios
    .get("api/v1/prefectures")
    .then((response) => {
      if (!response.data.result) {
        throw new Error(response.data.message);
      } else {
        return response.data.result;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return prefectureList;
}

async function fetchPopulationData(prefCode) {
  const PopulationData = await myAxios
    .get("api/v1/population/composition/perYear", {
      params: {
        prefCode,
        cityCode: "-",
      },
    })
    .then((response) => {
      if (!response.data.result) {
        throw new Error(response.data.message);
      } else {
        return response.data.result.data[0].data;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return PopulationData;
}

export { fetchPrefectureList, fetchPopulationData };
