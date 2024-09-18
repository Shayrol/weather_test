import * as S from "./index.styles";

export default function Footer() {
  return (
    <S.Wrap>
      <S.FooterWrap>
        <S.FooterInfoWrap>
          <S.FooterInfoMessage>
            합리적인 분들과 좋은 컨텐츠가 지속될 수 있는 선순환 시스템을
            지향합니다
          </S.FooterInfoMessage>
          <S.FooterInfo>컨택: rus47@naver.com</S.FooterInfo>
          <S.FooterInfo>
            Copyright 2024 ⓒ Your Name or Company. All rights reserved.
          </S.FooterInfo>
        </S.FooterInfoWrap>
        <S.OpenAPI>
          <S.TitleAPI>활용한 Open API</S.TitleAPI>
          <S.API>
            초단기예보, 단기예보, 중기예보, 출몰시각정보, 오픈스트리트 맵,
            에어코리아 대기오염정보
          </S.API>
        </S.OpenAPI>
        <S.Link>
          <a href={"https://github.com/Shayrol/weather_test"} target="_blank">
            <S.LinkImg src="/images/github.png" />
          </a>
        </S.Link>
      </S.FooterWrap>
    </S.Wrap>
  );
}
