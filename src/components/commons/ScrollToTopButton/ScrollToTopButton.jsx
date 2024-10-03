import styled from "@emotion/styled";

export default function ScrollToTopButton({ scrollToSection }) {
  // const ScrollTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <ArrowImg onClick={() => scrollToSection("home")}>
      <Text>TOP</Text>
    </ArrowImg>
  );
}

const ArrowImg = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  background-image: url("/images/Portfolio/ScrollToTopButton/up-arrows-black.png");
  background-size: cover;
  cursor: pointer;

  :hover {
    background-image: url("/images/Portfolio/ScrollToTopButton/up-arrows-white.png");
    background-size: cover;
  }
`;

const Text = styled.p`
  position: absolute;
  bottom: -25px;
  left: 20%;
`;
