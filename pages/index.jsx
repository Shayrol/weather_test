// import React, { useEffect, useState, useCallback } from "react";
// import dfs_xy_conv from "@/src/commons/libraries/dfs";
// import { getClosestHour, getDate } from "@/src/commons/libraries/utils";
// import * as S from "../styles/weather/weather";
// import HourlyWeather from "@/src/components/commons/HourlyWeather/HourlyWeather";
// import MonthWeather from "@/src/components/commons/MonthWeather/MonthWeather";
// import axios from "axios";
// import { dnYnLat, dnYnLon } from "@/src/commons/libraries/dnYn";

// export default function WeatherPage() {
//   const date = new Date();
//   const dateHour = ("0" + String(date.getHours())).slice(-2) + "00";

//   const [weatherInfo, setWeatherInfo] = useState({
//     location: null,
//     gridCoords: null,
//     data: null,
//     address: null,
//     error: null,
//     hourlyData: {},
//   });

//   const fetchWeatherData = useCallback(async () => {
//     if (!navigator.geolocation) {
//       setWeatherInfo((prev) => ({
//         ...prev,
//         error: "Geolocation을 지원하지 않는 브라우저입니다.",
//       }));
//       return;
//     }

//     try {
//       const position = await new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//       });

//       const { latitude, longitude } = position.coords;
//       const gridCoords = dfs_xy_conv("toXY", latitude, longitude);

//       const apiKey =
//         "JTN8hhe7FF97AD0ZKTJRSOf7LtDqtJu%2BJYNUnjwm6heZNq8rSzNj1e2MQDRIa%2BhRRSitVDz5J0NERgwhDy33Ww%3D%3D";

//         const result = await axios.get(
//           `http://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getLCRiseSetInfo?longitude=${dnYnLon(longitude)}&latitude=${dnYnLat(latitude)}&locdate=${getDate(date)}&dnYn=N&ServiceKey=${apiKey}`
//         );

//       // 위치
//       const aaaa = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json
// `
//       );
//       const bbbb = await aaaa.json();
//       const mediumTermForecast = await axios.get(
//         `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${apiKey}&base_date=${getDate(
//           date
//         )}&base_time=${getClosestHour(dateHour)}&nx=${gridCoords.x}&ny=${
//           gridCoords.y
//         }&dataType=JSON&numOfRows=2880&pageNo=1`
//       );

//       // 단기 예보조회 - 3시간 단위로 data 가져옴 0200, 0500, 0800,,,, 2300 // 여기서 20시는 17시로 반환함
//       // const mediumTermForecast = await fetch(
//       //   `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${apiKey}&base_date=${getDate(
//       //     date
//       //   )}&base_time=${getClosestHour(dateHour)}&nx=${gridCoords.x}&ny=${
//       //     gridCoords.y
//       //   }&dataType=JSON&numOfRows=2880&pageNo=1`
//       // );
//       if (!mediumTermForecast.ok) {
//         throw new Error("API 요청 실패");
//       }

//       const hourlyData = {};
//       const result2 = await mediumTermForecast.json();
//       console.log("단기 예보조회: ", JSON.stringify(result2));

//       // 02시 부터 3시간 간격으로 요청을 보낼 수 있으며 현재시간 1시간 뒤부터 예보함
//       result2.response.body.items.item.forEach((item) => {
//         const timeKey = item.fcstTime; // 예: "1800", "1900"
//         const dayKey = item.fcstDate;
//         const category = item.category;
//         const value = item.fcstValue;

//         if (!hourlyData[timeKey]) {
//           hourlyData[timeKey] = {};
//         }
//         hourlyData[timeKey][category] = value;
//       });

//       setWeatherInfo({
//         location: { latitude, longitude },
//         gridCoords,
//         hourlyData,
//         address: bbbb.address.quarter,
//         error: null,
//       });
//     } catch (error) {
//       console.error("날씨 데이터 가져오기 오류:", error);
//       setWeatherInfo((prev) => ({ ...prev, error: error.message }));
//     }
//   }, []);

//   useEffect(() => {
//     fetchWeatherData();
//   }, []);

//   const { location, gridCoords, data, address, error, hourlyData } =
//     weatherInfo;

//   // 구름 상태 표시
//   const skyCondition = hourlyData[dateHour]?.SKY ?? "null";
//   const Cloud =
//     skyCondition === "1" ? "맑음" : skyCondition === "3" ? "구름많음" : "흐림";

//   return (
//     <S.Wrap>
//       <S.MenuTapWrap>메뉴 탭</S.MenuTapWrap>
//       <S.WeatherDetailsWrap>
//         <S.Temperature>{hourlyData[dateHour]?.TMP ?? "null"}°</S.Temperature>
//         <S.CloudInfo>{Cloud}</S.CloudInfo>
//         <S.LocationWrap>
//           <S.Location>{address}</S.Location>
//           <S.LocationImg src="/images/location.png" />
//         </S.LocationWrap>
//         <S.WeatherSummaryWrap>
//           <S.CurrentWeatherWrap>
//             {" "}
//             {/* 현재 날씨정보, 시간별 날씨정보 Wrap */}
//             <S.WeatherInfoWrap>
//               <S.WeatherInfo>
//                 {/* 습도 */}
//                 <S.WeatherInfoImg src="/images/humidity_sky.png" />
//                 <S.WeatherInfoText>습도</S.WeatherInfoText>
//                 {hourlyData[dateHour]?.REH ?? "null"}%
//               </S.WeatherInfo>{" "}
//               <S.WeatherInfo>
//                 {/* 강수확률 */}
//                 <S.WeatherInfoImg src="/images/humidity_mid_sky.png" />
//                 <S.WeatherInfoText>강수확률</S.WeatherInfoText>
//                 {hourlyData[dateHour]?.POP ?? "null"}%
//               </S.WeatherInfo>{" "}
//               {/* 0: 없음, 1: 비, 2: 비/눈, 3: 눈, 5: 빗방울, 6: 빗방울눈날림, 7: 눈날림 */}
//               <S.WeatherInfo>
//                 {/* 풍속 */}
//                 <S.WeatherInfoImg src="/images/air.png" />
//                 <S.WeatherInfoText>바람</S.WeatherInfoText>
//                 {hourlyData[dateHour]?.WSD ?? "null"}m/s
//               </S.WeatherInfo>{" "}
//             </S.WeatherInfoWrap>
//             {/* 시간별 날씨 */}
//             {/* <HourlyWeather monthlyData={monthlyData} /> */}
//           </S.CurrentWeatherWrap>
//           <S.DailyWeatherWrap>
//             {/* <MonthWeather monthlyData={monthlyData} /> */}
//           </S.DailyWeatherWrap>
//         </S.WeatherSummaryWrap>
//       </S.WeatherDetailsWrap>
//       {/* <div>강수확률: {hourlyData["1800"]?.TMN || "null"}%</div> */}
//     </S.Wrap>
//   );
// }

// // 2024.08.30.금 /
// // 1. 초단기실황조회 (getUltraSrtNcst)으로 현재 시간의 날씨 상태 data 가져오고 있음

// // 해야할 것:
// // 1. 초단기실황조회, 초단기예보조회, 단기예보조회가 있다.
// //    초단기실황조회:
// //      - 현재 시간의 기상 실황 데이터
// //    초단기예보조회:
// //      - 가까운 미래의 기상 예보 1시간 간격의 예보 (즉 오늘 시간대별 기상 예보)
// //      - 이는 21 ~ 23시의 baseTime을 사용하면 data를 못 가져온다.
// //        이유는 모르겠으나 21시는 20시로 / 22,23시는 00시로 대체 해놓았음
// //    단기예보조회:
// //      - 일주일간의 대략적인 날씨를 알려준다.
// //
// // 2. 여기서 현재 시간 날씨 완성을 하고
// //    초단기예보조회를 통해 현재 시간대 이후 1~6시간? 의 날씨를 예보하는 data 가져온다.
// // 3. 일주일의 data를 가져온다.
// // - 삼성의 날씨 예보처럼 메인으로 현재 시간대 날씨 띄우고
// //   작게 위치 표시
// // - 현재 시간 이후로 그 뒤의 시간대별 예상 날씨 및 온도 등 표시하기
// // - 그 옆으로는 일주일 오전, 오후 날씨 나타내기
// //

// // 2024.09.01.일 /
// // 해야할 것:
// // 1. 시간별 날씨 data 불러오고 / css 완성
// //

// // 2024.09.02.월 /
// // 1. 현재 초단기실황조회를 사용을 하고 있지 않음. 매 정각 10분마다 데이터를 불러오지 못해서
// //    아직은 사용하지 않지만 기온 사용은 생각 중 - 데이터 불러오지 못하면 조건식으로 단기예보 data 사용으로
// //    null이 아닌 해당 시간의 단기예보 사용
// //    (그래서 일단 단기예보시간을 1시간 늦춤 - 이는 20시면 18, 19, 20는 17시로 반환을 해 data는 18, 19, 20...)
// //    (반환한다. 그래서 20시이고 10분 되기전으로 초단기실황조회의 data를 못가져 오면 해당 단기예보 data 불어옴)
// // 2. 습도, 강수, 바람, 구름 등은 단기예보에서만 지원을 하고 있음 - 그래서 단기예보만 사용해도 될듯;;?
// //
// // 해야할 것:
// // 1. 시간별, 요일별 날씨 구현하기
// // 2. 렌더링 및 코드 분할 하기
// // 3. hourlyData를 시간별로 나열로 모든 data가져오기
// //

// // 2024.09.03.화 /
// // 1. 시간별 날씨예보 끝
// // 2. 요일별 날씨 불러와야 함 - numOfRows으로 data 가져오는데 1시간의 데이터양은 12개로
// //    일주일치 data를 가져오려면 2,016개의 data를 가져와야 한다.
// // 3. 하지만 시간 설정을 다르게 해서 02시부터 3시간씨 data를 불러오는데
// //    20시가 되면 20시 부터의 data가 아닌 21시 부터의 data를 가져와서
// //    18 ~ 20시는 17시의 data를 가져오고 있다.
// // 4. 그래서 2,016개가 아닌 추가 3개의 data를 더 불러와야 한다.
// //    1시간 12개 data정보
// //    24시간 288개 data정보
// //    3일 864개를 추가로 더 가져와한다.
// // 총 2,880개 data정보 불러와야 함
// //
// // 해야할 것:
// // 1. 요일 data 불러오기\
// // 2. 테두리 및 스타일 완성
// // 3. 코드 분할 및 최적화
// // 4. 메뉴 탭에서 검색으로 지역 선택 및 즐겨 찾기 추가 및 열고 닫기 기능 구현
//
