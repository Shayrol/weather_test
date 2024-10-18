import styled from "@emotion/styled";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

// 일몰 일출 구분 선
export const SunWrapLine = styled.div`
  border: 0.5px solid #dbdbdb;
  height: 100px;
`;

// 일몰 & 일출 공간
export const SunTimeWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

// 일몰 & 일출 이미지
export const SunTimeImg = styled.img`
  height: 120px;
`;

// 일몰 & 일출 시간
export const SunTimeText = styled.span`
  position: absolute;
  font-size: 14px;
  font-weight: 700;
  bottom: 0px;
`;
