import { getTheme } from '../components';
import avatar from './media/avatar.png';
import fluidity from './media/fluidity.svg';
import goAudio from './media/go-audio.png';
import kitty from './media/kitty.png';
import smug from './media/smug.jpg';

const { color } = getTheme();

export type Project = {
  title: string;
  description: string;
  image: string;
  repoUrl: string;
  demoUrl?: string;
};

type Year = { year: number; color: string; projects: Project[] };

export const projects: Year[] = [
  {
    year: 2021,
    color: color.red,
    projects: [
      {
        title: 'Portfolio v3',
        description:
          'The latest version of my portfolio. You are currently looking at it.',
        image: avatar,
        repoUrl: 'https://github.com/PrettyCoffee/PrettyCoffee.github.io',
      },
      {
        title: 'Fluidity',
        description:
          'My third browser startpage featuring a unique design and many options for customizability such as appearance, bookmarks and keyword forwarding.',
        image: fluidity,
        repoUrl: 'https://github.com/PrettyCoffee/fluidity',
        demoUrl: 'https://prettycoffee.github.io/fluidity/',
      },
    ],
  },
  {
    year: 2020,
    color: color.purple,
    projects: [
      {
        title: 'B/W Kitty',
        description:
          'My second browser startpage, featuring bookmarks, a searchbar and color theming.',
        image: kitty,
        repoUrl: 'https://github.com/PrettyCoffee/b-w-kitty',
        demoUrl: 'https://prettycoffee.github.io/b-w-kitty/',
      },
      {
        title: 'Raspberry Pi Audio-API',
        description:
          'A go library which allows to programmatically time and mix the playback of sound files.',
        image: goAudio,
        repoUrl: 'https://gitlab.com/PrettyCoffee/raspberry-pi-audio-api',
      },
    ],
  },
  {
    year: 2019,
    color: color.blue,
    projects: [
      {
        title: 'smugLoader',
        description: 'A browser startpage based on the "smug dancin" meme.',
        image: smug,
        repoUrl: 'https://gitlab.com/PrettyCoffee/smugloader',
      },
    ],
  },
];
