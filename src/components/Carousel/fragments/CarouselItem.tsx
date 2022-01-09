import React from "react"

export type CarouselItemProps = {
  headline?: string
}

export const CarouselItem = ({
  children,
}: React.PropsWithChildren<CarouselItemProps>) => <>{children}</>
