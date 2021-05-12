import { Theme } from '@emotion/react';

const color = {
  dark: 'rgb(40,44,52)',
  light: 'rgb(220,223,228)',
  grey: 'rgb(171,178,191)',

  red: 'rgb(224,108,117)',
  green: 'rgb(152,195,121)',
  yellow: 'rgb(229,192,123)',
  blue: 'rgb(97,175,239)',
  purple: 'rgb(198,120,221)',
  cyan: 'rgb(86,182,194)',
  orange: 'rgb(255, 187, 124)',
};

const space = {
  xxs: '0.125rem',
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '4rem',
  xxl: '6rem',
};

const border = {
  light: {
    sm: space.xxs + ' solid ' + color.light,
    lg: space.xs + ' solid ' + color.light,
  },
  dark: {
    sm: space.xxs + ' solid ' + color.dark,
    lg: space.xs + ' solid ' + color.dark,
  },
};

const animation = {
  bouncy: 'cubic-bezier(0.65, -0.85, 0.35, 1.85)',
};

const breakpoints = {
  mobile: '@media only screen and (max-width: 700px)',
  tablet: '@media only screen and (max-width: 1024px)',
  laptop: '@media only screen and (max-width: 1440px)',
};

export const getTheme = () =>
  ({
    color: color,
    space: space,
    border: border,
    animation: animation,
    breakpoints: breakpoints,
  } as Theme);
