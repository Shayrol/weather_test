import * as S from "./index.styles";

export default function Footer() {
  return (
    <S.Wrap>
      <S.FooterWrap>
        <S.LinkWrap>
          <S.Link
            href={"https://github.com/Shayrol/weather_test"}
            target="_blank"
          >
            <S.LinkImg src="/images/github.png" />
          </S.Link>
        </S.LinkWrap>

        <S.OpenAPI>
          <S.TitleAPI>활용한 Open API</S.TitleAPI>
          <S.API>초단기예보, 단기예보, 중기예보, 출몰시각정보</S.API>
          <S.API>오픈스트리트 맵, 에어코리아 대기오염정보</S.API>
        </S.OpenAPI>

        <S.FooterInfoWrap>
          <S.FooterInfo>컨택: rus47@naver.com</S.FooterInfo>
          <S.FooterInfo>
            Copyright 2024 ⓒ Your Name or Company. All rights reserved.
          </S.FooterInfo>
        </S.FooterInfoWrap>
      </S.FooterWrap>
    </S.Wrap>
  );
}
