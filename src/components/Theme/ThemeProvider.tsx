import React from 'react';

import {
  ThemeProvider as EmotionThemeProvider,
  Global,
  css,
} from '@emotion/react';

import { getTheme } from './getTheme';

const { color } = getTheme();

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap');
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
    margin: 0;
    overflow: overlay;
  }
  #root {
    width: 100vw;
    * {
      font-family: 'Quicksand';
      font-weight: 300;
    }
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
