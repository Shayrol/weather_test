import * as S from "./About.styles";

export default function About() {
  return (
    <S.Wrap>
      <S.AboutInfo>
        <S.AboutTitles>About</S.AboutTitles>
        <S.AboutWrap>
          <S.MyProfileWrap>
            <S.MyProfileImg src="/images/location.png" />
            <S.MyProfileInfoWrap>
              <p style={{ color: "#0040ff", margin: "5px 0" }}>개인 프로필</p>
              <S.InfoWrap>
                <S.InfoIcon src="/images/Portfolio/My_Info_Icon/user.png" />
                <p style={{ color: "#000000" }}>전찬호</p>
              </S.InfoWrap>
              <S.InfoWrap>
                <S.InfoIcon src="/images/Portfolio/My_Info_Icon/age.png" />
                <p style={{ color: "#000000" }}>1998년 03월 12일</p>
              </S.InfoWrap>
              <S.InfoWrap>
                <S.InfoIcon src="/images/Portfolio/My_Info_Icon/address.png" />
                <p style={{ color: "#000000" }}>인천광역시 계양구 작전동</p>
              </S.InfoWrap>
              <S.InfoWrap>
                <S.InfoIcon src="/images/Portfolio/My_Info_Icon/email.png" />
                <p style={{ color: "#000000" }}>rus47@naver.com</p>
              </S.InfoWrap>
              <S.InfoWrap>
                <S.InfoIcon src="/images/Portfolio/My_Info_Icon/github.png" />
                <S.Github
                  href="https://github.com/Shayrol"
                  style={{ color: "#000000" }}
                >
                  https://github.com/Shayrol
                </S.Github>
              </S.InfoWrap>
            </S.MyProfileInfoWrap>
          </S.MyProfileWrap>
          <S.MyIntroDuctionWrap>
            <p
              style={{
                color: "#0040ff",
                fontSize: "2rem",
                margin: "5px 0 20px 0",
              }}
            >
              자기소개
            </p>
            <S.P>
              안녕하세요!
              <br />
              저는 사용자 경험을 최우선으로 생각하는 <br />
              프론트엔드 개발자 지망생 전찬호 입니다. <br />
              꼼꼼한 성격으로 세부적인 부분에 신경을 쓰며, <br />
              사용자가 다양한 상황에서도 편리하게 이용할 수 있는 <br />웹 환경을
              만드는 데 집중하고 있습니다. <br />
              끊임없이 배우고 성장하며 실제 경험을 통해 <br />더 나은 서비스를
              제공하는 것을 목표로 하고 있습니다.
            </S.P>
          </S.MyIntroDuctionWrap>
        </S.AboutWrap>
      </S.AboutInfo>
    </S.Wrap>
  );
}
