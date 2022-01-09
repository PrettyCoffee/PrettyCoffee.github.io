import { css, keyframes } from "@emotion/react"
import styled from "@emotion/styled"

const hoverAnimation = keyframes`
  from {
    padding: 5%;
  } to {
    padding: 5% 10%;
  }
  `

const Wrapper = styled.div<DirectionButtonProps>`
  ${({ theme: { space }, size = "medium" }) => {
    const width =
      size === "small" ? "3rem" : size === "medium" ? space.xl : space.xxl
    return css`
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: ${width};
      width: ${width};
      transition: 0.5s;
    `
  }}
`
const Seperator = styled.div`
  ${({ theme: { color } }) => css`
    background-color: ${color.dark};
    transform: rotate(45deg);
    opacity: 0.7;
    height: 25%;
    width: 25%;
  `}
`

const ArrowButton = styled.button`
  ${({ theme: { color } }) => css`
    position: absolute;
    box-sizing: content-box;
    height: 100%;
    width: 50%;
    padding: 5%;
    cursor: pointer;
    border: none;
    background-color: transparent;
    outline: none;
    ::before {
      content: "";
      display: block;
      height: 100%;
      width: 100%;
      background-color: ${color.dark};
    }
    :hover,
    :focus {
      animation: ${hoverAnimation} 400ms infinite ease-in-out alternate;
    }
  `}
`
const ArrowRight = styled(ArrowButton)`
  left: 50%;
  ::before {
    clip-path: polygon(0 0, 100% 50%, 0 100%, 0 75%, 50% 50%, 0 25%);
  }
`
const ArrowLeft = styled(ArrowButton)`
  right: 50%;
  ::before {
    clip-path: polygon(0 0, 100% 50%, 0 100%, 0 75%, 50% 50%, 0 25%);
    clip-path: polygon(100% 0, 0 50%, 100% 100%, 100% 75%, 50% 50%, 100% 25%);
  }
`

export type DirectionButtonProps = {
  onClick?: (direction: "left" | "right") => void
  hideLeft?: boolean
  hideRight?: boolean
  size?: "small" | "medium" | "large"
}

export const DirectionButton = ({
  onClick,
  hideLeft,
  hideRight,
  size,
}: DirectionButtonProps) => (
  <Wrapper size={size}>
    <Seperator />
    {!hideLeft && <ArrowLeft onClick={() => onClick?.("left")} />}
    {!hideRight && <ArrowRight onClick={() => onClick?.("right")} />}
  </Wrapper>
)
