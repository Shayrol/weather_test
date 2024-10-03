import { PM10, PM25 } from "@/src/commons/libraries/pm10pm25";
import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./AirQuality.styles";
import config from "@/apikey";

export default function AirQuality() {
  const [airData, setAirData] = useState("");

  const apiKey = config.WEATHER_API_KEY;

  const fetchAirQuality = async () => {
    const result = await axios.get(
      `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=인천&pageNo=1&numOfRows=100&returnType=json&serviceKey=${apiKey}&ver=1.5`
    );

    if (result) {
      setAirData(result);
    }
  };

  let pm25 = "";
  let pm10 = "";
  if (airData) {
    pm10 = airData.data?.response?.body?.items[0]?.pm10Value;
    pm25 = airData.data?.response?.body?.items[0]?.pm25Value;
  }

  useEffect(() => {
    fetchAirQuality();
  }, []);

  return (
    <S.Wrap>
      <S.PMWrap>
        <S.PMTitle>미세먼지</S.PMTitle>
        <S.PMImg src={PM10(pm10).img ?? "/images/code-yellow.svg"} />
        <S.PMText>{pm10} ㎍/㎥</S.PMText>
        <S.PMText>{PM10(pm10).name}</S.PMText>
      </S.PMWrap>
      <S.PMWrapLine />
      <S.PMWrap>
        <S.PMTitle>초미세먼지</S.PMTitle>
        <S.PMImg src={PM25(pm25).img} />
        <S.PMText>{pm25} ㎍/㎥</S.PMText>
        <S.PMText>{PM25(pm25).name}</S.PMText>
      </S.PMWrap>
    </S.Wrap>
  );
}

// 미세먼지 측정 지역에 작전동이 없음
// 가져와야 할 데이터:
// 1. 위치 도시,
