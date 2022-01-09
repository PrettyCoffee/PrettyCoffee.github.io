import React from "react"

import { CarouselItem } from "../fragments/CarouselItem"

export type Components = { headline?: string; content: React.ReactElement }[]

export function getComponents(children: React.ReactElement[]): Components {
  const result: Components = []
  if (children) {
    React.Children.forEach(children, child => {
      switch (child.type) {
        case CarouselItem:
          result.push({
            headline: child.props.headline,
            content: child.props.children,
          })
          break
        default:
          console.error(
            `An incompatible component was passed to the carousel, it won't be displayed.`
          )
      }
    })
  }
  if (result.length === 0)
    console.error(`You didnt pass any content to the carousel.`)

  return result
}
