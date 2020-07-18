import React from 'react';

import { Link } from "react-router-dom";

import "../_styles/Start.css"

type props = {
    handleColorChange: (key: string, color: string) => void,
}

export default function Start(props:props){
    return(
        <>
            <div className="content-header">
                <h1>Welcome!</h1>
            </div>
            <div className="content-body menu">
                <Link to="/about"><div>About Me</div></Link>
                <Link to="/cv"><div>CV</div></Link>
                <Link to="/coding"><div>Coding</div></Link>
                <Link to="/showcase"><div>Showcase (Work in Progress)</div></Link>
                <Link to="/articles"><div>Articles (Work in Progress)</div></Link>
            </div>
        </>
    )
}