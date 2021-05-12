import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TileTitle = styled.header`
  ${({ theme: { color, space } }) => css`
    position: absolute;
    top: 0;
    width: 100%;
    height: ${space.lg};
    padding-left: ${space.xs};
    z-index: 1;
    display: flex;
    align-items: center;

    font-weight: 500;
    background-color: ${color.dark};
    opacity: 0.9;
  `}
`;
