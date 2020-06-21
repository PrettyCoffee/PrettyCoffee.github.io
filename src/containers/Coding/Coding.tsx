import React, { useState, useEffect } from 'react';
import Project from "./Project"
import "./Coding.css"

type project = {
    img:string,
    name:string,
    description:string,
    url:string,
    created:string,
    lastUpdate:string,
    tags:string[],
}

/*
Gthub Repo:
    https://api.github.com/repos/PrettyCoffee/PrettyCoffee.github.io
Get Content of Repo: 
    https://api.github.com/repos/PrettyCoffee/PrettyCoffee.github.io/contents
*/

const githubRepositories = [
    "PrettyCoffee/PrettyCoffee.github.io",
]

const gitlabRepositories = [
    "14827017",
    "14252893",
    "16123962",
]

export function Coding(props:any){
    //let projects:project[] = []
    const [projects, setProjects]:project[] | any = useState([]);
    const [reload, setReload]:boolean | any = useState(true);
    const [projectsJSX, setProjectsJSX]:JSX.Element[] | any = useState(["abc", "1223"]);
    
    //get all wanted projects
    useEffect(() => {
        gitlabRepositories.forEach(gitlabRep => {
            fetch("https://gitlab.com/api/v4/projects/"+gitlabRep+"/")
            .then(res => res.json())
            .then(result => {
                projects.push({
                    img:        result.avatar_url,
                    name:       result.name,
                    description:result.description,
                    url:        result.web_url,
                    created:    result.created_at,
                    lastUpdate: result.last_activity_at,
                    tags:       (result.tag_list)?result.tag_list:[],
                })
                /*
                setProjects(...projects,{
                    img:        result.avatar_url,
                    name:       result.name,
                    description:result.description,
                    url:        result.web_url,
                    created:    result.created_at,
                    lastUpdate: result.last_activity_at,
                    tags:       result.tag_list,
                })
                */
                projects.sort(sortProjects)
                setReload(true)
            },
                (error) => {
                    //Todo: Create error handling 
                }
            )    
        });
        githubRepositories.forEach(githubRep => {
            fetch("https://api.github.com/repos/"+githubRep)
            .then(res => res.json())
            .then(result => {
                projects.push({
                    img:        null,
                    name:       result.name,
                    description:result.description,
                    url:        result.html_url,
                    created:    result.created_at,
                    lastUpdate: result.pushed_at,
                    tags:       (result.topics)?result.topics:[],
                })
                projects.sort(sortProjects)
                setReload(true)
            },
                (error) => {
                    //Todo: Create error handling 
                }
            )    
        });
    },[]);

    var sortProjects = (a:project,b:project) => {
        return new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime()
    }

    //Update jsx if project is added
    useEffect(() => {
        if(projects !== undefined && reload === true) {
            var tmpPrj:JSX.Element[] = []
            projects.forEach((prj:project) => {
                tmpPrj.push(
                    <Project
                        {...prj}
                    />
                )
                setProjectsJSX(tmpPrj)
            })
            setReload(false)
        }
    }, [reload, projects, projectsJSX])
    
    return(
        <>
            <div className="content-header coding-header">
                <h1>Coding Projects</h1>
            </div>
            <div>
            {projectsJSX}
            </div>
        </>
    )
}
export default Coding