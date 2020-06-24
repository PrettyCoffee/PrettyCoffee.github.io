import React, {useState} from 'react';
import Settings from './Settings';

import { Link } from "react-router-dom";

import "./Home.css"
import swlink from "../../ressources/sw-link.png" 

type props = {
    handleColorChange: (key: string, color: string) => void,
}

export function Home(props:props){
    const[displaySettings, setDisplaySettings]:boolean|any = useState(false)
    const[header, setHeader]:boolean|any = useState(!displaySettings)
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
            <div className="content-body menu">
                <Link to="/about"><div>About Me</div></Link>
                <Link to="/cv"><div>CV</div></Link>
                <Link to="/coding"><div>Coding</div></Link>
                <Link to="/designs"><div>Designs (Work in Progress)</div></Link>
                <Link to="/articles"><div>Articles (Work in Progress)</div></Link>
            </div>

        </>
    )
}
export default Home