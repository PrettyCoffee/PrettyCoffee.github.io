import React from 'react';

import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import {
  faGithubAlt,
  faOctopusDeploy,
  faYoutube,
  faGithub,
  faGitlab,
  faReddit,
  faXing,
  faSteam,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCoffee,
  faAddressCard,
  faHashtag,
} from '@fortawesome/free-solid-svg-icons';

import {
  Scrollspy,
  ScrollspyExtra,
  ScrollspyContent,
  Stalker,
  Card,
  CardGroup,
  Typer,
} from '../components';
import profile from '../ressources/logo.svg';

const Placeholder = styled.div<{ dark: boolean }>`
  ${({ theme: { color }, dark }) => css`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    background-color: ${dark ? color.dark : color.light};
  `}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 150px;
  box-sizing: border-box;

  ${({ theme }) => theme.breakpoints.mobile} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

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
  const { color } = useTheme();

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
                'realm',
                'fun generator',
              ]}
              timing={{ typeStrokes: 100, deleteStrokes: 50, waiting: 2000 }}
            />
          </TyperContainer>
        </Placeholder>
      </ScrollspyContent>
      <ScrollspyContent icon={faAddressCard} label={'about me'}>
        <Placeholder dark={false} />
      </ScrollspyContent>
      <ScrollspyContent icon={faGithubAlt} label={'projects'}>
        <Placeholder dark={true} />
      </ScrollspyContent>
      <ScrollspyContent icon={faCoffee} label={'ressources'}>
        <Placeholder dark={false} />
      </ScrollspyContent>
      <ScrollspyContent icon={faHashtag} label={'follow me'}>
        <Placeholder dark={true}>
          <CardGroup>
            <Card
              url={'https://www.xing.com/profile/Jonathan_Holz2'}
              icon={faXing}
              color={color.green}
            >
              Jonathan Holz
            </Card>
            <Card
              url={'https://github.com/PrettyCoffee'}
              icon={faGithub}
              color={color.dark}
            >
              PrettyCoffee
            </Card>
            <Card
              url={'https://gitlab.com/PrettyCoffee'}
              icon={faGitlab}
              color={color.purple}
            >
              PrettyCoffee
            </Card>
            <Card
              url={'https://www.youtube.com/channel/UCtQqZ6EhvprvC0H2tLN2EcA'}
              icon={faYoutube}
              color={color.red}
            >
              PrettyCoffee
            </Card>
            <Card
              url={'https://www.reddit.com/user/SpinatMixxer'}
              icon={faReddit}
              color={color.orange}
            >
              u/SpinatMixxer
            </Card>
            <Card
              url={'https://steamcommunity.com/id/PrettyCoffee/'}
              icon={faSteam}
              color={color.blue}
            >
              PrettyCoffee
            </Card>
          </CardGroup>
        </Placeholder>
      </ScrollspyContent>

      <ScrollspyExtra>
        <Button>Action</Button>
      </ScrollspyExtra>
    </Scrollspy>
  );
};
