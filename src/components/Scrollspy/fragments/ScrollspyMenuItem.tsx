import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getTheme } from '../../Theme/getTheme';

const WIDTH = '8rem';
const { color, space, animation, breakpoints } = getTheme();

const StyledMenuItem = styled.button<{ active: boolean }>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: ${WIDTH};
  height: calc(${space.md} * 2);
  cursor: pointer;
  border: none;
  border-radius: 0;
  outline: none;
  overflow-y: hidden;

  background-color: transparent;
  color: inherit;
  font-size: ${space.sm};
  white-space: nowrap;

  > svg,
  > span {
    position: absolute;
    transition: 0.7s ${animation.bouncy};
  }
  > svg {
    top: calc(50% - ${space.sm});
    font-size: calc(${space.sm} * 1.2);
  }

  > span {
    top: -50%;
  }

  :hover,
  :focus,
  :active {
    > svg {
      top: 150%;
    }

    > span {
      top: calc(50% - ${space.sm});
    }
  }
  ${({ active }) =>
    active &&
    css`
      > svg {
        top: 150%;
      }

      > span {
        top: calc(50% - ${space.sm});
      }
    `}

  ${breakpoints.mobile} {
    width: calc(${space.md} * 2);
    > span {
      display: none;
    }

    > svg {
      transition: 0.3s ${animation.bouncy};
    }

    :focus,
    :active {
      > svg {
        top: calc(50% - ${space.sm});
      }
    }
    :hover {
      > svg {
        color: ${color.red};
        top: 0;
      }
    }
    ${({ active }) =>
      active &&
      css`
        > svg {
          color: ${color.blue};
          top: 0;
        }
        :focus,
        :active {
          > svg {
            color: ${color.blue};
            top: 0;
          }
        }
      `}
  }
`;

type ScrollspyMenuItemProps = {
  icon: IconDefinition;
  label: string;
  active: boolean;
  onClick: () => void;
};

export const ScrollspyMenuItem = ({
  icon,
  label,
  ...props
}: ScrollspyMenuItemProps) => (
  <StyledMenuItem {...props}>
    <FontAwesomeIcon icon={icon} />
    <span>{label}</span>
  </StyledMenuItem>
);
