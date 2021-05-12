import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TileContent = styled.p<{ large: boolean }>`
  ${({ theme: { color, space }, large }) => css`
    position: absolute;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: ${space.md};
    display: flex;
    align-items: center;
    box-sizing: border-box;

    font-weight: 400;
    font-size: ${large ? space.md : space.sm};

    ::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-color: ${color.dark};
      mix-blend-mode: color;
    }
  `}
`;
