import React from 'react';

import { useTheme } from '@emotion/react';
import {
  faYoutube,
  faGithub,
  faGitlab,
  faReddit,
  faXing,
  faSteam,
} from '@fortawesome/free-brands-svg-icons';

import { Card, CardGroup } from '../components';

export const SocialMedia = () => {
  const { color } = useTheme();
  return (
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
  );
};
