import { useEffect, useState } from "react";
import { throttle } from "lodash";
import * as S from "@/styles/MyProfilePage.styles";
import Typing from "@/src/components/units/Typing - Effect/Typing";
import ScrollDown from "@/src/components/commons/ScrollDown/MouseScrollDownCSS";
import ScrollToTopButton from "@/src/components/commons/ScrollToTopButton/ScrollToTopButton";
import Head from "next/head";
import SkillsAndProjects from "@/src/components/units/Skills/Skills";
import Projects from "@/src/components/units/Projects-/Projects";
import About from "@/src/components/units/About/About";

export default function MainProfile() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = throttle(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollProgress(progress);
  }, 200); // 100ms마다 실행

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <S.Wrap>
        <S.Smooth>
          <S.Header>
            <div style={{ minWidth: "100px" }}></div>
            <S.HeaderUl>
              <S.HeaderLi>
                <S.HeaderA onClick={() => scrollToSection("home")}>
                  Home
                </S.HeaderA>
              </S.HeaderLi>
              <S.HeaderLi>
                <S.HeaderA onClick={() => scrollToSection("skill")}>
                  Skill
                </S.HeaderA>
              </S.HeaderLi>
              <S.HeaderLi>
                <S.HeaderA onClick={() => scrollToSection("project")}>
                  Project
                </S.HeaderA>
              </S.HeaderLi>
              <S.HeaderLi>
                <S.HeaderA onClick={() => scrollToSection("about")}>
                  About
                </S.HeaderA>
              </S.HeaderLi>
            </S.HeaderUl>
            <div style={{ minWidth: "100px" }}></div>
          </S.Header>
        </S.Smooth>

        <S.Section id="home">
          <Typing />
        </S.Section>
        <S.Section id="skill">
          <SkillsAndProjects />
        </S.Section>
        <S.Section id="project">
          <Projects />
        </S.Section>
        <S.Section id="about">
          <About />
        </S.Section>
        <S.ScrollWrap scrollProgress={scrollProgress}>
          <ScrollDown />
        </S.ScrollWrap>
        <S.ScrollToTopButtonWrap scrollProgress={scrollProgress}>
          <ScrollToTopButton scrollToSection={scrollToSection} />
        </S.ScrollToTopButtonWrap>
        <S.ProgressBarWrap>
          <S.ProgressBar scrollProgress={scrollProgress} />
        </S.ProgressBarWrap>
      </S.Wrap>
    </>
  );
}
