import styled from "@emotion/styled";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* margin-top: 50px; */
  min-height: 70vh;
`;

export const AboutInfo = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  min-width: 1200px;
  min-height: 40rem;
  margin-top: 59px;
  padding: 20px;
`;

export const AboutWrap = styled.div`
  /* border: 1px solid; */
  box-shadow: 0px 8px 15px -8px #000;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const AboutTitles = styled.p`
  font-size: 22px;
  width: 70%;
  margin-bottom: 20px;
`;

export const MyProfileWrap = styled.div`
  border-right: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
`;

export const MyProfileImg = styled.img`
  width: 20rem;
  /* border: 1px solid red; */
`;

export const MyProfileInfoWrap = styled.div`
  /* border-bottom: 1px solid #dbdbdb; */
  padding-left: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const InfoWrap = styled.div`
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InfoIcon = styled.img`
  width: 2rem;
  margin-right: 10px;
`;

export const MyIntroDuctionWrap = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  padding: 10px 20px;
`;

export const P = styled.p`
  font-size: 1.5rem;
  color: #000000;
  line-height: 3rem;
`;

export const Github = styled.a`
  color: #000000;

  :hover {
    text-decoration: underline;
  }
`;
