import React from 'react';

import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import {
  faTerminal,
  faCoffee,
  faAddressCard,
  faHashtag,
} from '@fortawesome/free-solid-svg-icons';

import {
  Scrollspy,
  ScrollspyExtra,
  ScrollspyContent,
  Section,
  Button,
} from '../components';
import logo from '../data/media/logo.svg';
import { Intro } from './Intro';
import { Profile } from './Profile';
import { Projects } from './Projects/Projects';
import { Ressources } from './Ressources';
import { SocialMedia } from './SocialMedia';

const Avatar = styled.div`
  ${({ theme: { border } }) => css`
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

export const Portfolio = () => {
  const { color } = useTheme();

  return (
    <Scrollspy>
      <ScrollspyExtra>
        <Avatar>
          <img src={logo} alt={'avatar'} />
        </Avatar>
      </ScrollspyExtra>

      <ScrollspyContent icon={faTerminal} label={'intro'}>
        <Section bgcolor={color.dark}>
          <Intro />
        </Section>
      </ScrollspyContent>

      <ScrollspyContent icon={faAddressCard} label={'about me'}>
        <Section bgcolor={color.light}>
          <Profile />
        </Section>
      </ScrollspyContent>

      <ScrollspyContent icon={faGithubAlt} label={'projects'}>
        <Section bgcolor={color.dark}>
          <Projects />
        </Section>
      </ScrollspyContent>

      <ScrollspyContent icon={faCoffee} label={'ressources'}>
        <Section bgcolor={color.light}>
          <Ressources />
        </Section>
      </ScrollspyContent>

      <ScrollspyContent icon={faHashtag} label={'social'}>
        <Section bgcolor={color.dark}>
          <SocialMedia />
        </Section>
      </ScrollspyContent>

      <ScrollspyExtra>
        <Button>Button</Button>
      </ScrollspyExtra>
    </Scrollspy>
  );
};
