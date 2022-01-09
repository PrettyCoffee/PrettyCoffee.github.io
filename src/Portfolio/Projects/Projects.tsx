import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { Timeline } from "../../components"
import { projects } from "../../data/projects"
import { Project } from "./Project"

const ProjectsContainer = styled.div`
  ${({ theme: { breakpoints } }) => css`
    width: 100%;
    max-width: 800px;
    ${breakpoints.mobile} {
      align-self: flex-start;
      width: calc(100% - 110px);
    }
  `}
`

export const Projects = () => (
  <ProjectsContainer>
    {projects.map(({ projects, ...timelineProps }) => (
      <Timeline key={timelineProps.year} {...timelineProps}>
        {projects.map(project => (
          <Project key={project.title} {...project} />
        ))}
      </Timeline>
    ))}
  </ProjectsContainer>
)
