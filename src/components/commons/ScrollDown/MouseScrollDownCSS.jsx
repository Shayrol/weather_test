import styled from "@emotion/styled";

export default function ScrollDown() {
  return (
    <Wrap>
      <Mousey>
        <Scroll></Scroll>
      </Mousey>
    </Wrap>
  );
}

const Wrap = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 1200px;
  height: 2.5rem;
  display: flex;
  justify-content: center;
`;

const Mousey = styled.div`
  width: 2px;
  padding: 10px 13px;
  height: 2rem;
  border: 2px solid #cccccc;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
`;

const Scroll = styled.div`
  width: 3px;
  height: 7px;
  border-radius: 25%;
  background-color: #ffffff;
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
  animation-iteration-count: infinite;

  @keyframes scroll {
    0% {
      opacity: 0;
    }
    10% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(15px);
      opacity: 0;
    }
  }
`;
