import { getTheme } from '../components/';
import awesome from './media/awesome.svg';
import googleFonts from './media/google-fonts.svg';
import lawsOfUx from './media/laws-of-ux.svg';
import reactHooks from './media/react-hooks.svg';
import startpages from './media/startpages.svg';
import webdev from './media/webdev.png';

const { color } = getTheme();

type Ressource = {
  title: string;
  content: string;
  href: string;
  image: string;
  columns?: number;
  rows?: number;
  bgcolor?: string;
};

/*
 _______________
< /r/startpages >
 ---------------
  \
  \ ^__^
    (oo)\________
    (__)\        )\/\
        ||----W ||
        ||      ||
*/

export const ressources: Ressource[] = [
  {
    title: 'Awsm React Comps',
    content:
      'Awesome React Components is... a list of awesome react components.',
    href: 'https://github.com/brillout/awesome-react-components/',
    image: awesome,
    bgcolor: color.blue,
  },
  {
    title: 'Awsm React Hooks',
    content: "It's a list too. But about awesome react hooks.",
    href: 'https://github.com/rehooks/awesome-react-hooks',
    image: reactHooks,
    bgcolor: color.green,
  },
  {
    title: 'Laws of UX',
    content:
      'A collection of best practices that designers can consider when building user interfaces.',
    href: 'https://lawsofux.com/',
    image: lawsOfUx,
    bgcolor: color.purple,
  },
  {
    title: 'r/startpages',
    content:
      ' A subreddit about displaying and discussing custom browser startpages.',
    href: 'https://www.reddit.com/r/startpages/',
    image: startpages,
    bgcolor: color.red,
  },
  {
    title: 'Google Fonts',
    content: 'Fonts - ez mode.',
    href: 'https://fonts.google.com/',
    image: googleFonts,
    bgcolor: color.orange,
  },
  {
    title: 'web.dev/measure',
    content:
      'See how well your website performs. Then, get tips to improve your user experience.',
    href: 'https://web.dev/measure/',
    image: webdev,
    bgcolor: color.cyan,
  },
];
