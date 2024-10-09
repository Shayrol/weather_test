import * as S from "./SunRiseAndSunSet.styles";

export default function SunriseSunsetTimes({ sunTime }) {
  const sunriseTime =
    String(sunTime?.sunrise).slice(0, 2) +
    ":" +
    String(sunTime?.sunrise).slice(2);

  const sunsetTime =
    String(sunTime?.sunset).slice(0, 2) +
    ":" +
    String(sunTime?.sunset).slice(2);

  return (
    <S.Wrap>
      <S.SunTimeWrap>
        <S.SunTimeImg src="/images/Sunrise-Sunset/sunrise.svg" />
        <S.SunTimeText>{sunTime ? sunriseTime : "Loading.."}</S.SunTimeText>
      </S.SunTimeWrap>
      <S.SunWrapLine />
      <S.SunTimeWrap>
        <S.SunTimeImg src="/images/Sunrise-Sunset/sunset.svg" />
        <S.SunTimeText>{sunTime ? sunsetTime : "Loading.."}</S.SunTimeText>
      </S.SunTimeWrap>
    </S.Wrap>
  );
}
