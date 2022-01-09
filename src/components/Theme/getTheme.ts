import { Theme } from "@emotion/react"

// for grey: https://www.colorhexa.com/282a36-to-f8f8f2 -> 4th from light

const schemes = {
  atom: {
    dark: "#282C34",
    light: "#DCDFE4",
    grey: "#AFB2B8",

    red: "#E06C75",
    green: "#98C379",
    yellow: "#E5C07B",
    blue: "#61AFEF",
    purple: "#C678DD",
    cyan: "#56B6C2",
    orange: "#FFBB7C",
  },

  // https://github.com/dracula/dracula-theme
  dracula: {
    dark: "#282a36",
    light: "#f8f8f2",
    grey: "#c4c4c3",

    red: "#ff5555",
    green: "#50fa7b",
    yellow: "#f1fa8c",
    blue: "#6272a4",
    purple: "#bd93f9",
    cyan: "#8be9fd",
    orange: "#ffb86c",
  },

  //https://github.com/arcticicestudio/nord
  nord: {
    dark: "#2E3541",
    light: "#ECEFF4",
    grey: "#bdc1c7",

    red: "#BF616A",
    green: "#A3BE8C",
    yellow: "#EBCB8B",
    blue: "#5E81AC",
    purple: "#B48EAD",
    cyan: "#88C0D0",
    orange: "#D08770",
  },

  //https://material.io/design/color/the-color-system.html#tools-for-picking-colors
  material: {
    dark: "#263238",
    light: "#eceff1",
    grey: "#b0bec5",

    red: "#ef5350",
    green: "#66bb6a",
    yellow: "#ffee58",
    blue: "#42a5f5",
    purple: "#ab47bc",
    cyan: "#26c6da",
    orange: "#ffa726",
  },
}

const currentTheme = schemes.atom

const space = {
  xxs: "0.125rem",
  xs: "0.5rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "4rem",
  xxl: "6rem",
}

const border = {
  light: {
    sm: space.xxs + " solid " + currentTheme.light,
    lg: space.xs + " solid " + currentTheme.light,
  },
  dark: {
    sm: space.xxs + " solid " + currentTheme.dark,
    lg: space.xs + " solid " + currentTheme.dark,
  },
}

const shadow = {
  regular: "0 20px 50px rgba(0, 0, 0, 0.8)",
  small: "0 10px 20px rgba(0, 0, 0, 0.8)",
}

const animation = {
  bouncy: "cubic-bezier(0.65, -0.85, 0.35, 1.85)",
}

const breakpoints = {
  small: "@media only screen and (max-width: 550px)",
  mobile: "@media only screen and (max-width: 800px)",
  tablet: "@media only screen and (max-width: 1050px)",
  laptop: "@media only screen and (max-width: 1440px)",
}

export const getTheme = () =>
  ({
    color: currentTheme,
    space: space,
    border: border,
    shadow: shadow,
    animation: animation,
    breakpoints: breakpoints,
  } as Theme)
