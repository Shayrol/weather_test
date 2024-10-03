// // // input에 관한 Typing 효과는
// // // 메모 / 스타일 / 타이핑 효과 / 글자 타이핑 효과 - 입력, 지우기.txt 참고

import { useEffect, useState } from "react";
import * as S from "./Typing.styles";

export default function Typing() {
  const textData = [
    { text: "HTML", color: "#F06529" },
    { text: "CSS", color: "#2965F1" },
    { text: "JavaScript", color: "#F0DB4F" },
    { text: "React", color: "#87CEEB" },
    { text: "Next.js", color: "#dfdfdf" },
    { text: "TypeScript", color: "#3178C6" },
    { text: "ApolloClient", color: "#5e43cb" },
    { text: "GraphQL", color: "#E535AB" },
    { text: "AWS", color: "#FF9900" },
    { text: "Emotion", color: "#C76494" },
    { text: "Docker", color: "#1d63ed" },
  ];

  let idx = 0;
  let isTyping = true;
  let textIdx = 0;
  const speed = 250;

  const [bgColor, setBgColor] = useState(textData[0].color);

  const textEffect = () => {
    const textElement = document.querySelector("#text");

    let { text, color } = textData[textIdx];
    if (!textElement) return; // 요소가 없을 경우 함수 종료

    if (isTyping) {
      if (idx < text.length) {
        textElement.innerHTML += text[idx];
        idx++;
        setBgColor(color); // 자식 요소에 대한 배경색 변경
      } else {
        isTyping = false;
      }
    } else {
      if (idx > 0) {
        textElement.innerHTML = text.slice(0, idx - 1);
        idx--;
      } else {
        isTyping = true;
        textIdx = (textIdx + 1) % textData.length;
      }
    }

    setTimeout(textEffect, speed);
  };

  useEffect(() => {
    textEffect();
  }, []);

  return (
    // <S.Wrap>
    <S.MainInfoWrap>
      <S.TextWrap>
        <S.Text>저는</S.Text>
        <S.TypingWrap>
          <S.TypingText
            style={{
              color: bgColor,
            }}
            id="text"
          ></S.TypingText>
          <S.Blink>|</S.Blink>
        </S.TypingWrap>

        <S.Text>할수 있습니다!</S.Text>
      </S.TextWrap>
      <S.NotesWrap>
        <S.NoteTitle>프론트 앤드 개발자 포트폴리오</S.NoteTitle>
        <S.NoteName>-전찬호-</S.NoteName>
      </S.NotesWrap>
      {/* <S.MyInfoWrap>
        <S.InfoText>
          안녕하세요! 저는 사용자 경험을 최우선으로 생각하는
        </S.InfoText>

        <S.InfoText>
          프론트엔드 개발자 지망생 <S.Name>전찬호</S.Name> 입니다.
        </S.InfoText>
        <S.InfoText>꼼꼼한 성격으로 세부적인 부분에 신경을 쓰며,</S.InfoText>
        <S.InfoText>
          사용자가 다양한 상황에서도 편리하게 이용할 수 있는
        </S.InfoText>
        <S.InfoText>웹 환경을 만드는 데 집중하고 있습니다.</S.InfoText>
        <S.InfoText>끊임없이 배우고 성장하며</S.InfoText>
        <S.InfoText>실제 경험을 통해 더 나은 서비스를 제공하는 것을</S.InfoText>
        <S.InfoText>목표로 하고 있습니다.</S.InfoText>
      </S.MyInfoWrap> */}
    </S.MainInfoWrap>
    // </S.Wrap>
  );
}

// 타이핑 빼고 메인으로 옮기기
