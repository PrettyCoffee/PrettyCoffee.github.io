import styled from "@emotion/styled"

import { ThemeProvider } from "./components"
import { Portfolio } from "./Portfolio/Portfolio"

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.dark};
`

export const App = () => {
  return (
    <ThemeProvider>
      <AppWrapper>
        <Portfolio />
      </AppWrapper>
    </ThemeProvider>
  )
}
