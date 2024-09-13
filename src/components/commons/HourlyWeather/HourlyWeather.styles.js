import styled from "@emotion/styled";

// 각 시간대 날씨 정보 테두리
export const HourlyWeatherWrap = styled.div`
  box-shadow: 0px 0px 5px #444;
  border-radius: 10px;
  width: 100%;
  height: 150px;
  display: flex;

  /* 가로스크롤 */
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  ::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none; /* IE 및 Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

// 각 시간대 전체공간 - 날짜, 시간, 이미지, 기온, 강수확률
export const HourlyWeatherInfo = styled.div`
  flex: 0 0 auto;
  width: 120px;
  height: 150px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 날씨, 시간 전체공간
export const HourWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 날씨 날짜
export const DateInfo = styled.p`
  font-size: 8px;
`;

// 날씨 시간
export const HourInfo = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-top: 3px;
`;

// 하늘 상태 이미지
export const CloudImg = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 5px;
`;

// 기온
export const Temperature = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

// 강수확률 전체공간
export const PrecipitationProbabilityWrap = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
`;

// 강수확률 텍스트
export const PrecipitationProbability = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

// 강수확률 이미지
export const PrecipitationProbabilityImg = styled.img`
  width: 14px;
  height: 14px;
`;
