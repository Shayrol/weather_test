import styled from "@emotion/styled";

export const Wrap = styled.footer`
  border-top: 1px solid #dbdbdb;
  min-height: 170px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const FooterWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

export const FooterInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterInfoMessage = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: #545e6f;
  margin-bottom: 0.3rem;
`;

export const FooterInfo = styled.p`
  font-size: 12px;
  color: #545e6f;
`;

export const OpenAPI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleAPI = styled.p`
  font-size: 14px;
  padding-bottom: 5px;
  color: #545e6f;
  margin-bottom: 0.3rem;
`;

export const API = styled.p`
  font-size: 12px;
  color: #545e6f;
`;

export const LinkWrap = styled.div``;

export const Link = styled.a``;

export const LinkImg = styled.img`
  width: 30px;
  height: 30px;
`;

// 줄바꿈
export const Br = styled.span`
  display: inline;

  @media (max-width: 400px) {
    display: block;
  }
`;
