import styled from "@emotion/styled";

export const HourlyWeatherWrap = styled.div`
  border: 2px solid blue;
  /* background-color: gray; */
  border-radius: 10px;
  width: 100%;
  height: 150px;
  display: flex;
  /* gap: 10px; */

  /* 가로스크롤 */
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  /* scroll-behavior: smooth; */

  ::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none; /* IE 및 Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

// 날씨 표시
export const HourlyWeatherInfo = styled.div`
  /* border: 1px solid blue; */
  /* border-radius: 15px; */
  flex: 0 0 auto;
  width: 120px;
  height: 150px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 날씨 시간 공간
export const HourWrap = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// 날씨 날짜
export const DateInfo = styled.p`
  font-size: 8px;
  /* font-weight: 600; */
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

// 강수확률
export const PrecipitationProbabilityWrap = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
`;

export const PrecipitationProbability = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

export const PrecipitationProbabilityImg = styled.img`
  width: 14px;
  height: 14px;
`;

export const ImgSGV = styled.img`
  width: 50px;
  height: 50px;
`;
