import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { Carousel, CarouselItem } from "../../components"
import { ShadowPlay } from "./ShadowPlay"

const Text = styled.div`
  ${({ theme: { color } }) => css`
    color: ${color.dark};
    > h3 {
      font-weight: 500;
    }
    font-weight: 400;
    max-width: 300px;
  `}
`

export const Playground = () => {
  return (
    <Carousel>
      <CarouselItem headline="Work in progress">
        <Text>
          <h3>
            I couldnt think of a fitting text yet, take this cat ipsum instead:
          </h3>
          <br />
          Instantly break out into full speed gallop across the house for no
          reason. Cry for no apparent reason scream at teh bath yet destroy the
          blinds. Take a big fluffing crap 💩 purr sleep all day whilst slave is
          at work, play all night whilst slave is sleeping and run at 3am yet
          purr.
        </Text>
      </CarouselItem>
      <CarouselItem headline="Playing with shadows">
        <ShadowPlay />
      </CarouselItem>
    </Carousel>
  )
}
