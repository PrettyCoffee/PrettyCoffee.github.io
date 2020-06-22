import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import {Toastify, toastAction} from "../../components/Toastify/Toastify"

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

const options = [
    { value: 'chgUp',     label: 'latest change' },
    { value: 'crtUp',     label: 'newest created' },
    { value: 'crtDown',   label: 'oldest created' },
]
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
    const [projects]:project[] | any = useState([]);
    const [currSort, setCurrSort]:any = useState(options[0]);
    const [reload, setReload]:boolean | any = useState(true);
    const [projectsJSX, setProjectsJSX]:JSX.Element[] | any = useState(["abc", "1223"]);
    
    //get all wanted projects
    useEffect(() => {
        gitlabRepositories.forEach(gitlabRep => {
            fetch("https://gitlab.com/api/v4/projects/"+gitlabRep+"/", {
                method:'GET'
            })
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
                setReload(true)
            })
        });
        githubRepositories.forEach(githubRep => {
            fetch("https://api.github.com/repos/"+githubRep,{
                method:'GET',
                headers: {
                    'Accept':'application/vnd.github.mercy-preview+json'
                }
            })
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
            })    
        });
    },[]);

    var reloadProjects = (options:any) => {
        toastAction('Sorted by '+options.label)
        setCurrSort(options)
        setReload(true)
    }
    var sortProjects = (a:project,b:project) => {
        let result:number = 1
        switch (currSort.value){
            case options[0].value:
                result = new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime()
            break
            case options[1].value:
                result = new Date(b.created).getTime() - new Date(a.created).getTime()
            break
            case options[2].value:
                result = new Date(a.created).getTime() - new Date(b.created).getTime()
        }
        return result
    }

    //Update jsx if project is added
    useEffect(() => {
        if(projects !== undefined && reload === true) {
            projects.sort(sortProjects)
            var tmpPrj:JSX.Element[] = []
            projects.forEach((prj:project) => {
                tmpPrj.push(
                    <Project
                        {...prj}
                    />
                )
            })
            setReload(false)
            setProjectsJSX([...tmpPrj])
        }
    }, [reload])
    
    return(
        <>
            <Toastify/>
            <div className="content-header coding-header">
                <h1>Coding Projects</h1>
            </div>
            <Select 
                className="coding-sort"
                options={options}
                onChange={reloadProjects}
                isSearchable={false}
                backspaceRemovesValue={false}
                placeholder="sort by"
            />
            <div>
            {projectsJSX}
            </div>
        </>
    )
}
export default Coding