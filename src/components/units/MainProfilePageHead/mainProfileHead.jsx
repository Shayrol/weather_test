import * as S from "./mainProfileHead.styles";

export default function PortfolioHeader() {
  return (
    // <S.Header>
    //   <S.HeaderInfo>
    //     <S.Title>My Portfolio</S.Title>
    //     {/* 섹션 페이지 이동 */}
    //     <S.NavWrap>
    //       <S.NavButton>Home</S.NavButton>
    //       <S.NavButton>About</S.NavButton>
    //       <S.NavButton>Weather</S.NavButton>
    //     </S.NavWrap>
    //     {/* 링크 이동 */}
    //     <S.RouteWrap>
    //       <S.RouteButton
    //         href="https://chan-profile.shop/weahter"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Weather Page
    //       </S.RouteButton>
    //       <S.RouteButton
    //         href="https://github.com/Shayrol"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         github
    //       </S.RouteButton>
    //     </S.RouteWrap>
    //   </S.HeaderInfo>
    // </S.Header>
    <div>
      <div>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Price</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
