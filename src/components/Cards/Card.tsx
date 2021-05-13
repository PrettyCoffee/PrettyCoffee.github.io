import React from 'react';

import styled from '@emotion/styled';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardWrapper = styled.a<{ color: string }>`
  position: relative;
  width: 14.14rem;
  height: 10rem;
  background-color: ${({ color }) => color};
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  float: left;
  margin: 20px;
  overflow: hidden;

  ::before,
  ::after {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    z-index: 1;

    background-color: black;
    transition: 0.6s ${({ theme }) => theme.animation.bouncy};
  }
  ::before {
    top: 0;
    bottom: 0;
    opacity: 0.6;
  }

  ::after {
    top: 10rem;
    bottom: 0;
    opacity: 0.4;
  }
  [datatype='text'] {
    transform: scaleY(0);
  }

  :hover,
  :active,
  :focus {
    outline: none;
    ::before {
      bottom: 10rem;
    }
    ::after {
      top: 0;
    }
    [datatype='icon'] {
      transform: scaleY(0);
      bottom: 10rem;
      top: -10rem;
      /*
      height: ${({ theme }) => theme.space.xl};
      width: ${({ theme }) => theme.space.xl};
      font-size: ${({ theme }) => theme.space.md};
      */
    }
    [datatype='text'] {
      top: 0;
      transform: scaleY(1);
    }
  }
`;

const CardContent = styled.div`
  color: ${({ theme }) => theme.color.light};
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.6s ${({ theme }) => theme.animation.bouncy};
`;

const CardLabel = styled(CardContent)`
  top: 10rem;
  font-weight: 500;
  font-size: ${({ theme }) => theme.space.md};
`;

const CardIcon = styled(CardContent)`
  top: 0;
  right: 0;
  font-size: ${({ theme }) => theme.space.xl};
`;

type CardProps = {
  url: string;
  icon: IconDefinition;
  color: string;
};

export const Card = ({
  url,
  children,
  icon,
  color,
}: React.PropsWithChildren<CardProps>) => {
  return (
    <CardWrapper href={url} target={'_blank'} color={color}>
      <CardIcon datatype={'icon'}>
        <FontAwesomeIcon icon={icon} />
      </CardIcon>
      <CardLabel datatype={'text'}>{children}</CardLabel>
    </CardWrapper>
  );
};
