import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPortrait, faGamepad, faDumbbell } from '@fortawesome/free-solid-svg-icons'

import "./About.css"
import me from "../../ressources/me.png"
import fitness from "../../ressources/fitness.png"
import darksouls from "../../ressources/dark-souls.png"
//import bouldering from "../../ressources/bouldering.png"
import music from "../../ressources/music.png"


export function About(props:any){
    //let age = new Date('1996-05-17T00:00:00')
    let birthday = new Date(1996, 4, 17)
    let age = (new Date().getTime() - birthday.getTime()) / 1000 / 60 / 60 / 24 / 365
    //let age = Math.floor(new Date() - birthday)
    return(
        <div>
            <div className="content-header content-header-me">
                <h1>About Me</h1>
            </div>
            <div className="pic-r"><img alt="" src={me}/></div>
            <div className="content-body content-body-me">
                <h2>Details <FontAwesomeIcon className="h2-icon" icon={faPortrait}/></h2>
                <p>
                    Jonathan<br/>
                    {Math.floor(age)} years old<br/>
                    B.Sc. Informatics<br/>
                    Web-Developer<br/>
                </p>
            </div>
            <div className="pic-l"><img alt="" src={fitness}/></div>
            <div className="content-body content-body-me">
                <h2>Sports <FontAwesomeIcon className="h2-icon" icon={faDumbbell}/></h2>
                <p>
                    {"//TODO: Write something"}
                </p>
            </div>
            <div className="pic-r"><img alt="" src={darksouls}/></div>
            <div className="content-body content-body-me">
                <h2>Games <FontAwesomeIcon className="h2-icon" icon={faGamepad}/></h2>
                <p>
                    {"//TODO: Write something"}
                </p>
            </div>
            <div className="pic-l"><img alt="" src={music}/></div>
            <div className="content-body content-body-me">
                <h2>Music I <FontAwesomeIcon className="h2-icon" icon={faHeart}/></h2>
                <p>
                    {"//TODO: Write something"}
                </p>
            </div>
        </div>
    )
}
export default About