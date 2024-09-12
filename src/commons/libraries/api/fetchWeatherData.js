// import { useRecoilState } from "recoil";
// import { isLoading, isWeatherData } from "../../stores";

// const [, setWeatherInfo] = useRecoilState(isWeatherData);
// const [, setLoading] = useRecoilState(isLoading);
// const date = new Date();
// const hour = date.getHours();
// const HourStr = String(hour).padStart(2, "0") + "00"; // 예: "1800"

// export const fetchWeatherData = async () => {
//   if (!navigator.geolocation) {
//     setWeatherInfo((prev) => ({
//       ...prev,
//       error: "Geolocation을 지원하지 않는 브라우저입니다.",
//     }));
//     return;
//   }

//   const position = await new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });

//   const { latitude, longitude } = position.coords;
//   const gridCoords = dfs_xy_conv("toXY", latitude, longitude);
//   const weatherData = {};

//   const apiKey =
//     "JTN8hhe7FF97AD0ZKTJRSOf7LtDqtJu%2BJYNUnjwm6heZNq8rSzNj1e2MQDRIa%2BhRRSitVDz5J0NERgwhDy33Ww%3D%3D";

//   try {
//     // 위치
//     const locationResponse = await axios.get(
//       `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
//     );

//     // 날씨 데이터
//     const weatherResponse = await axios.get(
//       `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${apiKey}&base_date=${getDate(
//         date
//       )}&base_time=${getClosestHour(hour)}&nx=${gridCoords.x}&ny=${
//         gridCoords.y
//       }&dataType=JSON&numOfRows=1900`
//     );

//     const items = weatherResponse.data.response.body.items.item;
//     items.forEach((item) => {
//       const timeKey = item.fcstTime; // 예: "1800", "1900"
//       const dayKey = item.fcstDate; // 예: "20240903", "20240904"
//       const category = item.category;
//       const value = item.fcstValue;

//       // dayKey가 존재하지 않으면 초기화
//       if (!weatherData[dayKey]) {
//         weatherData[dayKey] = {};
//       }
//       // timeKey가 존재하지 않으면 초기화
//       if (!weatherData[dayKey][timeKey]) {
//         weatherData[dayKey][timeKey] = {};
//       }
//       // 데이터 저장
//       weatherData[dayKey][timeKey][category] = value;
//     });

//     console.log("weatherData: ", weatherData);

//     if (locationResponse && weatherData) {
//       setWeatherInfo({
//         location: locationResponse.data.address,
//         weather: weatherData,
//       });
//       // setWeatherState(weatherData);
//       setLoading(false);
//     }
//   } catch (error) {
//     console.error("Error fetching data: ", error.response || error.message);
//     setWeatherInfo((prev) => ({
//       ...prev,
//       error: "데이터를 가져오는 데 실패했습니다...",
//     }));
//     setLoading(false);
//   }
// };
