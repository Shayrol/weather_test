import { useEffect, useRef } from "react";
import * as S from "./HourlyWeather.styles";
import { formatDate, getDate, Hours } from "@/src/commons/libraries/utils";
import { Humidity } from "@/src/commons/libraries/humidity";
import { Cloud } from "@/src/commons/libraries/cloud";

export default function HourlyWeather({ weatherDays, sunrise, sunset }) {
  const date = new Date();
  const hour = date.getHours();
  const HourStr = String(hour).padStart(2, "0") + "00"; // 현재 시간과 비교하기 위함
  const fullDate = getDate(date); // 현재 날짜와 비교하기 위함
  const propsSunrise = sunrise;
  const propsSunset = sunset;
  const wrapRef = useRef(null); // 가로 스크롤 위함

  // 가로 스크롤
  useEffect(() => {
    const handleWheel = (event) => {
      if (wrapRef.current) {
        wrapRef.current.scrollLeft += event.deltaY;
        event.preventDefault(); // 기본 스크롤 동작을 막는다.
      }
    };

    const currentWrap = wrapRef.current;
    if (currentWrap) {
      currentWrap.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (currentWrap) {
        currentWrap.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  // 시간대별 정보 출력
  const getSortedWeatherData = () => {
    const sortedData = [];

    // 날짜를 순서대로 가져오기
    Object.keys(weatherDays).forEach((day) => {
      // 각 날짜의 시간을 순서대로 배열에 추가 - 오름차순
      Object.keys(weatherDays[day])
        .sort((a, b) => parseInt(a) - parseInt(b)) // 시간을 정렬 (예: 1500, 1600, ...)
        .forEach((time) => {
          // 현재 시간의 다음 시간대 이상만 출력 - (예: 현재시간 15시인 경우 16시부터 출력)
          if (day === fullDate && time > HourStr) {
            sortedData.push({ day, time, ...weatherDays[day][time] });
          }

          // 현재 날짜 이후의 날은 모두 추가 (예: 자정 이후의 데이터)
          // 00시 이후로는 data 출력을 하지 않아 날짜가 다르면 그 뒤에 정장 및 출력
          if (day > fullDate) {
            sortedData.push({ day, time, ...weatherDays[day][time] });
          }
        });
    });

    return sortedData;
  };

  const weatherDataList = getSortedWeatherData();

  // return (
  //   <S.HourlyWeatherWrap ref={wrapRef}>
  //     {weatherDataList.map((data, index) => (
  //       <S.HourlyWeatherInfo key={`${data.day}-${data.time}-${index}`}>
  //         <S.HourWrap>
  //           <S.DateInfo>{formatDate(data.day)}</S.DateInfo>
  //           <S.HourInfo>
  //             {parseInt(data.time) < 1200 ? "오전" : "오후"}{" "}
  //             {Hours(parseInt(data.time))}시
  //           </S.HourInfo>
  //         </S.HourWrap>

  //         <S.CloudImg
  //           src={Cloud(
  //             data.PTY,
  //             data.SKY,
  //             data.time,
  //             propsSunrise,
  //             propsSunset
  //           )}
  //         />
  //         <S.Temperature>{data.TMP}°</S.Temperature>
  //         <S.PrecipitationProbabilityWrap>
  //           <S.PrecipitationProbabilityImg src={Humidity(data.POP)} />
  //           <S.PrecipitationProbability>{data.POP}%</S.PrecipitationProbability>
  //         </S.PrecipitationProbabilityWrap>
  //       </S.HourlyWeatherInfo>
  //     ))}
  //   </S.HourlyWeatherWrap>
  // );
  return (
    <S.HourlyWeatherWrap ref={wrapRef}>
      {weatherDataList && weatherDataList.length > 0 ? (
        weatherDataList.map((data, index) => (
          <S.HourlyWeatherInfo key={`${data.day}-${data.time}-${index}`}>
            <S.HourWrap>
              <S.DateInfo>{formatDate(data.day)}</S.DateInfo>
              <S.HourInfo>
                {parseInt(data.time) < 1200 ? "오전" : "오후"}{" "}
                {Hours(parseInt(data.time))}시
              </S.HourInfo>
            </S.HourWrap>

            <S.CloudImg
              src={Cloud(
                data.PTY,
                data.SKY,
                data.time,
                propsSunrise,
                propsSunset
              )}
            />
            <S.Temperature>{data.TMP}°</S.Temperature>
            <S.PrecipitationProbabilityWrap>
              <S.PrecipitationProbabilityImg src={Humidity(data.POP)} />
              <S.PrecipitationProbability>
                {data.POP}%
              </S.PrecipitationProbability>
            </S.PrecipitationProbabilityWrap>
          </S.HourlyWeatherInfo>
        ))
      ) : (
        <S.Loading>Loading..</S.Loading>
      )}
    </S.HourlyWeatherWrap>
  );
}

// 1. weatherDays은 객체형식으로 반환을 하는데 20240905: {1500: {...}, 1600: {...}}
//    이런식으로 key : value의 data가 있다.
// 2. 모든 날짜, 시간의 데이터를 순서대로 모두 나열을 해 보여주려면 getSortedWeatherData()를
//    참고하면 다음과 같다.
//    - Object.keys를 통해 객체의 모든 key즉 날짜를 forEach를 통해 불러온다.
//    - 다시 Object.keys(weatherDays[day])를 넣어 다시 forEach를 통해 시간과 시간의 value를
//      불러온다.
//    - 그전에 시간의 순서가 뒤죽박죽일 것이다.
//      그래서 sort를 사용을 해 오름차순으로 시간을 정리를 해주고 forEach를 사용해준다.
//
// 3. 날짜, 시간대 data기준이 좀 다르다. (02시부터 3시간 간격의 data를 가져옴 ...14,17,20,23)
//    현재 시간이 20시인 경우 20시 부터의 data가 아닌 21시의 data를 가져와 현재 날씨의 값을
//    가져오기 위해서 17시에는 18시 data가 아닌 14시의 data를 사용을 하고
//    20시에는 17시의 data를 가져와 사용을 하기에 18, 19, 20시... 의 data를 가져오고 있다.
//    그러다 보니 모든 data의 정보를 출력을 하고 있어
//    현재 시간이 20이여도 18, 19시도 출력을 하고 있어 조건을 걸어 이전의 시간대은 지움
//
//    정장된 날짜와 현재 날짜가 같은 경우 /  저장된 시간보다 현재 시간이 크거나 같은 경우에만
//    출력을 하고
//    자정이 넘은 경우에도 출력을 하기 위해 날짜가 다르면 출력 하도록 했음
