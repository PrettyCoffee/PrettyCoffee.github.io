import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"

const StyledSection = styled.section<{ bgcolor?: string }>`
  ${({ theme: { color, breakpoints }, bgcolor = color.dark }) => css`
    min-height: 100vh;
    position: relative;
    background-color: ${bgcolor};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 150px;
    box-sizing: border-box;

    ${breakpoints.mobile} {
      padding-left: 20px;
      padding-right: 20px;
    }
  `}
`

type SectionProps = {
  bgcolor?: string
}

export const Section = ({
  children,
  ...props
}: React.PropsWithChildren<SectionProps>) => {
  return <StyledSection {...props}>{children}</StyledSection>
}
