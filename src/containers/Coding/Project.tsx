import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import "./Coding.css"
import defIcon from "../../ressources/default-icon.png"

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
    var created = new Date(project.created)
    var latest = new Date(project.lastUpdate)
    var projectYear:string = (created.getFullYear() === latest.getFullYear())?created.getFullYear()+"":created.getFullYear() + "-" + latest.getFullYear()

    var description = (project.description.length > 77)?project.description.slice(0,77)+"...":project.description

    var tags:JSX.Element[] = []
    project.tags.forEach(tag => {
        tags.push(
            <span>
                {tag}
            </span>
        )
    });
    return(
            //Todo:Dropdown mit Sortiermöglichkeiten
            //<div>latest change: {latest.toLocaleDateString('en-US')}</div>
        <>
            <div className="time-project"><span>{projectYear}</span></div>
            <div className="project-container">
                <div className="project-image"><img src={(project.img)?project.img:defIcon} alt="Project Avatar"/></div>
                <div className="project-details">
                    <h2>{project.name}</h2>
                    <div className="tag-container">{tags}</div>
                    <p className="project-description">
                        {(project.description !== "")?description:"No description available"}
                    </p>
                    <a className="project-button" href={project.url}>Go to Project <FontAwesomeIcon icon={faArrowRight}/></a>
                </div>
            </div>
        </>
    )
}
export default Project