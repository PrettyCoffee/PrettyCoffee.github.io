import { css, useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import {
  faTerminal,
  faAddressCard,
  faHashtag,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons"

import {
  Scrollspy,
  ScrollspyExtra,
  ScrollspyContent,
  Section,
} from "../components"
import logo from "../data/media/logo.webp"
import { Intro } from "./Intro"
import { Playground } from "./Playground/Playground"
import { Profile } from "./Profile"
import { Projects } from "./Projects/Projects"
import { SocialMedia } from "./SocialMedia"

const Square = styled.div<{ num: number }>`
  ${({ num }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1.414rem;
    width: 2rem;
    ::before {
      content: "";
      display: block;
      box-sizing: border-box;
      position: relative;
      z-index: ${num};
      background-color: ${num !== 1 ? "white" : "black"};
      border: 2px solid white;
      height: 2rem;
      width: 2rem;
      transform: rotate(45deg);
    }
  `}
`

const Avatar = styled.div`
  ${({ theme: { border } }) => css`
    width: 50px;
    height: 50px;
    padding: 5px;
    border: ${border.light.sm};
    > img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      mix-blend-mode: normal;
    }
  `}
`

export const Portfolio = () => {
  const { color } = useTheme()

  return (
    <Scrollspy>
      <ScrollspyExtra>
        <Avatar>
          <img src={logo} alt={"avatar"} />
        </Avatar>
      </ScrollspyExtra>

      <ScrollspyContent icon={faTerminal} label={"intro"}>
        <Section bgcolor={color.dark}>
          <Intro />
        </Section>
      </ScrollspyContent>

      <ScrollspyContent icon={faAddressCard} label={"about me"}>
        <Section bgcolor={color.light}>
          <Profile />
        </Section>
      </ScrollspyContent>

      <ScrollspyContent icon={faGithubAlt} label={"projects"}>
        <Section bgcolor={color.dark}>
          <Projects />
        </Section>
      </ScrollspyContent>

      <ScrollspyContent icon={faPaintBrush} label={"playground"}>
        <Section bgcolor={color.light}>
          <Playground />
        </Section>
      </ScrollspyContent>

      <ScrollspyContent icon={faHashtag} label={"social"}>
        <Section bgcolor={color.dark}>
          <SocialMedia />
        </Section>
      </ScrollspyContent>

      <ScrollspyExtra>
        <Square num={0} />
        <Square num={1} />
        <Square num={0} />
      </ScrollspyExtra>
    </Scrollspy>
  )
}
