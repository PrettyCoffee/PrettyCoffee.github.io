import React, { useState } from 'react';
import Tabbar from "../_components/Tabbar"
import "../_styles/Showcase.css"

type project = {
    label:string,
    url:string
}
const projects:project[] = [
    {
        label:"Randomizer",
        url:"https://prettycoffee.github.io/whom_shall_it_be/",
    },
    {
        label:"Startpage",
        url:"https://prettycoffee.github.io/b-w-kitty/",
    },
    {
        label:"DoggoWebpage",
        url:"https://prettycoffee.github.io/doggooos/",
    },
]

export default function Showcase(props:any){
    const [currPage, setCurrPage]:project|any = useState(projects[0])

    let tabs:any[] = []
    projects.forEach(project => {
        tabs.push({
            key:project.label,
            content:project.label,
            actionValue:project,
            action:setCurrPage
        })
    })

    return(
        <><div className="cv-content">
            <Tabbar 
                tabs={tabs}
            /></div>
            <iframe 
                className="showcase-iframe"
                title={currPage.lable} 
                src={currPage.url}
            />
        </>
    )
}