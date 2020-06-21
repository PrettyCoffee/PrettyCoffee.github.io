import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Project from "./Project"
import "./Coding.css"

const options = [
  { value: 'chgUp',     label: 'Latest Change' },
  { value: 'crtUp',     label: 'Newest Created' },
  { value: 'crtDown',   label: 'Oldest Created' },
]
/*
<select className="coding-sort" name="Sort By" id="cars">
</select>
*/
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
    const [projects]:project[] | any = useState([]);
    const [currSort, setCurrSort]:any = useState(options[0].value);
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
            },
                (error) => {
                    //Todo: Create error handling 
                }
            )    
        });
    },[]);

    var sort = (options:any) => {
        toast.dark('Sorted by '+options.label+'!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });
        setCurrSort(options.value)
        projects.sort(sortProjects)
        setReload(true)
    }
    var sortProjects = (a:project,b:project) => {
        switch (currSort){
            case options[0].value:
                return new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime()
            case options[1].value:
                return new Date(b.created).getTime() - new Date(a.created).getTime()
            case options[2].value:
                return new Date(a.created).getTime() - new Date(b.created).getTime()
        }
    }

    //Update jsx if project is added
    useEffect(() => {
        if(projects !== undefined && reload === true) {
            console.log(currSort)
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
    }, [reload, projects, projectsJSX, currSort])
    
    return(
        <>
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                limit={1}
            />
            <div className="content-header coding-header">
                <h1>Coding Projects</h1>
            </div>
            <Select 
                className="coding-sort"
                options={options}
                onChange={sort}
                isSearchable={false}
                backspaceRemovesValue={false}
                placeholder="Sort by"
            />
            <div>
            {projectsJSX}
            </div>
        </>
    )
}
export default Coding