import axios from "axios";

async function fetchPrefectureList() {
  const prefectureList = await axios
    .get("/.netlify/functions/prefectures")
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
  const PopulationData = await axios
    .get("/.netlify/functions/populationData", {
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
