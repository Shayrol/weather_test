import axios from "axios";
import { getFullDate } from "../utils";

export const fetchMonthWeather = async () => {
  // const code = CityCode.code;
  const date = getFullDate();
  console.log("fetchMonthWeather: ", date);
  // console.log("fetchMonthWeather: ", code);
  const apiKey =
    "JTN8hhe7FF97AD0ZKTJRSOf7LtDqtJu%2BJYNUnjwm6heZNq8rSzNj1e2MQDRIa%2BhRRSitVDz5J0NERgwhDy33Ww%3D%3D";

  const result = await axios.get(
    `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${apiKey}&numOfRows=10&pageNo=1&regId=11B00000&tmFc=${date}&dataType=JSON`
  );
  const MonthWeatherData = result.data.response.body.items.item[0];
  console.log("fetchMonthWeatherFC: ", result.data.response.body.items.item[0]);
  return MonthWeatherData;
};
