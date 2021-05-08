import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  faGithubAlt,
  faOctopusDeploy,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCoffee,
  faAddressCard,
  faHashtag,
} from '@fortawesome/free-solid-svg-icons';
import useMousePosition from '@react-hook/mouse-position';

import {
  Scrollspy,
  ScrollspyExtra,
  ScrollspyContent,
  Stalker,
} from '../components';
import profile from '../ressources/logo.svg';

const Placeholder = styled.div<{ dark: boolean }>`
  ${({ theme: { color }, dark }) => css`
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: ${dark ? color.dark : color.light};
  `}
  display: flex;
  justify-content: center;
`;

const Greeting = styled.div`
  ${({ theme: { color, space } }) => css`
    position: absolute;
    top: 450px;
    :before {
      content: 'Welcome';
      font-family: 'Pangolin';
      color: ${color.light};
      font-size: ${space.xl};
    }
  `}
`;

const StalkerContainer = styled.div`
  position: absolute;
  top: 200px;

  display: flex;
  justify-content: center;
`;

const Profile = styled.div`
  ${({ theme: { border, space } }) => css`
    width: 50px;
    height: 50px;
    padding: 5px;
    border: ${border.light.sm};
    > img {
      width: 100%;
      height: 100%;
      mix-blend-mode: normal;
    }
  `}
`;

const Button = styled.button`
  ${({ theme: { color, border, space } }) => css`
    cursor: pointer;
    color: ${color.light};
    background-color: transparent;
    border: ${border.light.sm};
    padding: 0 ${space.sm};
    height: ${space.lg};
    transition: 0.3s;
    :hover {
      color: ${color.dark};
      background-color: ${color.light};
    }
  `}
`;

export const Portfolio = () => {
  const mousePosition = useMousePosition(document.getElementById('root'));

  return (
    <Scrollspy>
      <ScrollspyExtra>
        <Profile>
          <img src={profile} alt={'avatar'} />
        </Profile>
      </ScrollspyExtra>

      <ScrollspyContent icon={faOctopusDeploy} label={'intro'}>
        <Placeholder dark={true}>
          <StalkerContainer>
            <Stalker
              lookAt={{ x: mousePosition.pageX, y: mousePosition.pageY }}
            />
          </StalkerContainer>
          <Greeting />
        </Placeholder>
      </ScrollspyContent>
      <ScrollspyContent icon={faAddressCard} label={'about me'}>
        <Placeholder dark={false} />
      </ScrollspyContent>
      <ScrollspyContent icon={faGithubAlt} label={'projects'}>
        <Placeholder dark={true} />
      </ScrollspyContent>
      <ScrollspyContent icon={faHashtag} label={'follow me'}>
        <Placeholder dark={false} />
      </ScrollspyContent>
      <ScrollspyContent icon={faCoffee} label={'ressources'}>
        <Placeholder dark={true} />
      </ScrollspyContent>

      <ScrollspyExtra>
        <Button>Action</Button>
      </ScrollspyExtra>
    </Scrollspy>
  );
};
