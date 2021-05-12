import awesome from './media/awesome.png';
import designSystems from './media/design-systems.svg';
import easing from './media/easing.svg';
import freeFrontend from './media/free-frontend.svg';
import googleFonts from './media/google-fonts.png';
import lawsOfUx from './media/laws-of-ux.svg';
import reactHooks from './media/react-hooks.svg';
import startpages from './media/startpages.png';
import webdev from './media/webdev.svg';

type Ressource = {
  title: string;
  content: string;
  href: string;
  image: string;
  columns?: number;
  rows?: number;
  bgcolor?: string;
};

export const ressources: Ressource[] = [
  {
    title: 'Awesome React Components',
    content:
      'Awesome React Components is... a list of awesome react components. Each component in this list aims to solve a real problem and is still maintained.',
    href: 'https://github.com/brillout/awesome-react-components/',
    image: awesome,
    rows: 2,
    columns: 2,
  },
  {
    title: 'Awesome React Hooks',
    content: "It's a list too. But about awesome react hooks.",
    href: 'https://github.com/rehooks/awesome-react-hooks',
    image: reactHooks,
  },
  {
    title: 'Easings',
    content:
      'A list of easing examples for animations with code snippets and demos.',
    href: 'https://easings.net/',
    image: easing,
  },
  {
    title: 'Laws of UX',
    content:
      'Laws of UX is a collection of best practices that designers can consider when building user interfaces.',
    href: 'https://lawsofux.com/',
    image: lawsOfUx,
    columns: 2,
  },
  {
    title: 'Free Frontend',
    content: 'Free Frontend is a large collection of web UI element examples.',
    href: 'https://freefrontend.com/',
    image: freeFrontend,
    columns: 2,
  },
  {
    title: 'r/startpages',
    content:
      'r/startpages is a subreddit about displaying and discussing custom browser startpages. ' +
      'The users created some unique designs and are open for communication.',
    href: 'https://www.reddit.com/r/startpages/',
    image: startpages,
    columns: 2,
    rows: 2,
  },
  {
    title: 'Google Fonts',
    content: 'Handy for introducing fonts to your webpage.',
    href: 'https://fonts.google.com/',
    image: googleFonts,
  },
  {
    title: 'web.dev/measure',
    content:
      'See how well your website performs. Then, get tips to improve your user experience.',
    href: 'https://web.dev/measure/',
    image: webdev,
    columns: 2,
  },
  {
    title: 'fem-design-systems',
    content:
      'An interesting paper about design systems and what to consider when creating one.',
    href: 'https://fem-design-systems.netlify.app/',
    image: designSystems,
  },
];
