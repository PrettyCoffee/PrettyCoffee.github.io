import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TileContent = styled.p<{ large: boolean }>`
  ${({ theme: { space }, large }) => css`
    position: absolute;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: calc(${space.lg} + ${space.md}) ${space.md} ${space.md};
    display: flex;
    align-items: center;
    box-sizing: border-box;

    font-weight: 400;
    font-size: ${large ? space.md : space.sm};
  `}
`;
