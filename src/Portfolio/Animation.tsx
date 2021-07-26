import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import computer from '../data/media/computer.svg';
import smartphone from '../data/media/smartphone.svg';
import tablet from '../data/media/tablet.svg';

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

    ${breakpoints.mobile} {
      position: relative;
      display: block;
      height: 200px;
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
`;

const Computer = styled.img`
  ${({ theme: { animation, breakpoints } }) => css`
    width: 500px;
    animation: jump 3s ${animation.bouncy} infinite;
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.8));

    ${breakpoints.tablet} {
      width: 333px;
    }
    @media only screen and (max-width: 850px) {
      left: -200px;
      bottom: 10px;
    }
    @media only screen and (max-width: 450px) {
      left: -166px;
    }
  `}
`;

const Tablet = styled.img`
  ${({ theme: { animation, breakpoints } }) => css`
    width: 150px;
    animation: jump 3s ${animation.bouncy} infinite;
    animation-delay: 0.5s;
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.8));
    ${breakpoints.tablet} {
      width: 100px;
    }
    @media only screen and (max-width: 850px) {
      left: 70px;
      bottom: 0;
    }
    @media only screen and (max-width: 450px) {
      left: 0px;
    }
  `}
`;

const Smartphone = styled.img`
  ${({ theme: { animation, breakpoints } }) => css`
    width: 70px;
    animation: jump 3s ${animation.bouncy} infinite;
    animation-delay: 1s;
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.8));

    ${breakpoints.tablet} {
      width: 46px;
    }
    @media only screen and (max-width: 850px) {
      left: 150px;
      bottom: -10px;
    }
    @media only screen and (max-width: 450px) {
      left: 70px;
    }
  `}
`;

export const Animation = () => {
  return (
    <StyledAnimation>
      <Computer src={computer} />
      <Tablet src={tablet} />
      <Smartphone src={smartphone} />
    </StyledAnimation>
  );
};
