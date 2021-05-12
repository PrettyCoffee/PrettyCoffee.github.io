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
  Tile,
  TileGroup,
  Section,
} from '../components';
import logo from '../data/media/logo.svg';
import { ressources } from '../data/ressources';

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
    :hover,
    :active,
    :focus {
      color: ${color.dark};
      background-color: ${color.light};
      outline: none;
    }
  `}
`;

export const Portfolio = () => {
  const { color } = useTheme();

  return (
    <Scrollspy>
      <ScrollspyExtra>
        <Profile>
          <img src={logo} alt={'avatar'} />
        </Profile>
      </ScrollspyExtra>

      <ScrollspyContent icon={faOctopusDeploy} label={'intro'}>
        <Section bgcolor={color.dark}>
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
        </Section>
      </ScrollspyContent>

      <ScrollspyContent icon={faAddressCard} label={'about me'}>
        <Section bgcolor={color.light}></Section>
      </ScrollspyContent>

      <ScrollspyContent icon={faGithubAlt} label={'projects'}>
        <Section bgcolor={color.dark}></Section>
      </ScrollspyContent>

      <ScrollspyContent icon={faCoffee} label={'ressources'}>
        <Section bgcolor={color.light}>
          <TileGroup autoFill={true} tileSize={'11.5rem'}>
            {ressources.map((ressource, index) => (
              <Tile key={'ressource-' + index} {...ressource} />
            ))}
          </TileGroup>
        </Section>
      </ScrollspyContent>

      <ScrollspyContent icon={faHashtag} label={'follow me'}>
        <Section bgcolor={color.dark}>
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
        </Section>
      </ScrollspyContent>

      <ScrollspyExtra>
        <Button>Action</Button>
      </ScrollspyExtra>
    </Scrollspy>
  );
};
