import dfs_xy_conv from "@/src/commons/libraries/dfs";
import {
  getClosestHour,
  getDate,
  getDateAPI,
  getFullDate,
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
import LoadingPage from "@/src/components/commons/Loading/loading";
import AirQuality from "@/src/components/commons/AirQuality/AirQuality";
import { locationCode } from "@/src/commons/libraries/data/locationCodes";

export default function ProfilePage() {
  const [weatherInfo, setWeatherInfo] = useRecoilState(isWeatherData);
  const [loading, setLoading] = useState(true);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const date = new Date();
  const hour = date.getHours();
  const HourStr = String(hour).padStart(2, "0") + "00"; // 예: "1800"
  const HourInt = parseInt(String(hour).padStart(2, "0") + "00");
  const sunrise = weatherInfo.sunTime.sunrise;
  const sunset = weatherInfo.sunTime.sunset;

  const fetchWeatherData = async () => {
    if (!navigator.geolocation) {
      setWeatherInfo((prev) => ({
        ...prev,
        error: "Geolocation을 지원하지 않는 브라우저입니다.",
      }));
      return;
    }

    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    // 위도, 경도 값
    const { latitude, longitude } = position.coords;
    // 위도, 경도 값을 받아 격자 위치 반환
    const gridCoords = dfs_xy_conv("toXY", latitude, longitude);
    const weatherData = {};
    setLat(latitude);
    setLon(longitude);

    const apiKey =
      "JTN8hhe7FF97AD0ZKTJRSOf7LtDqtJu%2BJYNUnjwm6heZNq8rSzNj1e2MQDRIa%2BhRRSitVDz5J0NERgwhDy33Ww%3D%3D";

    try {
      // 위치
      const locationResponse = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      const locCity = String(locationResponse.data.address.city);
      const CityCode = locationCode.find((el) =>
        locCity.includes(el.city.trim())
      );

      // 주간 날씨 데이터
      const daysWeatherResponse = await axios.get(
        `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${apiKey}&numOfRows=10&pageNo=1&regId=${CityCode.code}&tmFc=${getFullDate()}&dataType=JSON`
      );

      // 일출, 일몰 데이터
      const result = await axios.get(
        `http://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getLCRiseSetInfo?longitude=${dnYnLon(longitude)}&latitude=${dnYnLat(latitude)}&locdate=${getDate(date)}&dnYn=N&ServiceKey=${apiKey}`
      );

      // 시간 날씨 데이터
      const weatherResponse = await axios.get(
        `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${apiKey}&base_date=${getDateAPI(
          date
        )}&base_time=${getClosestHour(hour)}&nx=${gridCoords.x}&ny=${
          gridCoords.y
        }&dataType=JSON&numOfRows=1500`
      );

      const items = weatherResponse.data.response.body.items.item;
      items.forEach((item) => {
        const timeKey = item.fcstTime; // 예: "1800", "1900"
        const dayKey = item.fcstDate; // 예: "20240903", "20240904"
        const category = item.category;
        const value = item.fcstValue;

        // dayKey가 존재하지 않으면 초기화
        if (!weatherData[dayKey]) {
          weatherData[dayKey] = {};
        }
        // timeKey가 존재하지 않으면 초기화
        if (!weatherData[dayKey][timeKey]) {
          weatherData[dayKey][timeKey] = {};
        }
        // 데이터 저장
        weatherData[dayKey][timeKey][category] = value;
      });
      console.log("weatherData: ", weatherData);

      if ((result && locationResponse && weatherData, daysWeatherResponse)) {
        setWeatherInfo({
          sunTime: result.data.response.body.items.item,
          location: locationResponse.data.address,
          weather: weatherData,
          daysWeather: daysWeatherResponse.data.response.body.items.item[0],
        });

        // const locCity = String(locationResponse.data.address.city);
        // const CityCode = locationCode.find((el) =>
        //   locCity.includes(el.city.trim())
        // );

        // // 주간 날씨 데이터
        // const daysWeatherResponse = await axios.get(
        //   `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${apiKey}&numOfRows=10&pageNo=1&regId=${CityCode.code}&tmFc=${getFullDate()}&dataType=JSON`
        // );
        console.log("location: ", locationResponse);
        console.log(
          "daysWeatherResponse: ",
          daysWeatherResponse.data.response.body.items.item[0]
        );
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data: ", error.response || error.message);
      setWeatherInfo((prev) => ({
        ...prev,
        error: "데이터를 가져오는 데 실패했습니다...",
      }));
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  // if (loading) {
  //   return <LoadingPage />;
  // }

  const weatherDays = weatherInfo.weather;
  // 현재시간 날씨 정보
  const weatherDetails = weatherInfo.weather?.[getDate(date)]?.[HourStr];

  const CloudCod =
    weatherDetails?.SKY === "1"
      ? "맑음"
      : weatherDetails?.SKY === "3"
        ? "구름많음"
        : "흐림";

  console.log("weatherDetails: ", weatherDetails);
  console.log("weatherInfo: ", weatherInfo);
  console.log("weatherSunTime: ", weatherInfo.sunTime.sunrise);
  console.log("getDate(date): ", getDate(date));
  console.log("getDateAPI(date): ", getDateAPI(date));

  return (
    <S.Wrap>
      {/* <S.MenuTapWrap>메뉴 탭</S.MenuTapWrap> */}
      <S.WeatherDetailsWrap>
        <S.WeatherWrap>
          <S.InfoWrap>
            <S.Temp>{weatherDetails?.TMP ?? "NaN"}°</S.Temp>
            <S.Cloud>{CloudCod}</S.Cloud>
            <S.LocWrap>
              <S.Loc>{weatherInfo.location.quarter}</S.Loc>
              <S.LocImg src="/images/location.png" />
            </S.LocWrap>
          </S.InfoWrap>
          <S.CloudImg
            src={Cloud(
              weatherDetails?.PTY,
              weatherDetails?.SKY,
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
                {weatherDetails?.REH}%
              </S.WeatherInfo>{" "}
              <S.WeatherInfo>
                {/* 강수확률 */}
                <S.WeatherInfoImg src={Humidity(weatherDetails?.POP)} />
                <S.WeatherInfoText>강수확률</S.WeatherInfoText>
                {weatherDetails?.POP}%
              </S.WeatherInfo>{" "}
              <S.WeatherInfo>
                {/* 풍속 */}
                <S.WeatherInfoImg src={Wind(weatherDetails?.WSD)} />
                <S.WeatherInfoText>바람</S.WeatherInfoText>
                {weatherDetails?.WSD}m/s
              </S.WeatherInfo>{" "}
            </S.WeatherInfoWrap>
            {/* 시간별 날씨 */}
            <HourlyWeather
              weatherDays={weatherDays}
              sunrise={sunrise}
              sunset={sunset}
            />
          </S.CurrentWeatherWrap>
          {/* 일주일 날씨 */}
          <div style={{ width: "50%" }}>
            <MonthWeather weatherInfo={weatherInfo} />
          </div>
          {/* <S.DailyWeatherWrap> */}
          {/* </S.DailyWeatherWrap> */}
        </S.WeatherSummaryWrap>
        <S.AirAndSunInfoWrap>
          {/* 일출 / 일몰 */}
          <S.SunInfoWrap>
            <SunriseSunsetTimes sunTime={weatherInfo.sunTime} />
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
