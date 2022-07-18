import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEye } from "@fortawesome/free-regular-svg-icons"
import { faBook } from "@fortawesome/free-solid-svg-icons"

import { Button } from "../../components"
import { Project as ProjectProps } from "../../data/projects"

const StyledProject = styled.div`
  ${({ theme: { breakpoints } }) => css`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 40px;
    margin-bottom: 40px;
    ${breakpoints.mobile} {
      grid-template-columns: auto;
      width: calc(100vw - 40px);
      position: relative;
    }
  `}
`

const ProjectAvatar = styled.img`
  ${({ theme: { color, shadow, breakpoints, space } }) => css`
    height: 200px;
    width: 200px;
    border: 4px solid ${color.light};
    padding: 20px;
    object-fit: contain;
    box-sizing: border-box;
    box-shadow: ${shadow.small};
    background-color: ${color.dark};
    ${breakpoints.mobile} {
      justify-self: center;
      margin-top: ${space.xl};
    }
  `}
`

const Description = styled.div`
  ${({ theme: { space, shadow, color } }) => css`
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 20px;
    box-shadow: ${shadow.small};
    background-color: ${color.dark};
    > h3 {
      margin: 0 0 ${space.xs} 0;
      font-weight: 500;
    }
  `}
`
const ButtonRow = styled.div`
  ${({ theme: { space } }) => css`
    text-align: right;
    > a:nth-of-type(2) {
      margin-left: ${space.sm};
    }
  `}
`

const Paragraph = styled.p`
  white-space: break-spaces;
`

export const Project = ({
  title,
  description,
  demoUrl,
  repoUrl,
  docsUrl,
  image,
}: ProjectProps) => (
  <StyledProject>
    <ProjectAvatar src={image} />
    <Description>
      <h3>{title}</h3>
      <Paragraph>{description}</Paragraph>
      <ButtonRow>
        {repoUrl && (
          <Button
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            icon={faGithub}
          >
            Repo
          </Button>
        )}
        {demoUrl && (
          <Button href={demoUrl} target="_blank" rel="noreferrer" icon={faEye}>
            Demo
          </Button>
        )}
        {docsUrl && (
          <Button href={docsUrl} target="_blank" rel="noreferrer" icon={faBook}>
            Docs
          </Button>
        )}
      </ButtonRow>
    </Description>
  </StyledProject>
)
