import styled from "@emotion/styled";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

// 일몰 일출 구분 선
export const PMWrapLine = styled.div`
  border: 0.5px solid #dbdbdb;
  height: 100px;
`;

// 일몰 & 일출 공간
export const PMWrap = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

// 일몰 & 일출 이미지
export const PMImg = styled.img`
  width: 45px;
  height: 45px;
  margin: 10px 0;
`;

// 일몰 & 일출 시간
export const PMTitle = styled.span`
  font-size: 12px;
  font-weight: 700;
`;

export const PMText = styled.span`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 3px;
`;
