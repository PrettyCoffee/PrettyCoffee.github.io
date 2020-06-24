import React, {useState} from 'react';
import Settings from './Settings';

import "./Home.css"
import swlink from "../../ressources/sw-link.png" 

type props = {
    handleColorChange: (key: string, color: string) => void,
    setPage:(s:string)=>{},
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
                <div onClick={() => props.setPage("about")}>About Me</div>
                <div onClick={() => props.setPage("cv")}>CV</div>
                <div onClick={() => props.setPage("coding")}>Coding</div>
                <div onClick={() => props.setPage("designs")}>Designs (Work in Progress)</div>
                <div onClick={() => props.setPage("articles")}>Articles (Work in Progress)</div>
            </div>

        </>
    )
}
export default Home