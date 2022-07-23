import React from "react"

import {
  ThemeProvider as EmotionThemeProvider,
  Global,
  css,
} from "@emotion/react"

import { getTheme } from "./getTheme"

const { color } = getTheme()

const globalStyles = css`
  ::-webkit-scrollbar {
    width: 15px;
    height: 15px;
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
    color: ${color.light};
  }
  * {
    font-family: "Quicksand";
    font-weight: 300;
  }

  a {
    text-decoration: none;
    ::visited {
      color: unset;
    }
    color: unset;
  }
`

export const ThemeProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  return (
    <>
      <Global styles={globalStyles} />
      <EmotionThemeProvider theme={getTheme()}>{children}</EmotionThemeProvider>
    </>
  )
}
