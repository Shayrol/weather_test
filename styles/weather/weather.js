import styled from "@emotion/styled";

// 페이지 전체 공간
export const Wrap = styled.div`
  border: 1px solid red;
  min-height: 100vh;
  /* display: flex; */
  /* justify-content: center; */
  /* padding: 0 100px; */
  // 눈누 - 학교안심 둥근미소 폰트
  font-family: "HakgyoansimDunggeunmisoTTF-B";
`;

// 현재 페이지 - 날씨 정보 전체공간
export const WeatherDetailsWrap = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 1200px; */
  /* padding: 30px; */
  padding-top: 80px;
`;

// 현재 날씨 정보 구름 이미지
export const CloudImg = styled.img`
  width: 120px;
  height: 120px;
`;

// 현재 날씨 정보 전체공간
export const WeatherWrap = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
`;

// 현재 위치, 기온 정보 공간
export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
`;

// 기온
export const Temp = styled.span`
  font-size: 54px;
  font-weight: 700;
  line-height: 50px;
`;

// 구름
export const Cloud = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

// 지역 공간
export const LocWrap = styled.div`
  display: flex;
  margin-top: 5px;
`;

// 지역
export const Loc = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
`;

// 지역 이미지
export const LocImg = styled.img`
  width: 25px;
`;

// 현재 날씨정보 + 일주일 날씨 정보 전체 공간 - (습도, 강수확률, 바람) + 시간별 날씨 + 요일별 날씨
export const WeatherSummaryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 10px;
  margin-top: 30px;
  padding: 0 5px;

  /* @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    } */
`;

// 현재, 시간별 날씨정보 전체공간 (습도, 강수확률 바람) + 시간별 날씨
export const CurrentWeatherWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100vw; */
  /* width: 410px; */
  gap: 10px;

  /* @media (min-width: 1025px) {
    width: 405px;
    } */

  /* @media (max-width: 430px) {
    width: 360px;
    } */
  max-width: 410px;
  width: 100%;
`;

// 현재 상세 날씨정보 전체공간 - 습도, 강수확률, 바람
export const WeatherInfoWrap = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 10px;
  /* width: 100%; */
`;

// 현재 상세 날씨정보 - 습도, 강수확률, 바람 정보
export const WeatherInfo = styled.div`
  box-shadow: 0px 0px 5px #444;
  border-radius: 10px;
  width: 100%;
  height: 150px;
  display: flex;
  /* flex-shrink: 1; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 습도, 강수확률, 바람 이미지
export const WeatherInfoImg = styled.img`
  width: 35px;
  margin-bottom: 10px;
`;

// 습도, 강수확률, 바람 텍스트
export const WeatherInfoText = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

// 일몰, 일출 / 미세먼지 전체공간
export const AirAndSunInfoWrap = styled.div`
  /* display: flex;
  margin-top: 10px;
  width: 820px;
  gap: 10px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 10px;
  margin-top: 10px;
  padding: 0 5px;

  /* @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    } */

  /* @media (max-width: 430px) {
      width: auto;
      } */
`;

// 일몰, 일출
export const SunInfoWrap = styled.div`
  box-shadow: 0px 0px 5px #444;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  width: 410px;
  height: 150px;
  /* 
  @media (max-width: 430px) {
    width: 360px;
  } */
`;

// 미세먼지
export const AirInfoWrap = styled.div`
  box-shadow: 0px 0px 5px #444;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  width: 410px;
  height: 150px;

  /* @media (max-width: 430px) {
    width: 360px;
    } */
`;

// 요일 날씨 공간
export const MonthWeatherWrap = styled.div`
  /* border: 1px solid blue; */
  box-shadow: 0px 0px 5px #444;
  border-radius: 10px;
  max-width: 410px;
  width: 100%;
  display: flex;
  justify-content: center;
  /* width: 410px; */

  /* @media (max-width: 430px) {
    width: 360px;
    } */
`;

// 시간 날씨 공간
export const HourlyWeatherWrap = styled.div`
  box-shadow: 0px 0px 5px #444;
  border-radius: 10px;
  /* width: 410px; */
`;
