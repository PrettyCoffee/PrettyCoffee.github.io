import React from 'react';

import {
  ThemeProvider as EmotionThemeProvider,
  Global,
  css,
} from '@emotion/react';

import { getTheme } from './getTheme';

const { color } = getTheme();

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Pangolin&display=swap');
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${color.grey};
    border-radius: 10px;
  }
  body {
    font-family: 'Fira Code';
    font-weight: 300;
    margin: 0;
    overflow: overlay;
  }
  #root {
    width: 100vw;
  }
`;

export const ThemeProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  return (
    <>
      <Global styles={globalStyles} />
      <EmotionThemeProvider theme={getTheme()}>{children}</EmotionThemeProvider>
    </>
  );
};
