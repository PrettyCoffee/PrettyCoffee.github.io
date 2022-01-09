import React from "react"

import { ScrollspyExtra, ScrollspyContent } from "../"
import { ScrollspyContentProps } from "../ScrollspyContent"

type ContentElements = React.PropsWithChildren<ScrollspyContentProps>

export type Components = {
  extras: React.ReactElement[]
  content: ContentElements[]
}

export function getComponents(children: React.ReactElement[]): Components {
  const result: Components = { content: [], extras: [] }
  if (children) {
    React.Children.forEach(children, child => {
      switch (child.type) {
        case ScrollspyExtra:
          result.extras.push(child)
          break
        case ScrollspyContent:
          result.content.push(child.props)
          break
        default:
          console.error(
            `An incompatible component was passed to the scrollspy, it won't be displayed.`
          )
      }
    })
  }
  if (result.content.length === 0)
    console.error(`You didnt pass any content to the scrollspy.`)

  return result
}
