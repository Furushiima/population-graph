const axios = require("axios");

exports.handler = async () => {
  const response = await axios
    .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
      headers: { "X-API-KEY": process.env.REACT_APP_X_API_KEY },
    })
    .then((APIResponse) => ({
      statusCode: 200,
      body: JSON.stringify(APIResponse.data),
    }))
    .catch((error) => ({
      statusCode: 400,
      body: JSON.stringify(error),
    }));
  return response;
};
