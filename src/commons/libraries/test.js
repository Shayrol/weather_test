const { dnYnLon, dnYnLat } = require("./dnYn");

const date = new Date();

export const getSunTimeData = async (longitude, latitude) => {
  const apiKey =
    "JTN8hhe7FF97AD0ZKTJRSOf7LtDqtJu%2BJYNUnjwm6heZNq8rSzNj1e2MQDRIa%2BhRRSitVDz5J0NERgwhDy33Ww%3D%3D";

  const result = await axios.get(
    `http://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getLCRiseSetInfo?longitude=${dnYnLon(longitude)}&latitude=${dnYnLat(latitude)}&locdate=${getDate(date)}&dnYn=N&ServiceKey=${apiKey}`
  );

  return result.data.response.body.items.item;
};
