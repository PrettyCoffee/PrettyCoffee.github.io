import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"

const StyledTyper = styled.div`
  width: 100%;
  box-sizing: border-box;
  white-space: break-spaces;
`

const Carret = styled.span`
  ${({ theme: { color, space } }) => css`
      height: ${space.xxs};
      width: ${space.md};
      margin-left: ${space.xs};
      display: inline-block;
      background-color: ${color.light};
      animation: blink 0.7s infinite;
      transition: 0.5s;
    }

    @keyframes blink {
      0% {
        opacity: 1;
      }
      25% {
        opacity: 1;
      }
      75% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }
  `}
`

type TyperProps = {
  text: string
  textCarousel?: string[]
  timing: {
    typeStrokes: number
    deleteStrokes: number
    waiting: number
  }
}

export const Typer = ({
  text,
  textCarousel,
  timing: { typeStrokes, deleteStrokes, waiting },
}: TyperProps) => {
  const [content, setContent] = React.useState("")
  const intervalId = React.useRef<NodeJS.Timeout>()
  let initialCopy = ""
  let carouselCopy = ""

  const addCarouselWord = (carouselIndex: number) => {
    if (textCarousel) {
      const currentText = textCarousel[carouselIndex]
      if (currentText) {
        carouselCopy += currentText[carouselCopy.length]
        setContent(initialCopy + carouselCopy)
        if (intervalId.current && carouselCopy.length >= currentText.length) {
          clearInterval(intervalId.current)
          setTimeout(
            () =>
              (intervalId.current = setInterval(
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                () => deleteCarouselWord(carouselIndex),
                deleteStrokes
              )),
            waiting
          )
        }
      }
    }
  }

  const getNextCarouselIndex = (index: number) => {
    if (textCarousel && index >= textCarousel.length - 1) return 0
    return index + 1
  }

  const deleteCarouselWord = (carouselIndex: number) => {
    if (textCarousel) {
      const currentText = textCarousel[carouselIndex]
      if (currentText) {
        carouselCopy = carouselCopy.slice(0, carouselCopy.length - 1)
        setContent(initialCopy + carouselCopy)
        if (intervalId.current && carouselCopy.length === 0) {
          clearInterval(intervalId.current)
          intervalId.current = setInterval(
            () => addCarouselWord(getNextCarouselIndex(carouselIndex)),
            typeStrokes
          )
        }
      }
    }
  }

  const intervalUpdater = () => {
    initialCopy += text[initialCopy.length]
    setContent(initialCopy)
    if (intervalId.current && initialCopy.length === text.length) {
      clearInterval(intervalId.current)
      if (textCarousel)
        intervalId.current = setInterval(() => addCarouselWord(0), typeStrokes)
    }
  }

  React.useEffect(() => {
    intervalId.current = setInterval(intervalUpdater, typeStrokes)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <StyledTyper>
      {content}
      <Carret />
    </StyledTyper>
  )
}
