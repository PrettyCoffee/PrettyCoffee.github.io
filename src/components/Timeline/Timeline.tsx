import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"

const bubbleSize = 70

const Wrapper = styled.div`
  ${({ theme: { shadow } }) => css`
    position: absolute;
    right: -100px;
    top: 0;
    height: 100%;
    width: ${bubbleSize}px;
    filter: drop-shadow(${shadow.small});
  `}
`
const Bubble = styled.div<TimelineProps>`
  ${({ theme: { color: themeColors, space, breakpoints }, color, year }) => css`
    position: sticky;
    top: ${space.xs};
    height: ${bubbleSize}px;
    width: ${bubbleSize}px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background-color: ${color};
    ::before {
      content: "${year}";
      color: ${themeColors.dark};
      font-weight: 600;
    }

    ${breakpoints.mobile} {
      top: 5rem;
    }
  `}
`
const Line = styled.div<Pick<TimelineProps, "color">>`
  ${({ color }) => css`
    margin: 0 auto;
    height: calc(100% - ${bubbleSize}px);
    background-color: ${color};
    width: 4px;
  `}
`
const StyledTimeline = styled.div`
  ${({ theme: { space } }) => css`
    position: relative;
    margin-bottom: ${space.md};
    padding-top: ${bubbleSize / 2}px;
  `}
`

type TimelineProps = {
  year: number
  color: string
}
export const Timeline = ({
  year,
  color,
  children,
}: React.PropsWithChildren<TimelineProps>) => (
  <StyledTimeline>
    <Wrapper>
      <Bubble color={color} year={year} />
      <Line color={color} />
    </Wrapper>
    {children}
  </StyledTimeline>
)
