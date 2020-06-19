import React from 'react';

import "./About.css"
import me from "../../ressources/me-effect.png"

export function About(props:any){
    return(
        <div>
            <div className="pic1"><img alt="" src={me}/></div>
        </div>
    )
}
export default About