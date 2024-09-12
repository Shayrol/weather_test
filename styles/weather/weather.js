import styled from "@emotion/styled";

export const Wrap = styled.div`
  /* border: 1px solid red; */
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 0 100px;
`;

// 메뉴 탭
export const MenuTapWrap = styled.div`
  border: 1px solid red;
  border-radius: 20px 20px 0;
  width: 15%;
`;

// 단기예보 공간 -메뉴 탭과 분리하기 위함
export const WeatherDetailsWrap = styled.div`
  width: 1200px;
  min-width: 600px;
  padding: 30px;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
`;

// 현재 날씨 정보 구름 이미지
export const CloudImg = styled.img`
  width: 120px;
  height: 120px;
`;

// 현재 날씨 정보 공간
export const WeatherWrap = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
`;

// 습도
export const Humidity = styled.div`
  border: 1px solid red;
`;

// 기온
export const Temp = styled.span`
  /* border: 1px solid red; */
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
  /* border: 1px solid red; */
  display: flex;
  margin-top: 5px;
`;

// 지역
export const Loc = styled.div`
  /* border: 1px solid red; */
  font-size: 16px;
  font-weight: 700;
`;

// 지역 이미지
export const LocImg = styled.img`
  /* border: 1px solid red; */
  width: 25px;
`;

// 날씨 상세 정보 공간
export const WeatherSummaryWrap = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-around;
  /* height: 300px; */
  width: 100%;
  min-width: 650px;
  gap: 10px;
  margin-top: 30px;
`;

// 현재, 시간별 날씨정보 공간
export const CurrentWeatherWrap = styled.div`
  /* border: 1px solid blue; */
  width: 50%;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// 현재 시간 상세 날씨정보 - 습도, 풍속 등등
export const WeatherInfoWrap = styled.div`
  /* border: 1px solid red; */
  display: flex;
  gap: 10px;
`;

// 햔재 상세 날씨정보
export const WeatherInfo = styled.div`
  border: 2px solid red;
  border-radius: 10px;
  width: 100%;
  min-width: 100px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WeatherInfoImg = styled.img`
  width: 35px;
  margin-bottom: 10px;
`;

export const WeatherInfoText = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

// 시간별 날씨정보 공간
export const HourlyWeatherWrap = styled.div`
  /* border: 1px solid blue; */
  border-radius: 10px;
  width: 100%;
  height: 70px;
`;

// 요일별 날씨정보 공간
export const DailyWeatherWrap = styled.div`
  border: 2px solid blue;
  border-radius: 10px;
  width: 50%;
`;

// 일몰, 일출 / 미세먼지 공간
export const AirAndSunInfoWrap = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  gap: 10px;
`;

export const SunInfoWrap = styled.div`
  border: 1px solid blue;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-width: 320px;
  height: 150px;
`;

export const AirInfoWrap = styled.div`
  border: 1px solid red;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-width: 320px;
  height: 150px;
`;

// 여기 변경됨
// ㅇㅇ
