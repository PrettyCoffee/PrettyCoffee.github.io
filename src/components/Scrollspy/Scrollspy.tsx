import React from "react"

import useScrollPosition from "@react-hook/window-scroll"

import { ScrollspyMenu } from "./fragments/ScrollspyMenu"
import { ScrollspyMenuItem } from "./fragments/ScrollspyMenuItem"
import { ScrollspySeparator } from "./fragments/ScrollspySeparator"
import { StyledScrollspy } from "./fragments/StyledScrollspy"
import { getComponents } from "./utils/getComponents"

type ScreenSection = {
  ystart: number
  scrollTo: () => void
}

type ScrollspyProps = { children: React.ReactElement[] }

export const Scrollspy = ({ children }: ScrollspyProps) => {
  const [currentSection, setCurrentSection] = React.useState<number>(0)
  const { extras, content } = getComponents(children)
  const screenSections: ScreenSection[] = React.useMemo(() => [], [])
  const scrollPosition = useScrollPosition()

  React.useEffect(() => {
    screenSections.forEach((section, index) => {
      if (section.ystart <= scrollPosition + 100) setCurrentSection(index)
    })
  }, [scrollPosition, screenSections])

  const addScrollSection = (ref: HTMLDivElement | null, index: number) => {
    if (!screenSections[index]) {
      screenSections[index] = {
        ystart: ref?.offsetTop ?? 0,
        scrollTo: () => {
          ref?.scrollIntoView({ behavior: "smooth" })
          setCurrentSection(index)
        },
      }
    }
  }

  return (
    <>
      <StyledScrollspy>
        {extras[0]}
        <ScrollspySeparator />

        <ScrollspyMenu>
          {content.map((child, index) => (
            <ScrollspyMenuItem
              onClick={() => screenSections[index]?.scrollTo()}
              active={currentSection === index}
              icon={child.icon}
              label={child.label}
              key={"spyitem" + index}
            />
          ))}
        </ScrollspyMenu>

        <ScrollspySeparator />
        {extras.slice(1)}
      </StyledScrollspy>

      {content.map((child, index) => (
        <div
          key={"scrollsection" + index}
          ref={ref => addScrollSection(ref, index)}
        >
          {child.children}
        </div>
      ))}
    </>
  )
}
