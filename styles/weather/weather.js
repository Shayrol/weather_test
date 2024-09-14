import styled from "@emotion/styled";

// 페이지 전체 공간
export const Wrap = styled.div`
  /* background-color: skyblue; */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 0 100px;
  // 눈누 - 학교안심 둥근미소 폰트
  font-family: "HakgyoansimDunggeunmisoTTF-B";

  background-color: ${({ isScrolled }) =>
    isScrolled ? "skyblue" : "transparent"};
  transition: background-color 0.3s ease;
`;

// 메뉴 탭 - (추가할지 고민중)
// export const MenuTapWrap = styled.div`
//   border: 1px solid red;
//   border-radius: 20px 20px 0;
//   width: 15%;
// `;

// 현재 페이지 - 날씨 정보 전체공간
export const WeatherDetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  padding: 30px;
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
  justify-content: space-around;
  width: 100%;
  max-width: 820px;
  min-width: 650px;
  gap: 10px;
  margin-top: 30px;
`;

// 현재, 시간별 날씨정보 전체공간 (습도, 강수확률 바람) + 시간별 날씨
export const CurrentWeatherWrap = styled.div`
  width: 50%;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// 현재 상세 날씨정보 전체공간 - 습도, 강수확률, 바람
export const WeatherInfoWrap = styled.div`
  display: flex;
  gap: 10px;
`;

// 현재 상세 날씨정보 - 습도, 강수확률, 바람 정보
export const WeatherInfo = styled.div`
  box-shadow: 0px 0px 5px #444;
  border-radius: 10px;
  width: 100%;
  height: 150px;
  display: flex;
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
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 820px;
  gap: 10px;
`;

// 일몰, 일출
export const SunInfoWrap = styled.div`
  box-shadow: 0px 0px 5px #444;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 150px;
`;

// 미세먼지
export const AirInfoWrap = styled.div`
  box-shadow: 0px 0px 5px #444;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 150px;
`;
