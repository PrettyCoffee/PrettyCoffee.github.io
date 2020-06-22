import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Settings from './Settings';

import "./Home.css"
import swlink from "../../ressources/sw-link.png" 

type props = {
    handleColorChange: (key: string, color: string) => void,
}

export function Home(props:props){
    const[displaySettings, setDisplaySettings]:boolean|any = useState(false)
    const[header, setHeader]:boolean|any = useState(!displaySettings)
    //Todo: Colorpicker für eigene Farben und in Local Storage
    //let root = document.documentElement;
    //root.style.setProperty('--bg-color', 'rgba(46,46,46,255)');
    return(
        <>
            <div className="link">
                <img
                    alt=""
                    src={swlink}
                    onClick={()=>{
                        setDisplaySettings(!displaySettings)
                        setHeader(!header)
                    }}
                />
            </div>
            <div className="content-header">
                <h1>Welcome!</h1>
            </div>
            {displaySettings?(
                <div className="color-settings">
                    <h1 className="glitch" data-text="W̴̛̙̝̓̾̀͜e̷̲̹͖̥̯̒̚l̴̥͙̳̀͐ĉ̶̙̱̄̋͘͝ȍ̴͎̀͒̔͒m̷̦͕̖͋́e̶̹̻̩͌̾̂!̷̥̂͝">W̴̛̙̝̓̾̀͜e̷̲̹͖̥̯̒̚l̴̥͙̳̀͐ĉ̶̙̱̄̋͘͝ȍ̴͎̀͒̔͒m̷̦͕̖͋́e̶̹̻̩͌̾̂!̷̥̂͝</h1>
                    <Settings
                        handleColorChange={props.handleColorChange}
                    />
                </div>
            ):null}

            <div className="content-body">
                <Link to="/about"><div className="menu-item">About Me</div></Link>
                <Link to="/CV"><div className="menu-item">CV</div></Link>
                <Link to="/coding"><div className="menu-item">Coding</div></Link>
                <Link to="/designs"><div className="menu-item">Designs (Work in Progress)</div></Link>
                <Link to="/articles"><div className="menu-item">Articles (Work in Progress)</div></Link>
            </div>

        </>
    )
}
export default Home