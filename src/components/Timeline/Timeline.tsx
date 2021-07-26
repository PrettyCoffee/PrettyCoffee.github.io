import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

const bubbleSize = 70;

const Bubble = styled.div<TimelineProps>`
  ${({ theme: { color: themeColors, shadow }, color, year }) => css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -100px;
    top: 0;
    height: ${bubbleSize}px;
    width: ${bubbleSize}px;
    border-radius: ${bubbleSize / 2}px;
    background-color: ${color};
    box-shadow: ${shadow.small};
    ::before {
      content: '${year}';
      color: ${themeColors.dark};
      font-weight: 600;
    }
  `}
`;
const Line = styled.div<Pick<TimelineProps, 'color'>>`
  ${({ theme: { shadow }, color }) => css`
    position: absolute;
    top: ${bubbleSize}px;
    right: -${102 - bubbleSize / 2}px;
    height: calc(100% - ${bubbleSize}px);
    background-color: ${color};
    width: 4px;
    box-shadow: ${shadow.small};
  `}
`;
const StyledTimeline = styled.div`
  ${({ theme: { space } }) => css`
    position: relative;
    margin-bottom: ${space.md};
    padding-top: ${bubbleSize / 2}px;
  `}
`;

type TimelineProps = {
  year: number;
  color: string;
};
export const Timeline = ({
  year,
  color,
  children,
}: React.PropsWithChildren<TimelineProps>) => (
  <StyledTimeline>
    <Bubble color={color} year={year} />
    <Line color={color} />
    {children}
  </StyledTimeline>
);
