import { css } from "@emotion/react"
import styled from "@emotion/styled"

import computer from "../data/media/computer.svg"
import smartphone from "../data/media/smartphone.svg"
import tablet from "../data/media/tablet.svg"

const StyledAnimation = styled.div`
  ${({ theme: { breakpoints } }) => css`
    display: grid;
    grid-gap: 40px;
    grid-template-columns: auto auto auto;
    align-items: flex-end;
    margin-bottom: 50px;

    @keyframes jump {
      15% {
        transform: translateY(-50px);
      }
      30%,
      100% {
        transform: translateY(0px);
      }
    }

    ${breakpoints.tablet} {
      position: relative;
      display: block;
      height: 250px;
      > img {
        position: absolute;
      }
      @keyframes jump {
        15% {
          transform: translateY(-20px);
        }
        30%,
        100% {
          transform: translateY(0px);
        }
      }
    }
  `}
`

const Device = styled.img`
  ${({ theme: { animation, shadow } }) => css`
    animation: jump 3s ${animation.bouncy} infinite;
    filter: drop-shadow(${shadow.small});
  `}
`

const Computer = styled(Device)`
  ${({ theme: { breakpoints } }) => css`
    width: 500px;

    ${breakpoints.tablet} {
      left: -300px;
      bottom: 10px;
    }
    ${breakpoints.mobile} {
      width: 333px;
      left: -200px;
      bottom: 10px;
    }
    ${breakpoints.small} {
      left: -166px;
    }
  `}
`

const Tablet = styled(Device)`
  ${({ theme: { breakpoints } }) => css`
    width: 150px;
    animation-delay: 0.5s;
    ${breakpoints.tablet} {
      left: 100px;
      bottom: 0;
    }
    ${breakpoints.mobile} {
      width: 100px;
      left: 70px;
      bottom: 0;
    }
    ${breakpoints.small} {
      left: 0px;
    }
  `}
`

const Smartphone = styled(Device)`
  ${({ theme: { breakpoints } }) => css`
    width: 70px;
    animation-delay: 1s;

    ${breakpoints.tablet} {
      left: 220px;
      bottom: -10px;
    }
    ${breakpoints.mobile} {
      width: 46px;
      left: 150px;
      bottom: -10px;
    }
    ${breakpoints.small} {
      left: 70px;
    }
  `}
`

export const Animation = () => {
  return (
    <StyledAnimation>
      <Computer src={computer} />
      <Tablet src={tablet} />
      <Smartphone src={smartphone} />
    </StyledAnimation>
  )
}
