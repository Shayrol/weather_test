import { Humidity } from "@/src/commons/libraries/humidity";
import { getDate } from "@/src/commons/libraries/utils";
import _ from "lodash";
import { Cloud2, Cloud3 } from "@/src/commons/libraries/cloud";
import * as S from "./MonthWeather.styles";

export default function MonthWeather({ weatherState, daysWeatherState }) {
  const dates = [0, 1, 2]; // 0: 오늘, 1: 내일, 2: 모레
  const data = daysWeatherState; // 4일 데이터

  const dayCode = [
    { day: "월요일", code: 1 },
    { day: "화요일", code: 2 },
    { day: "수요일", code: 3 },
    { day: "목요일", code: 4 },
    { day: "금요일", code: 5 },
    { day: "토요일", code: 6 },
    { day: "일요일", code: 7 },
  ];

  // 현재 요일 구하기 (일요일은 0, 월요일은 1, ... 토요일은 6)
  const today = new Date().getDay();
  const todayCode = today === 0 ? 7 : today;

  // 현재 요일 기준으로 배열 재정렬
  const sortedDayCode = [
    // 인덱스 3번 까지 자름: 목, 금, 토, 일
    ...dayCode.slice(todayCode - 1),
    // 인덱스 3번 이후 다 자름: 월, 화, 수
    ...dayCode.slice(0, todayCode - 1),
  ];

  // 4일 강수확률
  const daysData = () => {
    const now = new Date();
    const hours = now.getHours();

    // 00:00 ~ 06:00 시간대는 rnSt4Pm ~ rnSt7Pm, 06:00 ~ 23:59 시간대는 rnSt3Pm ~ rnSt6Pm을 반환
    if (hours >= 0 && hours < 6) {
      // 하루가 지난 00시 부터 data 업데이트 06시까지 4일 뒤의 data를 사용
      const PM_result = _.pick(data, [
        "rnSt4Pm",
        "rnSt5Pm",
        "rnSt6Pm",
        "rnSt7Pm",
      ]);
      const AM_result = _.pick(data, [
        "rnSt4Am",
        "rnSt5Am",
        "rnSt6Am",
        "rnSt7Am",
      ]);
      return { AM_result, PM_result };
    } else {
      const PM_result = _.pick(data, [
        "rnSt3Pm",
        "rnSt4Pm",
        "rnSt5Pm",
        "rnSt6Pm",
      ]);
      const AM_result = _.pick(data, [
        "rnSt3Am",
        "rnSt4Am",
        "rnSt5Am",
        "rnSt6Am",
      ]);
      return { AM_result, PM_result };
    }
  };

  const daysCloudData = () => {
    const now = new Date();
    const hours = now.getHours();

    // 00:00 ~ 06:00 시간대는 rnSt4Pm ~ rnSt7Pm, 06:00 ~ 23:59 시간대는 rnSt3Pm ~ rnSt6Pm을 반환
    if (hours >= 0 && hours < 6) {
      // 하루가 지난 00시 부터 data 업데이트 06시까지 4일 뒤의 data를 사용
      const PM_result = _.pick(data, ["wf4Pm", "wf5Pm", "wf6Pm", "wf7Pm"]);
      const AM_result = _.pick(data, ["wf4Am", "wf5Am", "wf6Am", "wf7Am"]);

      return { AM_result, PM_result };
    } else {
      const PM_result = _.pick(data, ["wf3Pm", "wf4Pm", "wf5Pm", "wf6Pm"]);
      const AM_result = _.pick(data, ["wf3Am", "wf4Am", "wf5Am", "wf6Am"]);

      return { AM_result, PM_result };
    }
  };

  // 4일 강수확률, 구름 오전, 오후
  const pickedDays = daysData();
  const pickedCloudDays = daysCloudData();

  // 현재 날짜로부터 3일간의 날짜 - 년, 월 넘어감
  const getDateWithOffset = (offset = 0) => {
    const today = new Date();
    today.setDate(today.getDate() + offset);
    return getDate(today);
  };

  // 강수확률 - 1, 2, 3일의 구름 - 오전
  const WeatherDataAM = () => {
    return (
      <S.HumidityWrap>
        {dates.map((offset) => {
          const weatherDataAM =
            weatherState[getDateWithOffset(offset)]?.["0000"];
          return (
            <div
              key={offset}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <S.HumidityInfoWrap>
                <S.HumidityImg
                  src={
                    weatherDataAM
                      ? Humidity(weatherDataAM.POP)
                      : "/images/Cloud_SVG/humidity/humidity_low.svg"
                  }
                  alt="습도 이미지"
                />
                <S.HumidityText>
                  {weatherDataAM ? weatherDataAM.POP : "--"}% /
                </S.HumidityText>
              </S.HumidityInfoWrap>
            </div>
          );
        })}
      </S.HumidityWrap>
    );
  };

  // 강수확률 - 1, 2, 3일의 구름 - 오후
  const WeatherDataPM = () => {
    return (
      <S.HumidityWrap>
        {dates.map((offset) => {
          const weatherDataPM =
            weatherState[getDateWithOffset(offset)]?.["1200"];
          // console.log("weatherDataPM: ", weatherDataPM);
          // console.log("weatherDataPM: ", offset);
          return (
            <div
              key={offset}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <S.HumidityInfoWrap>
                <S.HumidityImg
                  src={
                    weatherDataPM
                      ? Humidity(weatherDataPM.POP)
                      : "/images/Cloud_SVG/humidity/humidity_low.svg"
                  }
                  alt="습도 이미지"
                />
                <S.HumidityText>
                  {weatherDataPM ? weatherDataPM.POP : "--"}%
                </S.HumidityText>
              </S.HumidityInfoWrap>
            </div>
          );
        })}
      </S.HumidityWrap>
    );
  };

  // 구름 - 1, 2, 3일의 구름 - 오전
  const WeatherCloudDataAM = () => {
    return (
      <S.CloudsWrap>
        {dates.map((offset) => {
          const weatherDataAM =
            weatherState[getDateWithOffset(offset)]?.["0000"];

          return (
            <div
              key={offset}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {weatherDataAM && Cloud3(weatherDataAM.SKY) !== undefined ? (
                <S.Clouds
                  src={weatherDataAM ? Cloud3(weatherDataAM.SKY) : ""}
                />
              ) : (
                <p
                  style={{
                    width: "25px",
                    height: "25px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  -
                </p>
              )}
            </div>
          );
        })}
      </S.CloudsWrap>
    );
  };

  // 구름 - 1, 2, 3일의 구름 - 오후
  const WeatherCloudDataPM = () => {
    return (
      <S.CloudsWrap>
        {dates.map((offset) => {
          const weatherDataPM =
            weatherState[getDateWithOffset(offset)]?.["1200"];

          return (
            <div
              key={offset}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {weatherDataPM && Cloud3(weatherDataPM.SKY) !== undefined ? (
                <S.Clouds
                  src={weatherDataPM ? Cloud3(weatherDataPM.SKY) : ""}
                />
              ) : (
                <p
                  style={{
                    width: "25px",
                    height: "25px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  -
                </p>
              )}
            </div>
          );
        })}
      </S.CloudsWrap>
    );
  };

  // 강수확률 - 4, 5, 6, 7일의 강수확률 - 오전
  const AfternoonWeatherDataAM = ({ dataSet }) => {
    const { AM_result } = dataSet;

    return (
      <S.HumidityWrap>
        {Object.keys(AM_result).map((key) => (
          <S.HumidityInfoWrap key={key}>
            <S.HumidityImg src={Humidity(AM_result[key])} />
            <S.HumidityText>{AM_result[key]}% /</S.HumidityText>
          </S.HumidityInfoWrap>
        ))}
      </S.HumidityWrap>
    );
  };

  // 강수확률 - 4, 5, 6, 7일의 강수확률 - 오후
  const AfternoonWeatherDataPM = ({ dataSet }) => {
    const { PM_result } = dataSet;

    return (
      <S.HumidityWrap>
        {Object.keys(PM_result).map((key) => (
          <S.HumidityInfoWrap key={key}>
            <S.HumidityImg src={Humidity(PM_result[key])} />
            <S.HumidityText>{PM_result[key]}%</S.HumidityText>
          </S.HumidityInfoWrap>
        ))}
      </S.HumidityWrap>
    );
  };

  // 구름 - 4, 5, 6, 7일의 구름 - 오전
  const WeatherCloudImgAM = ({ dataSet }) => {
    const { AM_result } = dataSet;

    return (
      <S.CloudsWrap>
        {Object.keys(AM_result).map((key) => (
          <div
            key={key}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <S.Clouds src={Cloud2(AM_result[key])} alt="AM Weather" />
          </div>
        ))}
      </S.CloudsWrap>
    );
  };

  // 구름 - 4, 5, 6, 7일의 구름 - 오후
  const WeatherCloudImgPM = ({ dataSet }) => {
    const { PM_result } = dataSet;

    return (
      <S.CloudsWrap>
        {Object.keys(PM_result).map((key) => (
          <div
            key={key}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <S.Clouds src={Cloud2(PM_result[key])} alt="PM Weather" />
          </div>
        ))}
      </S.CloudsWrap>
    );
  };

  return (
    <S.Wrap>
      {weatherState[getDateWithOffset(1)] && pickedDays && pickedCloudDays ? (
        <S.WeathersWrap>
          {/* 요일 출력 */}
          <S.TodaysWrap>
            {sortedDayCode.map((el) => (
              <S.Todays key={el.code} code={el.code}>
                {el.day}
              </S.Todays>
            ))}
          </S.TodaysWrap>

          <S.Wrap34>
            {/* 3일 날씨 데이터 */}
            <S.Wrap3>
              {/* 3일 오전, 오후 강수확률 */}
              <S.Humidity34>
                <WeatherDataAM />
                <WeatherDataPM />
              </S.Humidity34>

              {/* 3일 오전, 오후 구름 */}
              <S.Cloud34>
                <WeatherCloudDataAM />
                <WeatherCloudDataPM />
              </S.Cloud34>
            </S.Wrap3>

            {/* 4일 날씨 데이터 */}
            <S.Wrap4>
              {/* 4일 오전, 오후 강수확률 */}
              <S.Humidity34>
                <AfternoonWeatherDataAM dataSet={pickedDays} />
                <AfternoonWeatherDataPM dataSet={pickedDays} />
              </S.Humidity34>

              {/* 4일 오전, 오후 구름 */}
              <S.Cloud34>
                <WeatherCloudImgAM dataSet={pickedCloudDays} />
                <WeatherCloudImgPM dataSet={pickedCloudDays} />
              </S.Cloud34>
            </S.Wrap4>
          </S.Wrap34>
        </S.WeathersWrap>
      ) : (
        <S.Loading>Loading...</S.Loading>
      )}
    </S.Wrap>
  );
}

// 2024.09.08.일
// 1. 3일 뒤의 요일의 습도, 구름의 정보를 가져와서 현재 요일의 3일 뒤의 값을 지정을 할 수 있도록
//    const Pluse3_Day = (Days + 3) % 7; 현재 날짜에서 +3을 더하고 나머지 값으로 사용함
// 2. 3일 부터 정보를 불러오는 data의 key의 이름은 rnSt3AP, rnSt3Pm ... rnSt7Pm rnSt8, rnSt9, rnSt10
//    이렇게 오전, 오후의 데이터를 불러오고 rnSt7Pm까지 5일의 오전, 오후의 값을 주고
//    나머지는 예상의 값 평균인 듯 10까지의 data는 필요없어 일주일에 맞게 9까지 사용하면 됨
// 3. 데이터를 불러와 화면에 띄우고 이미지도 강수량에 따라 보여줘야 하는데 key의 값이 달라
//    forEach, find 등으로 간결화 하기 힘듦...

// 4. 그래서 일일히 Humidity()의 이미지를 각각 data.rnSt3Pm 이런식으로 값을 넣어 똑같이 7개를 생성
//    을 해야하는지 고민중...
//    강수확률 값 또한 마찬가지..
// 5. 00시 넘어서 01에러코드...
//    이것 또한 00시 자정이 넘어가면 데이터가 없어 못 불러옴 06시 부터 데이터 업데이트 함
//    그래서 하루 전날의 data를 불러와야 하고 / 이는 3일 이후 부터의 날씨 data라 따지고 보면 2일 이후 부터의 data임
//    즉 오늘이 월요일이면 수요일 부터의 data라는 뜻 - rnSt3Am이 수요일부터...
//

// 2024.09.09.월
// 1. 3일 뒤 날씨 데이터 가져옴
//    06시 기준으로 24시간 간격으로 data를 업데이트를 하게 해서 날짜 데이터 신경 써줘야 함
//    9일 06시 ~ 10일 06시 까지 9일의 data를 사용
//    06시 이후 부터는 10일 data를 사용
//    즉 00시 자정 이후 06시 까지는 rnSt3Pm이 아닌 rnSt4Pm의 데이터를 사용을 해야 한다.
//    (9일 - 3일 뒤인 rnSt3Pm / 10일 - 3일 뒤인 rnSt4Pm)\
//    이유는 10일에 업데이트 된 데이터가 10일 06시에 되기 때문에 이전의 날짜 데이터를
//    활용 해야한다.
//    (구름 또한 마찬가지)
// 2. 오늘, 내일, 모레의 데이터를 현재 날짜에 맞게 3개를 출력을 해야하는데
//    날짜 가져오는 데이터에서 00시 이후 data가 없는 경우가 있어 하루 전날의 데이터를
//    불러와 해결을 한 적이 있는데 이로인해 하루전 날 포함 되어 있음 가공해서 사용하기...
// 3. 각 날씨의 요일에 맞게 월, 화...토,일 출력하기 - code에 따라 출력하면 될 듯?
//

// 2024.09.10.화
// 1. 현재 날짜 기준으로 일주일의 날씨 데이터 가져옴
// 2. 하지만 현재 날짜 기준 3일의 데이터와 4일부터 ~ 7일의 데이터가 다른 곳에서 가져오고 있어
//    데이터를 가공을 해서 서로 합쳐서 사용을 해야하는데 key, value의 값이 다 다르며
//    요일 변경되는 복잡성 때문에 서로 다른 곳에서 데이터를 가져와 출력하고 있음
// 3. 스타일만 입히면 됨
// 4. 추가로 최저, 최고 기온을 추가하고 싶지만 데이터 가공에 복잡성이 우려되어 우선
//    제외하고 완성하기
//
// 해야할 것:
// 1. 중기예보 스타일 완성하기
// 2. 재난 안내 서비스 구현하기
// 3. 중기예보 최저, 최고 기온 추가 (상황에 따라서..) 현재 최저, 최고 기온 추가하기
// 4. 스타일 마무리
// 5. 최적화
// 6. loading, 이미지 불러오지 못한 경우의 대체제 사용
//

// 2024.09.11.수
// 1. 일주일 날씨 데이터 위치 구성 완료 - 가져오는 데이터 태그 요소가 다 달라서 오래 걸림...
//
// 해야할 것:
// 1. 폰트 추가하기
// 2. 화면 가로 크기에 따른 최소, 최대 크기 고정하기
//    브라우저 화면 기준..
// 3. 전체 테두리 스타일 완성하기
// 4. 현재 시간 날씨 API 사용하기, 재난 문자 안내 API 사용하기, 일주일 기온 API 사용하기
// 5. 푸터 구성하기
// 6. 최적화 하기, 태그 요소 분리 등등
// 7.
//

// 2024.09.12.목
// 1. 폰트 추가 완
// 2. 화면 가로 크기에 따른 크기 고정 함
// 3. 일주일 오전 오후 셋팅 완
// 4. 재난 안내 (예정)
//
// 해야할 것:
// 1. 테두리 및 스타일 완성하기
// 2. 현재 기온, 날씨 - 단기예보 데이터가 아닌 실시간 데이터로 가져오기(비가 내려도 단기예보로 안 맞음)
// 3. 푸터 구성하기 - 사옹한 API, 폰트, 이미지 등 기제하기
// 4. 최적화 하기 - 이미지, 텍스트 비어있는 공간 채우고 못 가져온 데이터에 대한 이미지, 텍스트
//               - 더미 채우기
// 5. 일주일 최저, 최고 기온 가져오기 - 3일치 데이터를 사용하면 되지만 3일뒤 날씨 데이터는
//    강수확률, 구름 상태 정보만 알려줘서 추가 API를 요청을 해야함 - (고려..)
//

// 2024.09.12.목
// 1. 테두리 및 스타일 완
// 2. 최적화 - 데이터 다 불러올 때 까지의 로딩 페이지 생성, 컴포넌트 최적화 아직 안됨
//
// 해야할 것:
// 1. 헤더 추가를 하고 다크모드 추가
// 2. 푸터 추가를 하고 사용한 기술 기재
