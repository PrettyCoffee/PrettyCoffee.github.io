import React from 'react';

import "../_styles/Start.css"

type props = {
    handleColorChange: (key: string, color: string) => void,
    setCurrPage: (page:string) => void,
}

export default function Start(props:props){
    return(
        <>
            <div className="content-header">
                <h1>Welcome!</h1>
            </div>
            <div className="content-body menu">
                <span onClick={() => props.setCurrPage("about")}><div>About Me</div></span>
                <span onClick={() => props.setCurrPage("cv")}><div>CV</div></span>
                <span onClick={() => props.setCurrPage("coding")}><div>Coding</div></span>
                <span onClick={() => props.setCurrPage("showcase")}><div>Showcase (Work in Progress)</div></span>
                <span onClick={() => props.setCurrPage("articles")}><div>Articles</div></span>
            </div>
        </>
    )
}