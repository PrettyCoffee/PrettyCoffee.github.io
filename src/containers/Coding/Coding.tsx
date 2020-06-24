import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import {toastAction} from "../../components/Toastify/Toastify"

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

const selectOptions = [
    { value: 'chgUp',     label: 'latest change' },
    { value: 'crtUp',     label: 'newest created' },
    { value: 'crtDown',   label: 'oldest created' },
]

//Add new projects here
const githubRepositories = [
    "PrettyCoffee/PrettyCoffee.github.io",
]
const gitlabRepositories = [
    "14827017", //Golang Audio API
    "14252893", //Smugloader
    "16123962", //ASE-JavaChat
]

export function Coding(props:any){
    const [projects, setProjects]:project[]|any = useState([])
    const [currSort, setCurrSort]:any = useState(selectOptions[0])
    const [reload, setReload]:boolean | any = useState(false)
    const [projectsJSX, setProjectsJSX]:JSX.Element[] | any = useState([])
    
    //get all wanted projects
    useEffect(() => {
        let promises:Promise<any>[] = []

        //Add Gitlab repos
        gitlabRepositories.forEach((gitlabRep) => {
            promises.push(
                fetch("https://gitlab.com/api/v4/projects/"+gitlabRep, {
                    method:'GET'
                })
                .then(res => res.json())
            )
        })
        //Add Github repos
        githubRepositories.forEach(githubRep => {
            promises.push(
                fetch("https://api.github.com/repos/"+githubRep, {
                    method:'GET',
                    headers: {
                        'Accept':'application/vnd.github.mercy-preview+json',
                    }
                })
                .then(res => res.json())
            )
        })
        //process joined responses
        //Since you should not update states without set functions, the promises have to be joined
        Promise.all([...promises])
        .then(result => {
            let tmpProjects = [...projects]
            //Add Projects
            result.forEach(promise => {
                //Gitlab has Avatar
                if (promise.web_url?.includes("gitlab.com")) {
                    tmpProjects.push({
                        img:        promise.avatar_url,
                        name:       promise.name,
                        description:promise.description,
                        url:        promise.web_url,
                        created:    promise.created_at,
                        lastUpdate: promise.last_activity_at,
                        tags:       (promise.tag_list)?promise.tag_list:[],
                    })
                //Github has no Avatar
                } else {
                    tmpProjects.push({
                        img:        "",
                        name:       promise.name,
                        description:promise.description,
                        url:        promise.html_url,
                        created:    promise.created_at,
                        lastUpdate: promise.pushed_at,
                        tags:       (promise.topics)?promise.topics:[],
                    })
                }
            })
            //tmpProjects.sort(sortProjects)
            setProjects([...tmpProjects])
            setReload(true)
        })
    },[]);


    //Call if projects shouls be sorted and displayed again
    let reloadProjects = (options:any) => {
        toastAction('Sorted by '+options.label)
        setCurrSort(options)
        setReload(true)
    }

    //project sort function to call with array.sort()
    let sortProjects = (a:project,b:project) => {
        let result:number = 1
        switch (currSort.value){
            case selectOptions[0].value:
                result = new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime()
            break
            case selectOptions[1].value:
                result = new Date(b.created).getTime() - new Date(a.created).getTime()
            break
            case selectOptions[2].value:
                result = new Date(a.created).getTime() - new Date(b.created).getTime()
        }
        return result
    }

    //Update jsx if project is added
    useEffect(() => {
        if(projects !== undefined && reload === true) {
            //Sort Projects
            let sortedProjects = [...projects]
            sortedProjects.sort(sortProjects)

            //Insert projects in html
            let tmpPrj:JSX.Element[] = []
            sortedProjects.forEach((prj:project) => {
                tmpPrj.push(
                    <Project
                        {...prj}
                    />
                )
            })
            setReload(false)
            setProjectsJSX([...tmpPrj])
        }
    }, [reload, projects])
    
    return(
        <>
            <div className="content-header coding-header">
                <h1>Coding Projects</h1>
            </div>
            <Select 
                className="coding-sort"
                options={selectOptions}
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