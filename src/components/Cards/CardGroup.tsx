import { css } from "@emotion/react"
import styled from "@emotion/styled"

export const CardGroup = styled.div`
  ${({ theme: { breakpoints, space } }) =>
    css`
      display: grid;
      grid-gap: 40px;
      grid-template-columns: auto auto auto;
      ${breakpoints.tablet} {
        grid-template-columns: auto auto;
      }
      ${breakpoints.small} {
        grid-gap: 20px;
        > a {
          height: 6.4rem;
          width: 9rem;
          > [datatype="text"] {
            font-size: ${space.sm};
          }
          > [datatype="icon"] {
            font-size: 3rem;
          }
        }
      }
    `}
`
