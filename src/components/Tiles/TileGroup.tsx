import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

type TileGroupProps = {
  children: React.ReactElement[];
  tileSize?: string;
  autoFill?: boolean;
};

const StyledTileGroup = styled.div<TileGroupProps>`
  ${({ theme: { space, breakpoints }, autoFill, tileSize = '10rem' }) => css`
    display: grid;
    grid-template-columns: repeat(6, ${tileSize});
    grid-auto-rows: ${tileSize};
    grid-auto-flow: ${autoFill ? 'dense' : 'row'};
    grid-gap: ${space.xs};

    filter: drop-shadow(0 20px 50px rgba(0, 0, 0, 0.5));

    ${breakpoints.laptop} {
      grid-template-columns: repeat(3, ${tileSize});
    }
    ${breakpoints.mobile} {
      grid-template-columns: repeat(2, ${tileSize});
    }
    ${breakpoints.small} {
      grid-template-columns: repeat(1, ${tileSize});
    }
  `}
`;

export const TileGroup = ({ ...props }: TileGroupProps) => {
  return <StyledTileGroup {...props} />;
};
