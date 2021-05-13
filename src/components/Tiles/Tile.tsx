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
    theme: { color, space, animation },
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
      > p {
        transform: scaley(0);
      }
    }

    > img {
      position: absolute;
      bottom: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    ::before,
    ::after {
      content: '';
      position: absolute;
      height: 150%;
      width: 100%;
      background-color: ${color.dark};
    }
    ::before {
      bottom: 0;
      opacity: 0.6;
    }
    ::after {
      top: 100%;
      opacity: 0.4;
    }

    *,
    ::before,
    ::after {
      transition: 0.6s ${animation.bouncy};
    }

    :hover {
      > article > p {
        transform: scaley(1);
      }
      > article,
      ::after {
        top: 0;
      }
      > img {
        transform: scaley(0);
      }
      > img,
      ::before {
        bottom: 100%;
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
