import styled from "@emotion/styled";

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  background-color: #363636;
  /* color: #000; */
  color: #fff;
`;

export const ProgressBarWrap = styled.div`
  background-color: #5b5b5b;
  border-radius: 10px;
  position: fixed; /* 부모 요소는 fixed 유지 */
  display: flex;
  /* justify-content: center; */
  width: 100%;
  height: 4px;
  bottom: 0;
  /* right: 5rem; */
`;

export const ProgressBar = styled.div`
  border-radius: 10px;
  position: absolute;
  bottom: 0;
  height: 4px;
  background-color: #007bff;
  transition: width 0.3s;
  width: ${(props) => `${props.scrollProgress}%`};
`;

export const ScrollWrap = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  bottom: 70px;
  width: 100%;
  /* left: 50%; */

  transition:
    opacity 0.5s ease,
    transform 0.5s ease;

  transform: translateY(
    ${(props) => (props.scrollProgress > 5 ? "-30px" : "0")}
  );
  opacity: ${(props) => (props.scrollProgress > 0 ? "0" : "1")};
`;

export const ScrollToTopButtonWrap = styled.div`
  position: fixed;
  bottom: 70px;
  right: 10%;

  transition:
    opacity 0.5s ease,
    transform 0.5s ease; // 애니메이션 추가

  transform: translateY(
    ${(props) => (props.scrollProgress < 5 ? "30px" : "0")}
  ); // 스크롤 상태에 따라 위치 조정
  opacity: ${(props) =>
    props.scrollProgress < 5 ? "0" : "1"}; // 스크롤 상태에 따라 투명도 조정
`;

export const StyledSection = styled.section`
  border: 2px solid red;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 55px);
  padding-top: 55px;

  :first-child {
    background-color: #363636;
  }
  :nth-child(2) {
    background-color: #ffcccc;
  }
  :nth-child(3) {
    background-color: purple;
  }
`;

//

//
//

export const Smooth = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
`;

export const Header = styled.div`
  /* border: 3px solid blue; */
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  width: 100%;
  min-height: 59px;
  font-size: 1rem;
  background: linear-gradient(
    180deg,
    #1d1e22,
    rgba(29, 30, 34, 0.5),
    transparent
  );
  /* mix-blend-mode: luminosity; */
`;

export const HeaderUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 25px;
`;

export const HeaderLi = styled.li`
  /* border: 1px solid red; */
`;

export const HeaderA = styled.span`
  /* border: 1px solid red; */
  padding: 5px;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 590;
  color: #f4f4f4;

  :after {
    position: absolute;
    bottom: -3px;
    left: 0;
    content: "";
    width: 0;
    height: 3px;
    transition: all 0.2s linear;
  }

  :hover::after {
    width: 100%;
    background-color: #f4f4f4;
  }
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 100%;
  /* min-height: calc(100vh - 55px); */
  flex-flow: column wrap;
  scroll-snap-align: center;

  /* :nth-child(4) {
    background-image: url("/images/apple.png");
    background-size: cover;
  } */
`;

export const H2 = styled.h2`
  text-transform: uppercase;
  font-size: 3.25rem;
  font-weight: 900;
  padding: 0.5rem 1em;
  background-color: #fff;
  mix-blend-mode: screen;
  border-radius: 0.25rem;
  pointer-events: none;
  user-select: none;
`;
