import styled from "@emotion/styled"

export const ScrollspyMenu = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: row;
  }
`
