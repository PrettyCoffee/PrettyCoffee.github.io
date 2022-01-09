import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome"

const StyledButton = styled.button`
  ${({ theme: { color, border, space } }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${color.light};
    background-color: transparent;
    border: ${border.light.sm};
    padding: 0 ${space.sm};
    height: ${space.lg};
    transition: 0.3s;
    font-weight: 400;
    font-size: ${space.sm};
    :hover,
    :active,
    :focus {
      color: ${color.dark};
      background-color: ${color.light};
      outline: none;
    }

    > svg {
      margin-left: ${space.xs};
    }
  `}
`

type ButtonProps = {
  icon?: FontAwesomeIconProps["icon"]
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
}

export const Button = ({
  children,
  icon,
  ...buttonProps
}: React.PropsWithChildren<ButtonProps>) => (
  <StyledButton as={buttonProps.href ? "a" : "button"} {...buttonProps}>
    {children}
    {icon && <FontAwesomeIcon icon={icon} />}
  </StyledButton>
)
