import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import defIcon from "../_ressources/default-icon.png"

type project = {
    img:string,
    name:string,
    description:string,
    url:string,
    created:string,
    lastUpdate:string,
    tags:string[],
}

export function Project(project:project){
    //calc project duration
    let created = new Date(project.created)
    let latest = new Date(project.lastUpdate)
    let projectYear:string = (created.getFullYear() === latest.getFullYear())
        ? created.getFullYear()+""
        : created.getFullYear() + "-" + latest.getFullYear()

    //crop description
    let description = project.description // (project.description.length > 77)?project.description.slice(0,77)+"...":project.description

    //format tags
    let tags:JSX.Element[] = []
    project.tags.forEach((tag:string) => {
        tags.push(
            <span>
                {tag}
            </span>
        )
    });
    
    return(
        <>
            <div className="time-project"><span>{projectYear}</span></div>
            <div className="project-container">
                <div className="project-image"><img className={(project.img)?"":"defaultAvatar"} src={(project.img)?project.img:defIcon} alt="Project Avatar"/></div>
                <div className="project-details">
                    <h2>{project.name}</h2>
                    <div className="project-tag-container">{tags}</div>
                    <p className="project-description">
                        {(project.description !== "")?description:"No description available"}
                    </p>
                    <a className="button project-button" href={project.url}>Go to Project <FontAwesomeIcon icon={faArrowRight}/></a>
                </div>
            </div>
        </>
    )
}
export default Project