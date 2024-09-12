import styled from "@emotion/styled";

export const Wrap = styled.div`
  border: 2px solid red;
  border-radius: 10px;
  width: 100%;
  /* min-width: 320px; */
  padding: 10px;
  display: flex;
`;

export const WeathersWrap = styled.div`
  border: 2px solid yellow;
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* height: 100%; */
`;

export const TodaysWrap = styled.div`
  border: 2px solid green;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const Todays = styled.div`
  /* border: 2px solid green; */
  display: flex;
  flex-direction: column;

  color: ${(props) =>
    props.code === 6 ? "blue" : props.code === 7 ? "red" : "black"};
`;

// 3,4일 전체 공간
export const Wrap34 = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;
export const Wrap3 = styled.div`
  border: 2px solid pink;
  display: flex;
  width: 100%;
  height: 42.87%;
  justify-content: space-around;
  align-items: center;
`;
export const Wrap4 = styled.div`
  border: 2px solid pink;
  display: flex;
  width: 100%;
  height: 57.16%;
  justify-content: space-around;
  align-items: center;
`;

// 4일 강수확률 공간
export const Humidity4 = styled.div`
  border: 2px solid blue;
  display: flex;
  height: 100%;
`;
// 4일 구름 공간
export const Cloud4 = styled.div`
  border: 2px solid blue;
  display: flex;
  height: 100%;
`;

// 공통 강수확률 공간 - 오전, 오후 포함
export const HumidityWrap = styled.div`
  border: 2px solid aqua;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
// 공통 강수확률, 이미지 공간 - 오전 또는 오후 하나만..
export const HumidityInfoWrap = styled.div`
  display: flex;
`;

// 공통 구름 이미지 공간
export const CloudsWrap = styled.div`
  border: 2px solid red;
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
