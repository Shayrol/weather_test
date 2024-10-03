import styled from "@emotion/styled";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 59px;
  min-height: 70vh;
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1200px;
  padding: 20px;
`;

export const ProjectsTitles = styled.p`
  font-size: 22px;
  width: 70%;
  margin-bottom: 20px;
`;

export const DevWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 10px;
  width: 100%;
  min-height: 50vh;
`;

export const Project = styled.div`
  box-shadow: 0px 8px 15px -8px #000;
  border: 1px solid #fff;
  border-radius: 10px;
  background-color: #fff;
  color: #000;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 35rem;
  height: 40rem;
  transition: transform 0.2s;

  :hover {
    transform: scale(1.01);
  }
`;

export const ProjectImage1 = styled.img`
  width: 100%;
  height: 50%;
`;

export const ProjectImage2 = styled.video`
  width: 100%;
  height: 50%;
`;

export const ProjectInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px 15px 15px 25px;
  height: 100%;
`;

export const Li = styled.li`
  font-size: 18px;
`;

export const ProjectTagWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  padding: 4px 10px;
  margin-top: 10px;
`;

export const Link = styled.a`
  color: blue;
`;

export const React = styled.div`
  color: #87ceeb;
`;
export const NextJS = styled.div`
  color: #000000;
`;
export const TypeScript = styled.div`
  color: #3178c6;
`;
export const Emotion = styled.div`
  color: #c76494;
`;
export const ApolloClient = styled.div`
  color: #5e43cb;
`;
export const GraphQL = styled.div`
  color: #e535ab;
`;
export const AWS = styled.div`
  color: #ff9900;
`;
