import { useEffect, useRef } from "react";
import * as S from "./Projects.styles";

export default function Projects() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <S.Wrap>
      <S.Projects>
        <S.ProjectsTitles>Projects</S.ProjectsTitles>
        <S.DevWrap>
          <S.Project>
            <S.ProjectImage1 src="/images/Portfolio/Project_Image/weatherWeb.PNG" />
            <S.ProjectInfoWrap>
              <S.ProjectTagWrap>
                <S.React>React</S.React>
                <S.NextJS>Next.js</S.NextJS>
                <S.Emotion>Emotion</S.Emotion>
                <S.AWS>AWS</S.AWS>
              </S.ProjectTagWrap>
              <S.Ul>
                <S.Li>
                  공공데이터포털의 openAPI를 활용해 날씨웹을 제작했습니다.
                </S.Li>
                <S.Li>
                  AWS의 EC2을 통해 배포를 했으며 SSL 인증서를 적용하여 보안을
                  강화했습니다.
                </S.Li>
                <S.Li>
                  EC2와 S3를 활용하여 정적/동적 페이지 배포를 했고 CDN를 사용을
                  하여 성능 최적화를 했습니다.
                </S.Li>
                <S.Li>
                  github:{" "}
                  <S.Link
                    href="https://github.com/Shayrol/weather_test"
                    target="_blank"
                  >
                    날씨 웹
                  </S.Link>
                </S.Li>
                <S.Li>
                  링크:{" "}
                  <S.Link
                    href="https://chan-profile.shop/weather"
                    target="_blank"
                  >
                    날씨 웹
                  </S.Link>
                </S.Li>
              </S.Ul>
            </S.ProjectInfoWrap>
          </S.Project>

          <S.Project>
            {/* <S.ProjectImage2>이미지</S.ProjectImage2> */}
            <S.ProjectImage2 controls loop ref={videoRef}>
              <source src="/images/Portfolio/market.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </S.ProjectImage2>
            <S.ProjectInfoWrap>
              <S.ProjectTagWrap>
                <S.React>React</S.React>
                <S.NextJS>Next.js</S.NextJS>
                <S.TypeScript>Type Script</S.TypeScript>
                <S.Emotion>Emotion</S.Emotion>
                <S.ApolloClient>Apollo Client</S.ApolloClient>
                <S.GraphQL>GraphQL</S.GraphQL>
              </S.ProjectTagWrap>
              <S.Ul>
                <S.Li>게시판 작성 및 중고거래 페이지 제작을 했습니다.</S.Li>
                <S.Li>
                  게시판은 로그인 없이 게시글 등록 및 댓글을 작성할 수 있습니다.
                </S.Li>
                <S.Li>
                  중고거래 또한 게시판 처럼 작성할 수 있으나 로그인 인증을 통해
                  작성을 할 수 있으며, 대댓글을 통해 구매자에게 답글을 달 수
                  있습니다.
                </S.Li>
                <S.Li>
                  포트원을 통해 충전을 할 수 있으며, 충전된 포인트로 구매를 진행
                  할 수 있습니다.
                </S.Li>
                <S.Li>
                  또한 마이페이지를 통해 찜, 등록, 구매, 판매 상품을 볼 수
                  있으며, 충전내역, 비밀번호 변경까지 확인해 볼 수 있습니다.
                </S.Li>
                <S.Li>
                  github: <S.Link href="#">중고마켓</S.Link>
                </S.Li>
              </S.Ul>
            </S.ProjectInfoWrap>
          </S.Project>
        </S.DevWrap>
      </S.Projects>
    </S.Wrap>
  );
}
