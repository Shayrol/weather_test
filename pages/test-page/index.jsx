import dfs_xy_conv from "@/src/commons/libraries/dfs";
import {
  getClosestHour,
  getDate,
  getDateAPI,
  getFullDate,
  getOneHourAgo,
} from "@/src/commons/libraries/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "@/styles/weather/weather";
import HourlyWeather from "@/src/components/commons/HourlyWeather/HourlyWeather";
import { Humidity } from "@/src/commons/libraries/humidity";
import { Wind } from "@/src/commons/libraries/wind";
import { Cloud } from "@/src/commons/libraries/cloud";
import { useRecoilState } from "recoil";
import { isWeatherData } from "@/src/commons/stores";
import { dnYnLat, dnYnLon } from "@/src/commons/libraries/dnYn";
import SunriseSunsetTimes from "@/src/components/commons/SunRiseAndSunSet/SunRiseAndSunSet";
import MonthWeather from "@/src/components/commons/MonthWeather/MonthWeather";
import AirQuality from "@/src/components/commons/AirQuality/AirQuality";
import { locationCode } from "@/src/commons/libraries/data/locationCodes";
import Head from "next/head";
import config from "@/apikey";

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(true);

  const [weatherState, setWeatherState] = useState(""); // 시간 날씨예보 API 데이터 가공
  const [nowWeatherState, setNowWeatherState] = useState({}); // 현재 시간에 대한 날씨 데이터 추출
  const [daysWeatherState, setDaysWeatherState] = useState(""); // 주간 날씨예보 API 데이터
  const [sunTimeState, setSunTimeState] = useState(""); // 일출/일몰 API 데이터
  const [locationState, setLocationState] = useState(""); // 주소 - 현재 위치 주소 표시 목적
  const [cityCodeState, setCityCodeState] = useState(""); // 도시명 / 코드 - 중기예보 API 요청에 필요
  const [gridCoordsState, setGridCoordsState] = useState(""); // 격자 좌표 - 초단기, 단기, 일출/일몰 API 요청에 필요

  const date = new Date();
  const hour = date.getHours();
  const HourStr = String(hour).padStart(2, "0") + "00"; // 예: "1800"
  const HourInt = parseInt(String(hour).padStart(2, "0") + "00"); // 예: 1800
  const sunrise = sunTimeState?.sunrise; // 일출 데이터 추출
  const sunset = sunTimeState?.sunset; // 일몰 데이터 추출
  const apiKey = config.WEATHER_API_KEY;

  // 실시간 현재 날씨 - 초단기예보
  const dailyWeatherAPI = async (x, y) => {
    const dailyWeather = {}; // 현재 날씨예보 데이터 가공
    const dailyWeatherResponse = await axios.get(
      `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${apiKey}&numOfRows=70&pageNo=1&base_date=${getDate(date)}&base_time=${getOneHourAgo()}&nx=${x}&ny=${y}&dataType=JSON`
    );
    const newDailyWeatherItems =
      dailyWeatherResponse?.data?.response?.body?.items?.item;

    // 데이터 가공
    newDailyWeatherItems.forEach((item) => {
      const dailyTime = parseInt(item.fcstTime);
      const dailyCategory = item.category;
      const dailyValue = item.fcstValue;

      if (dailyTime === HourInt) {
        dailyWeather[dailyCategory] = dailyValue;
      }
      setNowWeatherState(dailyWeather);
    });
  };
  console.log("PromiseDailyWeatherData: ", nowWeatherState);

  // 시간별 날씨 예보 - 단기예보
  const hourWeatherAPI = async (x, y) => {
    const hourWeather = {}; // 시간 날씨예보 데이터 가공
    const hourWeatherResponse = await axios.get(
      `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${apiKey}&base_date=${getDateAPI(
        date
      )}&base_time=${getClosestHour(hour)}&nx=${x}&ny=${y}&dataType=JSON&numOfRows=700`
    );
    const newHourWeatherItems =
      hourWeatherResponse?.data?.response?.body?.items?.item;

    // 데이터 가공
    newHourWeatherItems.forEach((item) => {
      const hourDay = item.fcstDate;
      const hourTime = item.fcstTime;
      const hourCategory = item.category;
      const hourValue = item.fcstValue;

      if (!hourWeather[hourDay]) {
        hourWeather[hourDay] = {};
      }

      if (!hourWeather[hourDay][hourTime]) {
        hourWeather[hourDay][hourTime] = {};
      }

      hourWeather[hourDay][hourTime][hourCategory] = hourValue;
      setWeatherState(hourWeather);
    });
  };

  // 주간 날씨 예보 - 중기예보
  const daysWeatherAPI = async (city) => {
    if (city) {
      const daysWeatherResponse = await axios.get(
        `https://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${apiKey}&numOfRows=10&pageNo=1&regId=${city.code}&tmFc=${getFullDate()}&dataType=JSON`
      );
      const newDayWeatherItems =
        daysWeatherResponse?.data?.response?.body?.items?.item[0];

      setDaysWeatherState(newDayWeatherItems);
    }
  };

  // 일출, 일몰 데이터
  const dailySunAPI = async (lat, lon) => {
    const dailySunResponse = await axios.get(
      `https://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getLCRiseSetInfo?longitude=${dnYnLon(lon)}&latitude=${dnYnLat(lat)}&locdate=${getDate(date)}&dnYn=N&ServiceKey=${apiKey}`
    );
    const newDailySunItems =
      dailySunResponse?.data?.response?.body?.items?.item;

    setSunTimeState(newDailySunItems);
  };

  // 위치 및 주소 요청 함수
  const fetchWeatherData = async () => {
    if (!navigator.geolocation) {
      console.log("Geolocation을 지원하지 않는 브라우저입니다.");
      return;
    }

    // Geolocation - 브라우저에서 현재 좌표 불러오기
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    const { latitude, longitude } = position.coords;

    // 격자 / 위도, 경도 - (x, y / lat, lon) 격자 좌표가 필요한 API가 있어 변화작업
    const gridCoords = dfs_xy_conv("toXY", latitude, longitude);
    setGridCoordsState(gridCoords);

    try {
      // 주소 API
      const locationResponse = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      const locCity = String(locationResponse.data.address.city);
      // 미리 저장해둔 도시명과 현재 위치 도시(locCity)가 일치 하는게 있는지 찾음 - daysWeatherAPI
      const CityCode = locationCode.find((el) =>
        locCity.includes(el.city.trim())
      );
      setLocationState(locationResponse.data.address); // 주소 - 현재 위치 주소 표시 목적
      setCityCodeState(CityCode); // 도시명 / 코드 - 중기예보 API 요청에 필요

      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error.response || error.message);
    }
  };

  // 위치, 주소 API 요청 - Geolocation이 CSR에서만 동작을 함.
  useEffect(() => {
    fetchWeatherData();
  }, []);

  // 위치, 주소 값 받아오면 해당 useEffect 실행
  useEffect(() => {
    if (!isLoading) {
      dailyWeatherAPI(gridCoordsState.x, gridCoordsState.y);
      hourWeatherAPI(gridCoordsState.x, gridCoordsState.y);
      daysWeatherAPI(cityCodeState);
      dailySunAPI(gridCoordsState.lat, gridCoordsState.lng);
    }
  }, [isLoading === false]);

  // 초단기예보<nowWeatherState>에서는 강수확률의 데이터가 없어 단기예보에서 가져옴
  const weatherDetails = weatherState?.[getDate(date)]?.[HourStr];

  // 구름 상태 표시 - 초단기예보 데이터 사용
  const CloudCod =
    nowWeatherState?.SKY === "1"
      ? "맑음"
      : nowWeatherState?.SKY === "3"
        ? "구름많음"
        : nowWeatherState?.SKY === "4"
          ? "흐림"
          : "--";

  return (
    <S.Wrap>
      <Head>
        <title>날씨 웹</title>
      </Head>
      <S.WeatherDetailsWrap>
        <S.WeatherWrap>
          <S.InfoWrap>
            <S.Temp>{nowWeatherState.T1H ?? "00"}°</S.Temp>
            <S.Cloud>{CloudCod}</S.Cloud>
            <S.LocWrap>
              <S.Loc>{locationState.quarter ?? "Loading.."}</S.Loc>
              <S.LocImg src="/images/location.png" />
            </S.LocWrap>
          </S.InfoWrap>
          <S.CloudImg
            src={Cloud(
              nowWeatherState?.PTY,
              nowWeatherState?.SKY,
              HourInt,
              sunrise,
              sunset
            )}
          />
        </S.WeatherWrap>
        <S.WeatherSummaryWrap>
          <S.CurrentWeatherWrap>
            {" "}
            {/* 현재 날씨정보, 시간별 날씨정보 Wrap */}
            <S.WeatherInfoWrap>
              <S.WeatherInfo>
                {/* 습도 */}
                <S.WeatherInfoImg src="/images/humidity_sky.png" />
                <S.WeatherInfoText>습도</S.WeatherInfoText>
                {nowWeatherState?.REH ?? 0}%
              </S.WeatherInfo>{" "}
              <S.WeatherInfo>
                {/* 강수확률 */}
                <S.WeatherInfoImg src={Humidity(weatherDetails?.POP)} />
                <S.WeatherInfoText>강수확률</S.WeatherInfoText>
                {weatherDetails?.POP ?? 0}%
              </S.WeatherInfo>{" "}
              <S.WeatherInfo>
                {/* 풍속 */}
                <S.WeatherInfoImg src={Wind(nowWeatherState?.WSD)} />
                <S.WeatherInfoText>바람</S.WeatherInfoText>
                {nowWeatherState?.WSD ?? 0}m/s
              </S.WeatherInfo>{" "}
            </S.WeatherInfoWrap>
            {/* 시간별 날씨 */}
            <HourlyWeather
              weatherDays={weatherState}
              sunrise={sunrise}
              sunset={sunset}
            />
          </S.CurrentWeatherWrap>
          {/* 일주일 날씨 */}
          <S.MonthWeatherWrap>
            <MonthWeather
              weatherState={weatherState}
              daysWeatherState={daysWeatherState}
            />
          </S.MonthWeatherWrap>
        </S.WeatherSummaryWrap>
        <S.AirAndSunInfoWrap>
          {/* 일출 / 일몰 */}
          <S.SunInfoWrap>
            <SunriseSunsetTimes sunTime={sunTimeState} />
          </S.SunInfoWrap>
          <S.AirInfoWrap>
            {/* 미세먼지 */}
            <AirQuality />
          </S.AirInfoWrap>
        </S.AirAndSunInfoWrap>
      </S.WeatherDetailsWrap>
    </S.Wrap>
  );
}

// 🎈2024.09.05.목 /
// 1. 습도, 강수, 바람 위에 날씨에 대한 한 줄 요약 추가할지 생각 중
// 2. 요일별 날씨 정보 추가하기
//    문제점은 일주일의 data를 못 불러오는 것 같음 약 920개 정도의 data로
//    약 5일의 정보밖에 못 가져옴

// 사용한 API
// 기상청 단기예보, 중기예보, 기상특보 조회서비스한국천문연구원 출몰시각정보
// 오픈스트리트맵(현재 좌표에 대한 주소), 에어코리아 대기오염정보, Geolocation API(현재 좌표)
// 기상청_생활기상지수 조회서비스(3.0): 체감온도

// 🎈2024.09.06.금 /
// 1. 시간별 날씨 정보가 현 시간 기준으로 시작이 안되는 듯?
//

// 🎈2024.09.07.토 /
// 1. 미세먼지 데이터 완
// 2. 일출 시간 업데이트 문제인지 40? 45분 부터 10분간 날씨 데이터를 못 불러옴
//    - 일출 일몰 시간을 날씨 데이터에 사용을 하고 있어 생긴 문제인듯
//    - 해 or 달의 이미지 변경에 sunTime의 데이터가 없다 뜨고 21:40분에 일어남
//    - 해당 시간대 문제인듯 (해당 기능 사용한 다은 페이지도 같은 현상 일어남)

//
// 해야할 것:
// 1. 중기예보 API 사용하기 - 미세먼지 컴포넌트는 해당 data를 사용할 다른 컴포넌트가
//    없기에 복잡하지 않았음
//    - 중기예보도 딱히 상관 없어보임
// 2. 테두리 및 스타일 완성하기
// 3. 재난문자 현재 날씨 오른쪽에 띄우기

// Promise.all을 사용해 API 요청 동시에 하기
// const getLocation = async (latitude, longitude) => {
//   const response = await axios.get(
//     `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
//   );
//   return response.data.address;
// };

// const getCurrentWeather = async (date, hour, gridCoords) => {
//   const response = await axios.get(
//     `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${apiKey}&numOfRows=70&pageNo=1&base_date=${getDate(date)}&base_time=${getOneHourAgo()}&nx=${gridCoords.x}&ny=${gridCoords.y}&dataType=JSON`
//   );
//   return response.data.response.body.items.item;
// };

// const getHourlyWeather = async (date, hour, gridCoords) => {
//   const response = await axios.get(
//     `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${apiKey}&base_date=${getDateAPI(date)}&base_time=${getClosestHour(hour)}&nx=${gridCoords.x}&ny=${gridCoords.y}&dataType=JSON&numOfRows=700`
//   );
//   return response.data.response.body.items.item;
// };

// const getWeeklyWeather = async (cityCode) => {
//   const response = await axios.get(
//     `https://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${apiKey}&numOfRows=10&pageNo=1&regId=${cityCode}&tmFc=${getFullDate()}&dataType=JSON`
//   );
//   return response.data.response.body.items.item[0];
// };

// const getSunriseSunset = async (longitude, latitude, date) => {
//   const response = await axios.get(
//     `https://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getLCRiseSetInfo?longitude=${dnYnLon(longitude)}&latitude=${dnYnLat(latitude)}&locdate=${getDate(date)}&dnYn=N&ServiceKey=${apiKey}`
//   );
//   return response.data.response.body.items.item;
// };

// // 메인 함수
// const fetchWeatherData = async () => {
//   if (!navigator.geolocation) {
//     setWeatherInfo((prev) => ({
//       ...prev,
//       error: "Geolocation을 지원하지 않는 브라우저입니다.",
//     }));
//     return;
//   }

//   try {
//     const position = await new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(resolve, reject);
//     });

//     const { latitude, longitude } = position.coords;
//     const gridCoords = dfs_xy_conv("toXY", latitude, longitude);

//     setLat(latitude);
//     setLon(longitude);

//     // 모든 API 요청을 동시에 실행
//     const [location, currentWeather, hourlyWeather, weeklyWeather, sunriseSunset] = await Promise.all([
//       getLocation(latitude, longitude),
//       getCurrentWeather(date, hour, gridCoords),
//       getHourlyWeather(date, hour, gridCoords),
//       getWeeklyWeather(getCityCode(location)),
//       getSunriseSunset(longitude, latitude, date)
//     ]);

//     // 데이터 처리 및 상태 업데이트
//     const processedCurrentWeather = processCurrentWeather(currentWeather);
//     const processedHourlyWeather = processHourlyWeather(hourlyWeather);

//     setWeatherInfo({
//       location,
//       currentWeather: processedCurrentWeather,
//       hourlyWeather: processedHourlyWeather,
//       weeklyWeather,
//       sunriseSunset
//     });

//     setLoading(false);
//   } catch (error) {
//     console.error("Error fetching data: ", error);
//     setWeatherInfo((prev) => ({
//       ...prev,
//       error: "데이터를 가져오는 데 실패했습니다.",
//     }));
//     setLoading(false);
//   }
// };

// // 이는 예시 코드이며 location의 값이 있는 상태에서 나머지 API를 실행을 해야한다.
// // 추가로 수정을 통해 빠른 API 응답을 받으려면 zen-observable 또는 Promise.all 사용을 한다.
// // zen-observable는 비동기 처리가 들어오는 대로 바로바로 처리를 한다.
// // Promise.all은 비동기를 동시에 실행을 해 모두 끝나면 한 번에 값을 반환한다.
// // async / await은 첫 번째 비동기가 끝나고 다음 비동기로 넘어가 값을 얻는다.

// // 속도면에서 zen-observable이 빨라 location의 도시의 위치를 받아 중기예보만 따로 처리를 하고
// // 나머지 API 요청은 zen-observable로 하고 setState에 저장을 한다.

// // 여기서 state의 리렌더링을 줄이고 싶다면 Promise.all을 사용하면 될 것 같다.
// // 한 번에 결과값을 state 객체에 저장하기..

// export default function Test() {
//   const test = async () => {
//     const position = await new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
//     console.log("위치: ", position);
//     console.log("lat: ", position.coords.latitude);
//     console.log("lon: ", position.coords.longitude);
//   };

//   useEffect(() => {
//     test();
//   }, []);

//   return (
//     <div>
//       <div></div>
//     </div>
//   );
// }

// 🎈2024.10.08.화 /
// 1. 기존 await으로 API 요청이 끝나면 다음 API 요청으로 데이터 받아오는데 시간이 좀 걸림..
//    그래서 Promise.all과 Observable 두 가지 방법을 생각하고 있었음.
// 2. 두 선택에서 Promise.all을 사용을 하기로 함.
//    성능적인 부분에서는 다음과 같음
//    Observable: 동시에 API 요청을 하고 완료가 되는대로 바로 결과 반환
//    Promise.all: 동시에 API 요청을 하지만 모두 완료가 될 때까지 기다리고 결과 반환
// 3. 보기에는 Observable를 사용하는게 좋은데 지속적인 업데이트를 하는 것도 아니고
//    스트리밍 데이터를 다루지 않아 간단한 API 요청 처리에는 Promise.all이 더 적합하다고 생각함

// Promise.allSettled를 통해 먼저 완료된 순으로 반환을 했지만 해당 fetchWeatherData함수가
// 끝나지 않아 모든 APi 요청이 끝나야 State가 업데이트 됨
// 즉 Promise.all과 Promise.allSettled의 차이가 없음...
// 해결하기 위해서는 각각의 함수의 API 요청을 하는 방법이 있을 듯...
