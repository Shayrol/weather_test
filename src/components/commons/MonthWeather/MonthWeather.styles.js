import styled from "@emotion/styled";

export const Wrap = styled.div`
  /* border: 1px solid blue; */
  border-radius: 10px;
  display: flex;
  padding: 10px;
  width: 100%;
  height: 310px;
`;
export const WeatherWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 100%;
  /* justify-content: space-between; */
`;

// 요일
export const SortedDayWrap = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`;
export const SortedDay = styled.p`
  border: 1px solid red;
  font-size: 14px;
  font-weight: 600;
`;

// 일주일 강수확률, 구름 이미지 전체 공간
export const WeatherDaysWrap = styled.div`
  /* border: 1px solid red; */
  width: 100%;
`;

// 3일, 남은 4일 강수확률, 강수확률, 구름 이미지 공간
export const WeatherDayWrap = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-around;
  width: 100%;
  margin-bottom: 20px;
`;

// 4, 5, 6, 7일 강수확률 이미지
export const Weather4567DayWrap = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

//
//
//
//
//

// WeatherCloudData styled - 구름 이미지 FC
export const WeatherCloud3DayDataWrap = styled.div`
  border: 1px solid red;
  width: 25px;
  height: 25px;
  /* margin-right: 20px; */
`;

// 함수 WeatherData styled - 강수확률 FC
export const Weather3DayDataWrap = styled.div`
  border: 1px solid blue;
  display: flex;
  /* align-items: center; */
`;
// 강수확률 이미지 - 물방울 FC
export const Weather3DayDataImg = styled.img`
  /* border: 1px solid red; */
  width: 15px;
`;
// 강수확률 텍스트 FC
export const Weather3DayDataText = styled.p`
  /* border: 1px solid red; */
  font-size: 12px;
`;

//
//
//

// //////////////////////////////////////////////////////////////////////////////
// 4, 5, 6, 7일 함수내 스타일

// 강수확률 오전/오후 전체 공간 🎈🎈
export const HumidityWrap = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
// 강수확률 이미지, 텍스트 공간
export const HumidityInfoWrap = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  /* justify-content: space-around; */
  width: 100%;
`;
// 강수확률 텍스트
export const HumidityInfoText = styled.p`
  font-size: 12px;
`;
export const HumidityInfoImg = styled.img`
  width: 15px;
`;

// 구름 오전, 오후 전체 공간
export const CloudWrap = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: row;
`;
// 구름 오전 공간
export const CloudAMWrap = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
