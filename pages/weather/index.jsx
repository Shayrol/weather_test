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
    newDailyWeatherItems?.forEach((item) => {
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
    newHourWeatherItems?.forEach((item) => {
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
      setWeatherState(hourWeather ?? "");
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
            <S.HourlyWeatherWrap>
              <HourlyWeather
                weatherDays={weatherState}
                sunrise={sunrise}
                sunset={sunset}
              />
            </S.HourlyWeatherWrap>
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
