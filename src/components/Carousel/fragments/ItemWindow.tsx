import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const Decorator = styled.div`
  position: absolute;
  height: 1rem;
  left: 0;
  right: 0;
  opacity: 0.7;
`

const TopDecorator = styled(Decorator)`
  ${({ theme: { color } }) => css`
    top: 0;
    box-shadow: 0 0.2rem 0 ${color.dark} inset, 0.2rem 0 0 ${color.dark} inset,
      -0.2rem 0 0 ${color.dark} inset;
  `}
`
const BottomDecorator = styled(Decorator)`
  ${({ theme: { color } }) => css`
    display: flex;
    justify-content: center;
    bottom: 0;
    box-shadow: 0 -0.2rem 0 ${color.dark} inset, 0.2rem 0 0 ${color.dark} inset,
      -0.2rem 0 0 ${color.dark} inset;

    ::before {
      content: "";
      position: absolute;
      bottom: -0.4rem;
      width: 5rem;
      height: 1rem;
      background-color: ${color.dark};
      clip-path: polygon(
        0 50%,
        0.5rem 0,
        calc(100% - 0.5rem) 0,
        100% 50%,
        calc(100% - 0.5rem) 100%,
        0.5rem 100%
      );
    }
  `}
`

export const ItemWindow = ({ children }: React.PropsWithChildren<unknown>) => (
  <>
    <TopDecorator />
    <Wrapper>{children}</Wrapper>
    <BottomDecorator />
  </>
)
