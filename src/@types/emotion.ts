import "@emotion/react"

declare module "@emotion/react" {
  export interface Theme {
    color: {
      dark: string
      light: string
      grey: string

      red: string
      green: string
      yellow: string
      blue: string
      purple: string
      cyan: string
      orange: string
    }
    space: {
      xxs: string
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      xxl: string
    }
    border: {
      light: {
        sm: string
        lg: string
      }
      dark: {
        sm: string
        lg: string
      }
    }
    shadow: {
      regular: string
      small: string
    }
    animation: {
      bouncy: string
    }
    breakpoints: {
      small: string
      mobile: string
      tablet: string
      laptop: string
    }
  }
}
