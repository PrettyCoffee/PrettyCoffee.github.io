import styled from "@emotion/styled"

import { Typer } from "../components"
import { Animation } from "./Animation"

const TyperContainer = styled.div`
  width: 500px;
  font-size: ${({ theme }) => theme.space.xl};
  ${({ theme }) => theme.breakpoints.small} {
    width: auto;
    font-size: 2.5rem;
    margin: 0 auto;
  }
  margin: 0 auto;
`

export const Intro = () => (
  <>
    <Animation />
    <TyperContainer>
      <Typer
        text={`Welcome to my \n`}
        textCarousel={[
          "portfolio",
          "passion",
          "hobby",
          "project",
          "playground",
        ]}
        timing={{ typeStrokes: 100, deleteStrokes: 50, waiting: 2000 }}
      />
    </TyperContainer>
  </>
)
