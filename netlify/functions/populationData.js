const axios = require("axios");

exports.handler = async (event) => {
  const params = {
    prefCode: event.queryStringParameters.prefCode,
    cityCode: event.queryStringParameters.cityCode,
  };
  const response = await axios
    .get(
      "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear",
      {
        params,
        headers: { "X-API-KEY": process.env.REACT_APP_X_API_KEY },
      }
    )
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
