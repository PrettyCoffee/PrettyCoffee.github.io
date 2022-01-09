import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { DirectionButton } from "../DirectionButton"
import { ItemWindow } from "./fragments/ItemWindow"
import { getComponents } from "./utils/getComponents"

const Wrapper = styled.div<{ headline?: string }>`
  ${({ theme: { color }, headline }) => css`
    position: relative;
    width: 100%;
    max-width: 800px;
    height: 500px;
    display: flex;
    justify-content: center;
    ::before {
      content: "${headline}";
      position: absolute;
      top: -2.5rem;
      left: 0;
      color: ${color.dark};
      font-weight: 400;
      font-size: 1.5rem;
    }
  `}
`

const CarouselButton = styled.div`
  ${({ theme: { breakpoints } }) => css`
    position: absolute;
    bottom: 50%;
    height: 0;
    display: flex;
    align-items: center;
    transition: 0.5s;
    ${breakpoints.mobile} {
      bottom: -3rem;
    }
  `}
`

const RightButton = styled(CarouselButton)`
  ${({ theme: { breakpoints } }) => css`
    right: -2rem;
    ${breakpoints.mobile} {
      right: 20%;
    }
  `}
`
const LeftButton = styled(CarouselButton)`
  ${({ theme: { breakpoints } }) => css`
    left: -2rem;

    ${breakpoints.mobile} {
      left: 20%;
    }
  `}
`

const ItemHider = styled.div<{ hide?: "left" | "right" }>`
  ${({ hide }) => css`
    transition: 0.5s;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    ${
      hide === "left" &&
      css`
        transform: translateX(-100%);
      `
    }
    ${
      hide === "right" &&
      css`
        transform: translateX(100%);
      `
    }}
  `}
`

export type CarouselProps = {
  children: React.ReactElement[]
}

export const Carousel = ({ children }: CarouselProps) => {
  const [current, setCurrent] = React.useState(0)
  const items = getComponents(children)

  const handleChange = (direction: "left" | "right") => {
    if (direction === "left") setCurrent(current - 1)
    else setCurrent(current + 1)
  }

  return (
    <Wrapper headline={items[current].headline}>
      <LeftButton>
        <DirectionButton
          onClick={handleChange}
          hideLeft={current === 0}
          hideRight
        />
      </LeftButton>
      <ItemWindow>
        {items.map((item, index) => (
          <ItemHider
            key={index}
            aria-hidden={index !== current}
            hide={
              index < current ? "left" : index > current ? "right" : undefined
            }
          >
            {item.content}
          </ItemHider>
        ))}
      </ItemWindow>
      <RightButton>
        <DirectionButton
          onClick={handleChange}
          hideLeft
          hideRight={current >= items.length - 1}
        />
      </RightButton>
    </Wrapper>
  )
}
