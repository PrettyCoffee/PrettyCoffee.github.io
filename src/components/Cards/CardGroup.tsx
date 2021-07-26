import styled from '@emotion/styled';

export const CardGroup = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: auto auto;
  }
  ${({ theme }) => theme.breakpoints.small} {
    grid-template-columns: auto;
  }
`;
