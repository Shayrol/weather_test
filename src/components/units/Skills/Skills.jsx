import { useState } from "react";
import * as S from "./Skills.styles";
import Modal from "../../commons/layout/DevModal/devModal";

export default function SkillsAndProjects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
    color: "",
  });

  const openModal = (title, description, color) => {
    setModalContent({ title, description, color });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.Wrap>
      <S.Skills>
        <S.SkillsTitles>Skill</S.SkillsTitles>
        <S.DevWrap>
          <S.DevInfoWrap>
            {/* Frontend */}
            <S.SkillTitle>Frontend</S.SkillTitle>
            <S.DevImgWrap>
              <S.DevImg
                src="/images/Portfolio/Develope_Icon/HTML.svg"
                // onClick={() => openModal("HTML", "", "#F06529")}
              />
              <S.DevImg
                src="/images/Portfolio/Develope_Icon/CSS.svg"
                // onClick={() =>
                //   openModal(
                //     "CSS",
                //     "CSS is a style sheet language...",
                //     "#2965F1"
                //   )
                // }
              />
              <S.DevImg
                src="/images/Portfolio/Develope_Icon/JavaScript.svg"
                onClick={() =>
                  openModal(
                    "JavaScript",
                    "JavaScrip의 이벤트 루프에 대한 이해와 비동기 처리 메커니즘에 대해 알고 있습니다.",
                    "#F0DB4F"
                  )
                }
              />
              <S.DevImg
                src="/images/Portfolio/Develope_Icon/TypeScript.svg"
                onClick={() =>
                  openModal(
                    "TypeScript",
                    `TypeScript의 함수 및 변수와 Props의 타입 정의에 사용을 해 안전성을 높이는데 중요시 했으며 any 타입이 아닌 제네릭 사용으로 다양한 타입에 대한 안정성을 위해 사용해본 경험이 있습니다.`,
                    "#3178C6"
                  )
                }
              />
              <S.DevImg
                src="/images/Portfolio/Develope_Icon/React.svg"
                onClick={() =>
                  openModal(
                    "React",
                    "React를 사용을 하면서 Hooks 사용에 익숙하며 상태관리로 효율적으로 관리할 수 있습니다.",
                    "#87CEEB"
                  )
                }
              />
              <S.DevImg
                src="/images/Portfolio/Develope_Icon/NextJS.svg"
                onClick={() =>
                  openModal(
                    "Next.js",
                    "Next.js를 통해 CSR, SSR, SSG의 렌더링 방식 및 동작(프리렌더링, 하이드레이션 등)을 이해하고 있습니다. ",
                    "#000000"
                  )
                }
              />
            </S.DevImgWrap>
          </S.DevInfoWrap>

          <S.DevInfoWrap>
            {/* Backend */}
            <S.SkillTitle>Library</S.SkillTitle>
            <S.DevImgWrap>
              <S.DevImg
                src="/images/Portfolio/Develope_Icon/Apollo.svg"
                onClick={() =>
                  openModal(
                    "ApolloClient",
                    "ApolloClient를 통해 요청과 수정 작업을 처리했으며 네트워크 요청을 최소화 하기 위해 캐싱 기능 활용한 성능 최적화 경험이 있습니다.",
                    "#5e43cb"
                  )
                }
              />
              <S.DevImg
                src="/images/Portfolio/Develope_Icon/GraphQL.svg"
                onClick={() =>
                  openModal(
                    "GraphQL",
                    "GraphQL를 통해 API와의 상호작용 경험이 있습니다.",
                    "#E535AB"
                  )
                }
              />
              <S.DevImg
                src="/images/Portfolio/Develope_Icon/Emotion.svg"
                onClick={() =>
                  openModal("Emotion", "Emotion 사용에 익숙합니다.", "#C76494")
                }
              />
              <S.DevImg
                src="/images/Portfolio/Develope_Icon/Recoil.png"
                style={{ borderRadius: "20px", height: "6.2rem" }}
                onClick={() =>
                  openModal(
                    "Recoil",
                    "Recoil을 통한 상태관리를 했습니다.",
                    "#007af4"
                  )
                }
              />
            </S.DevImgWrap>
          </S.DevInfoWrap>

          <S.DevInfoWrap>
            {/* Tools & Collaboration */}
            <S.SkillTitle>Tools & Collaboration</S.SkillTitle>
            <S.DevImgWrap>
              <S.DevImg
                src="/images/Portfolio/Develope_Icon/Git.svg"
                // onClick={() =>
                // openModal(
                //   "Git",
                //   "",
                //   "#f34f29"
                // )
                // }
              />
              <S.DevImg
                src="/images/Portfolio/Develope_Icon/Github.svg"
                // onClick={() =>
                //   openModal(
                //     "Github",
                //     "",
                //     "#2b3137"
                //   )
                // }
              />
              <S.DevImg
                src="/images/Portfolio/Develope_Icon/VSCode.svg"
                // onClick={() =>
                //   openModal(
                //     "VSCode",
                //     "Emotion is a CSS-in-JS library...",
                //     "#0078d7"
                //   )
                // }
              />
            </S.DevImgWrap>
          </S.DevInfoWrap>

          <S.DevInfoWrap>
            {/* Deployment */}
            <S.SkillTitle>Deployment</S.SkillTitle>
            <S.DevImgWrap>
              <S.DevImg
                src="/images/Portfolio/Develope_Icon/Docker.svg"
                onClick={() =>
                  openModal(
                    "Docker",
                    "Docker를 활용하여 가상환경을 구성하고 일관된 개발 환경을 구현해 본적이 있습니다.",
                    "#1d63ed"
                  )
                }
              />
              <S.DevImg
                src="/images/Portfolio/Develope_Icon/AWS.svg"
                onClick={() =>
                  openModal(
                    "AWS",
                    "S3를 사용해 정적 콘텐츠를 배포하고, EC2 인스턴스를 통해 동적 콘텐츠를 처리했으며, CloudFront CDN을 통해 SSL 인증서를 적용하여 보안성을 강화한 경험이 있습니다.",
                    "#FF9900"
                  )
                }
              />
            </S.DevImgWrap>
          </S.DevInfoWrap>
        </S.DevWrap>
      </S.Skills>

      {isModalOpen && (
        <Modal
          onClose={closeModal}
          title={modalContent.title}
          description={modalContent.description}
          color={modalContent.color}
        />
      )}
    </S.Wrap>
  );
}
