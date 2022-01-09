import styled from "@emotion/styled"

export const StyledScrollspy = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 50px;
  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  mix-blend-mode: difference;

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 20px 10px 20px;
    top: 0px;
    right: 0px;
    bottom: unset;
    left: 0px;
    background-color: ${({ theme }) => theme.color.dark};
    mix-blend-mode: unset;
  }
`
