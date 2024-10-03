import styled from "@emotion/styled";

export const Wrap = styled.div`
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 59px;
  min-height: 70vh;
`;

export const SkillsTitles = styled.p`
  font-size: 22px;
  width: 70%;
  margin-bottom: 20px;
`;

export const SkillTitle = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Skills = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1200px;
  /* min-height: calc(100vh - 55px); */
  padding: 20px;
`;

export const DevWrap = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  /* justify-content: space-around; */
  /* align-items: start; */
  /* margin-right: 6rem; */
  gap: 20px;
  padding: 10px;
  width: 100%;
  min-height: 50vh;
  /* min-height: 70vh; */
`;

export const DevInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DevImgWrap = styled.div`
  border: 2px solid #fff;
  /* box-shadow: 0px 0px 5px #fff; */
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 한 행에 2개의 이미지 배치 */
  gap: 10px;
  justify-items: center;
  padding: 10px;
  width: 17rem;
`;

export const DevImg = styled.img`
  width: 100px;

  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }
`;

// 이미지 클릭 시 모달 - 기술 설명 추가하기
