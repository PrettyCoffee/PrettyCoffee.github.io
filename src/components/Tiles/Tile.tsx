import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { TileContent } from './fragments/TileContent';
import { TileTitle } from './fragments/TileTitle';

type StyledTileProps = {
  href: string;
  bgcolor?: string;
  columns?: number;
  rows?: number;
};

export const StyledTile = styled.a<StyledTileProps>`
  ${({
    theme: { color, space },
    columns = 1,
    rows = 1,
    bgcolor = color.dark,
  }) => css`
    position: relative;
    grid-column: span ${columns};
    grid-row: span ${rows};
    position: relative;
    overflow: hidden;

    background-color: ${bgcolor};

    > article {
      position: relative;
      height: 100%;
      width: 100%;
      top: calc(100% - ${space.lg});
      z-index: 1;
    }

    > img {
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    ::before,
    ::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: ${color.dark};
    }
    ::before {
      top: 0;
      opacity: 0.6;
    }
    ::after {
      top: 100%;
      opacity: 0.4;
    }

    *,
    ::before,
    ::after {
      transition: 0.3s;
    }

    :hover {
      > article,
      ::after {
        top: 0;
      }
      > img,
      ::before {
        top: -100%;
      }
    }
  `}
`;

type TileProps = StyledTileProps & {
  title: string;
  content?: string;
  image: string;
};

export const Tile = ({ title, content, ...props }: TileProps) => (
  <StyledTile {...props}>
    <article>
      <TileTitle>{title}</TileTitle>
      <TileContent large={!!props.columns || !!props.rows}>
        {content}
      </TileContent>
    </article>
    <img src={props.image} alt={''} />
  </StyledTile>
);
