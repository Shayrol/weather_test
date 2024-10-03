import styled from "@emotion/styled";

export const Wrap = styled.div``;

export const Header = styled.header`
  border: 1px solid red;
  width: 100%;
  padding: 10px 20px;
  position: fixed;
  justify-content: space-between;
  top: 0;
  left: 0;
  z-index: 100;

  transition: background-color 0.3s ease;
  white-space: nowrap;

  /* background-color: ${({ isScrolled }) =>
    isScrolled ? "#cccccc" : "transparent"};
  color: ${({ isScrolled }) => (isScrolled ? "#000" : "#cccccc")}; */
`;

export const HeaderInfo = styled.div`
  /* border: 3px solid red; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  /* border: 1px solid red; */
  min-width: 20%;
`;

export const NavWrap = styled.ul`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 20px;
  min-width: 60%;
`;

export const NavButton = styled.li`
  cursor: pointer;
  /* color: ${({ currentSection, sectionIndex }) =>
    currentSection === sectionIndex ? "#ff7272" : ""}; */
  transition: 0.2s;

  :hover {
    color: #fff;
  }

  /* :nth-child(1):hover {
    color: #fff;
  }

  :nth-child(2):hover {
    color: #fff;
  }

  :nth-child(3):hover {
    color: #fff;
  } */
`;

export const RouteWrap = styled.div`
  /* border: 1px solid red; */
  min-width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const RouteButton = styled.a`
  cursor: pointer;
  :nth-child(1):hover {
    color: #fff;
  }

  :nth-child(2):hover {
    color: #fff;
  }
  /* border: 1px solid red; */
`;
