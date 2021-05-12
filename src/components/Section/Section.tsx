import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Reveal from 'react-reveal/Reveal';

const StyledSection = styled.section<{ bgcolor?: string }>`
  ${({ theme: { color, breakpoints }, bgcolor = color.dark }) => css`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    background-color: ${bgcolor};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 150px;
    box-sizing: border-box;

    ${breakpoints.mobile} {
      padding-left: 20px;
      padding-right: 20px;
    }

    > .fadeIn {
      animation-name: fadeIn;

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translate3d(0, 20%, 0);
        }
        to {
          opacity: 1;
          transform: translateZ(0);
        }
      }
    }
  `}
`;

type SectionProps = {
  bgcolor?: string;
};

export const Section = ({
  children,
  ...props
}: React.PropsWithChildren<SectionProps>) => {
  return (
    <StyledSection {...props}>
      <Reveal effect={'fadeIn'}>{children}</Reveal>
    </StyledSection>
  );
};
