import { css } from "@emotion/react"
import styled from "@emotion/styled"

const Animations = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template: repeat(3, 8rem) / repeat(2, 8rem);
  > * {
    align-self: center;
    justify-self: center;
  }
`

const Square = styled.div`
  ${({ theme: { color } }) => css`
    position: relative;
    width: 3rem;
    height: 3rem;
    transform: rotate(-45deg);

    ::after,
    ::before {
      position: absolute;
      content: "";
      display: block;
      border-radius: 0.5rem;
      width: 1rem;
      height: 1rem;
      box-shadow: -0.2rem 0.2rem 0.4rem ${color.grey},
        0.1rem -0.1rem 0.2rem white, -0.2rem 0.2rem 0.3rem white inset,
        0.15rem -0.15rem 0.2rem ${color.grey} inset;
      animation: squareLoad 1.5s linear infinite;
    }
    ::before {
      animation-delay: -750ms;
    }

    @keyframes squareLoad {
      0% {
        width: 1rem;
        height: 1rem;
        margin: 0 0 0 0;
      }
      12% {
        width: 3rem;
        height: 1rem;
        margin: 0 0 0 0;
      }
      25% {
        width: 1rem;
        height: 1rem;
        margin: 0 0 0 2rem;
      }
      37% {
        width: 1rem;
        height: 3rem;
        margin: 0 0 0 2rem;
      }
      50% {
        width: 1rem;
        height: 1rem;
        margin: 2rem 0 0 2rem;
      }
      62% {
        width: 3rem;
        height: 1rem;
        margin: 2rem 0 0 0;
      }
      75% {
        width: 1rem;
        height: 1rem;
        margin: 2rem 0 0 0;
      }
      87% {
        width: 1rem;
        height: 3rem;
        margin: 0 0 0 0;
      }
    }
  `}
`
const FillingSquare = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  transform: rotate(-45deg);
  display: flex;
  justify-content: center;
  align-items: center;
`
const SquareFill = styled.div`
  ${({ theme: { color } }) => css`
    position: absolute;
    content: "";
    display: block;
    border-radius: 0.3rem;
    box-shadow: -0.2rem 0.2rem 0.4rem ${color.grey}, 0.1rem -0.1rem 0.2rem white,
      -0.2rem 0.2rem 0.3rem white inset,
      0.15rem -0.15rem 0.2rem ${color.grey} inset;
    animation: squareFillLoad 2s linear infinite;

    :nth-of-type(2) {
      animation-delay: 0.5s;
    }
    :nth-of-type(3) {
      animation-delay: 1.5s;
    }
    :nth-of-type(4) {
      animation-delay: 1s;
    }

    @keyframes squareFillLoad {
      0% {
        width: 0rem;
        height: 0rem;
        box-shadow: -0.2rem 0.2rem 0.4rem ${color.grey},
          0.1rem -0.1rem 0.2rem white, -0.2rem 0.2rem 0.3rem white inset,
          0.15rem -0.15rem 0.2rem ${color.grey} inset;
      }
      50% {
        width: 2rem;
        height: 2rem;
        box-shadow: 0 0.2rem 0.4rem ${color.grey}, 0 -0.1rem 0.2rem white,
          0 0.2rem 0.3rem white inset, 0 -0.15rem 0.2rem ${color.grey} inset;
      }
      100% {
        width: 4rem;
        height: 4rem;
        box-shadow: none;
      }
    }
  `}
`

const Waves = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wave = styled.div`
  ${({ theme: { color } }) => css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: 1s;

    ::before {
      content: '';
      border-radius: 50%;
      animation: inner 2s ease-in-out infinite, innerSize 2s ease-in-out infinite;
    }

    animation: outer 2s ease-in-out infinite, outerSize 2s ease-in-out infinite;
    :nth-of-type(2),
    :nth-of-type(2)::before {
      animation-delay: 600ms;
    }
    :nth-of-type(3),
    :nth-of-type(3)::before {
      animation-delay: 1200ms;
    }
    }

    @keyframes outer {
      0% {
        box-shadow: 1em 1em 0.5em ${color.grey}, -0.1em -0.1em 0.1em white,
          0.1em 0.1em 0.2em white inset,
          -0.2em -0.2em 0.2em ${color.grey} inset;
      }
      40% {
        box-shadow: 0.3em 0.3em 0.3em ${color.grey},
          -0.2em -0.2em 0.2em white, 0.1em 0.1em 0.2em white inset,
          -0.1em -0.1em 0.2em ${color.grey} inset;
      }
      70% {
        box-shadow: 0.4em 0.4em 0.4em ${color.grey},
          -0.4em -0.4em 0.4em white, 0.1em 0.1em 0.2em white inset,
          -0.1em -0.1em 0.2em ${color.grey} inset;
      }
      90%,
      100% {
        box-shadow: 0 0 0 ${color.grey}, 0 0 0 white,
          0 0 0 white inset, 0 0 0 ${color.grey} inset;
      }
    }
    @keyframes inner {
      0%,
      40% {
        box-shadow: 0.1em 0.1em 0.2em white,
          -0.1em -0.1em 0.2em ${color.grey}, 0.1em 0.1em 0.2em ${color.grey} inset,
          -0.1em -0.1em 0.2em white inset;
      }
      70% {
        box-shadow: 0.2em 0.2em 0.4em white,
          -0.2em -0.2em 0.4em ${color.grey}, 0.1em 0.1em 0.2em ${color.grey} inset,
          -0.1em -0.1em 0.2em white inset;
      }
      90%,
      100% {
        box-shadow: 0 0 0 ${color.grey}, 0 0 0 white,
          0 0 0 white inset, 0 0 0 ${color.grey} inset;
      }
    }
    @keyframes innerSize {
      15% {
        width: 0rem;
        height: 0rem;
      }
      100% {
        width: 5rem;
        height: 5rem;
      }
    }
    @keyframes outerSize {
      0% {
        width: 0rem;
        height: 0rem;
      }
      100% {
        width: 5rem;
        height: 5rem;
      }
    }
  `}
`

const Balls = styled.div`
  position: relative;
  display: grid;
  height: 3rem;
  grid-template-columns: repeat(4, 2rem);
  align-items: flex-end;
  > * {
    justify-self: center;
  }
`
const LoadingBar = styled.div`
  ${({ theme: { color } }) => css`
    border-radius: 0.5rem;

    width: 1rem;
    height: 2.5rem;
    box-shadow: 0.2rem 0.2rem 0.4rem ${color.grey}, -0.1rem -0.1rem 0.2rem white,
      0.2rem 0.2rem 0.3rem white inset,
      -0.15rem -0.15rem 0.2rem ${color.grey} inset;
    animation: barsLoad 1.5s ease-in-out infinite alternate-reverse;

    :nth-of-type(2) {
      animation-delay: 200ms;
    }
    :nth-of-type(3) {
      animation-delay: 400ms;
    }
    :nth-of-type(4) {
      animation-delay: 600ms;
    }

    @keyframes barsLoad {
      0%,
      20% {
        height: 1rem;
        margin-bottom: 1.5rem;
      }
      50% {
        height: 2.5rem;
        margin-bottom: 0rem;
        margin-top: 0rem;
      }
      80%,
      100% {
        height: 1rem;
        margin-top: 1.5rem;
      }
    }
  `}
`

const BouncingBall = styled.div`
  ${({ theme: { color } }) => css`
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    box-shadow: 0.2rem 0.2rem 0.4rem ${color.grey}, -0.1rem -0.1rem 0.2rem white,
      0.2rem 0.2rem 0.3rem white inset,
      -0.15rem -0.15rem 0.2rem ${color.grey} inset;
    animation: bounceLoad 0.75s ease-in-out infinite alternate;

    :nth-of-type(1) {
      animation-delay: -600ms;
    }
    :nth-of-type(2) {
      animation-delay: -400ms;
    }
    :nth-of-type(3) {
      animation-delay: -200ms;
    }

    @keyframes bounceLoad {
      0% {
        height: 0.9rem;
        width: 1.2rem;
      }
      20% {
        width: 1rem;
        height: 1rem;
        box-shadow: 0.2rem 0.2rem 0.4rem ${color.grey},
          -0.1rem -0.1rem 0.2rem white, 0.2rem 0.2rem 0.3rem white inset,
          -0.15rem -0.15rem 0.2rem ${color.grey} inset;
      }
      100% {
        box-shadow: 0.2rem 2.2rem 0.4rem ${color.grey},
          -0.1rem -0.1rem 0.2rem white, 0.2rem 0.2rem 0.3rem white inset,
          -0.15rem -0.15rem 0.2rem ${color.grey} inset;
        transform: translate(0px, -2rem);
      }
    }
  `}
`

const SpinningBalls = styled.div`
  ${({ theme: { color } }) => {
    const easing = "cubic-bezier(0.65, -0.45, 0.35, 1.45)"
    return css`
      position: relative;
      display: flex;
      align-items: center;
      width: 3rem;
      height: 3rem;
      animation: squareSpin 1s ${easing} infinite;

      ::before,
      ::after {
        content: "";
        position: absolute;
        z-index: 1;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        box-shadow: 0.2rem 0.2rem 0.4rem ${color.grey},
          -0.1rem -0.1rem 0.2rem white, 0.2rem 0.2rem 0.3rem white inset,
          -0.15rem -0.15rem 0.2rem ${color.grey} inset;
        animation: ballSpin 1s ${easing} infinite;
      }

      ::after {
        left: 0;
        top: 0;
      }
      ::before {
        right: 0;
        bottom: 0;
      }

      @keyframes squareSpin {
        from {
          transform: rotate(-45deg);
        }
        to {
          transform: rotate(315deg);
        }
      }

      @keyframes ballSpin {
        from {
          transform: rotate(45deg);
        }
        to {
          transform: rotate(-315deg);
        }
      }
    `
  }}
`

export const ShadowPlay = () => {
  return (
    <Animations>
      <Balls>
        <BouncingBall />
        <BouncingBall />
        <BouncingBall />
        <BouncingBall />
      </Balls>
      <Balls>
        <LoadingBar />
        <LoadingBar />
        <LoadingBar />
        <LoadingBar />
      </Balls>
      <Waves>
        <Wave />
        <Wave />
        <Wave />
      </Waves>
      <FillingSquare>
        <SquareFill />
        <SquareFill />
        <SquareFill />
        <SquareFill />
      </FillingSquare>
      <SpinningBalls />
      <Square />
    </Animations>
  )
}
