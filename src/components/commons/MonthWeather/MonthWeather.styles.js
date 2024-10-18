import styled from "@emotion/styled";

// 일주일 날씨 테두리 영역
export const Wrap = styled.div`
  max-width: 400px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 일주일 날씨 전체공간
export const WeathersWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 5px 10px;
`;

// 일주일 전체공간
export const TodaysWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  white-space: nowrap;
  padding-left: 20px;
`;

// 월, 화, 수, 목, 금, 토, 일
export const Todays = styled.div`
  display: flex;
  flex-direction: column;

  /* 토, 일요일 색상 구분 */
  color: ${(props) =>
    props.code === 6 ? "blue" : props.code === 7 ? "red" : "black"};
`;

// 강수확률, 구름 전체공간 - 3, 4일 전체 공간
export const Wrap34 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

// 강수확률, 구름 전체공간 - 3일
export const Wrap3 = styled.div`
  display: flex;
  width: 100%;
  height: 42.87%;
  justify-content: space-around;
  align-items: center;
`;

// 강수확률, 구름 전체공간 -  4일
export const Wrap4 = styled.div`
  display: flex;
  width: 100%;
  height: 57.16%;
  justify-content: space-around;
  align-items: center;
`;

// 공통 강수확률 공간 - 오전, 오후 포함
export const Humidity34 = styled.div`
  display: flex;
  height: 100%;
`;
// 공통 구름 공간 - 오전, 오후 포함
export const Cloud34 = styled.div`
  display: flex;
  height: 100%;
`;

// 공통 강수확률 공간 - 오전, 오후 포함
export const HumidityWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

// 공통 강수확률, 이미지 공간 - 오전, 오후 각각 개인 이미지
export const HumidityInfoWrap = styled.div`
  display: flex;
`;

// 공통 구름 이미지 공간
export const CloudsWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

// 공통 구름 이미지
export const Clouds = styled.img`
  width: 25px;
`;

// 공통 강수확률 텍스트
export const HumidityText = styled.p`
  font-size: 12px;
`;

// 공통 강수확률 이미지
export const HumidityImg = styled.img`
  width: 15px;
`;

// Loading..
export const Loading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;
