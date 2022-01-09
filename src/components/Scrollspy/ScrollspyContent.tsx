import React from "react"

import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export type ScrollspyContentProps = {
  icon: IconDefinition
  label: string
}

export const ScrollspyContent = ({
  children,
}: React.PropsWithChildren<ScrollspyContentProps>) => <div>{children}</div>
