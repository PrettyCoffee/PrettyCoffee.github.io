import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CardWrapper = styled.a<{ color: string }>`
  ${({ theme: { shadow }, color }) => css`
    position: relative;
    width: 14.14rem;
    height: 10rem;
    background-color: ${color};
    box-shadow: ${shadow.regular};
    float: left;
    overflow: hidden;

    ::before,
    ::after {
      content: "";
      position: absolute;
      right: 0;
      left: 0;
      z-index: 1;

      background-color: black;
      transition: 0.4s ease;
    }
    ::before {
      top: 0;
      bottom: 0;
      opacity: 0.6;
    }

    ::after {
      top: 10rem;
      bottom: 0;
      opacity: 0.4;
    }
    [datatype="text"] {
    }

    :hover,
    :active,
    :focus {
      outline: none;
      ::before {
        bottom: 10rem;
      }
      ::after {
        top: 0;
      }
      [datatype="icon"] {
        bottom: 10rem;
        top: -10rem;
      }
      [datatype="text"] {
        top: 0;
      }
    }
  `}
`

const CardContent = styled.div`
  color: ${({ theme }) => theme.color.light};
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease;
`

const CardLabel = styled(CardContent)`
  top: 10rem;
  font-weight: 500;
  font-size: ${({ theme }) => theme.space.md};
`

const CardIcon = styled(CardContent)`
  top: 0;
  right: 0;
  font-size: ${({ theme }) => theme.space.xl};
`

type CardProps = {
  url: string
  icon: IconDefinition
  color: string
}

export const Card = ({
  url,
  children,
  icon,
  color,
}: React.PropsWithChildren<CardProps>) => {
  return (
    <CardWrapper href={url} target={"_blank"} color={color}>
      <CardIcon datatype={"icon"}>
        <FontAwesomeIcon icon={icon} />
      </CardIcon>
      <CardLabel datatype={"text"}>{children}</CardLabel>
    </CardWrapper>
  )
}
