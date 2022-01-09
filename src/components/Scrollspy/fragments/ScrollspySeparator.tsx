import styled from "@emotion/styled"

export const ScrollspySeparator = styled.div`
  flex: auto;
  border-left: ${({ theme }) => theme.border.light.sm};
  width: 0;
  margin: ${({ theme }) => theme.space.md} 0;
`
