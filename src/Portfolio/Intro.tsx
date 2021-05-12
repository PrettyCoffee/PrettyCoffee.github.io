import React from 'react';

import styled from '@emotion/styled';

import { Stalker, Typer } from '../components';

const StalkerContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
`;
const TyperContainer = styled.div`
  width: 500px;
  font-size: ${({ theme }) => theme.space.xl};
  ${({ theme }) => theme.breakpoints.mobile} {
    width: 250px;
    font-size: ${({ theme }) => theme.space.lg};
  }
`;

export const Intro = () => (
  <>
    <StalkerContainer>
      <Stalker />
    </StalkerContainer>
    <TyperContainer>
      <Typer
        text={`Welcome to my \n`}
        textCarousel={[
          'portfolio',
          'passion',
          'hobby',
          'project',
          'playground',
        ]}
        timing={{ typeStrokes: 100, deleteStrokes: 50, waiting: 2000 }}
      />
    </TyperContainer>
  </>
);
