import React from 'react';
import { Link } from "react-router-dom";

import "./Home.css"
import swlink from "../../ressources/sw-link.png" 

export function Home(props:any){
    //Todo: Colorpicker für eigene Farben und in Local Storage
    //let root = document.documentElement;
    //root.style.setProperty('--bg-color', 'rgba(46,46,46,255)');
    return(
        <>
            <div className="link"><img alt="" src={swlink}/></div>
            <div className="content-header">
                <h1>Welcome!</h1>
            </div>

            <div className="content-body">
                <Link to="/about"><div className="menu-item">About Me</div></Link>
                <Link to="/CV"><div className="menu-item">CV</div></Link>
                <Link to="/coding"><div className="menu-item">Coding</div></Link>
                <Link to="/designs"><div className="menu-item">Designs (Work in Progress)</div></Link>
            </div>
        </>
    )
}
export default Home