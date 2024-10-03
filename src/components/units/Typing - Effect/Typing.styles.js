import styled from "@emotion/styled";

export const MainInfoWrap = styled.div`
  /* border: 3px solid rebeccapurple; */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 100vh;
  min-height: 42rem;
  gap: 100px;
`;

export const TextWrap = styled.div`
  /* border: 1px solid red; */
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 100px;
  /* top: 8rem;
  left: 10rem; */
  /* font-size: 3rem; */

  /* transform: translateY(-90%); */
`;

export const Text = styled.p`
  font-size: 3.5rem;
  color: #dfdfdf;

  :last-child {
    margin-left: 80px;
  }
`;

export const TypingWrap = styled.div`
  position: absolute;
  top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TypingText = styled.p`
  height: 3.5rem;
  display: flex;
  align-items: center;
  transition: 0.1s;
  font-size: 4rem;
  margin: 30px 5px 30px 40px;
`;

export const Blink = styled.div`
  animation: blink 1s step-end infinite;
  font-size: 3.5rem;
  font-weight: 400;
  font-family: none;
  color: #dbdbdb;
  height: 3.5rem;
  line-height: 2.5rem;

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

export const MyInfoWrap = styled.div`
  /* border: 3px solid red; */
  border: 2px solid #000;
  border-radius: 10px;
  background-image: url("/images/Portfolio/paper.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25rem;
  width: 35rem;
  padding: 30px;
  gap: 20px;
  transition: 0.2s;

  transform: translateX(-120px);

  /* :hover {
    transform: scale(1.01);
  } */
`;

export const InfoText = styled.p`
  font-size: 1.3rem;
`;

export const Name = styled.span`
  color: #0064ff;
`;

// 서브 타이틀 공간
export const NotesWrap = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

// 서브 타이틀
export const NoteTitle = styled.p`
  color: #eeeeee;
  font-size: 1.5rem;
`;

// 네임
export const NoteName = styled.p`
  color: #eeeeee;
`;
