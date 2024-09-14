// ssr 방식으로 서버에서 데이터를 가져오려 했지만 현재 위치르 가져오는
// navigator.geolocation.getCurrentPosition이 브라우저에서만 동작을 해 서버에서
// 데이터를 가져오지 못한다.

import { getDate } from "@/src/commons/libraries/utils";
import axios from "axios";

export default function TestPage({ nowWeather }) {
  console.log("nowWeather: ", nowWeather);
  return (
    <div>
      <div>HI</div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const date = new Date();
  const hour = date.getHours();
  const HourStr = String(hour).padStart(2, "0") + "00";
  const apiKey =
    "JTN8hhe7FF97AD0ZKTJRSOf7LtDqtJu%2BJYNUnjwm6heZNq8rSzNj1e2MQDRIa%2BhRRSitVDz5J0NERgwhDy33Ww%3D%3D";
  let nowWeather = {};
  try {
    const nowWeatherResponse = await axios.get(
      `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${apiKey}&numOfRows=10&pageNo=1&base_date=${getDate(
        date
      )}&base_time=${HourStr}&nx=55&ny=126&dataType=JSON`
    );
    nowWeatherResponse.data.response.body.items.item.forEach((el) => {
      nowWeather[el.category] = el.obsrValue;
    });
  } catch (error) {
    console.log("Error fetching data: ", error);
  }

  return {
    props: {
      nowWeather,
    },
  };
};
