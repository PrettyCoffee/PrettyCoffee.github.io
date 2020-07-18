import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPortrait, faGamepad, faDumbbell } from '@fortawesome/free-solid-svg-icons'

import "../_styles/About.css"
import me from "../_ressources/me.png"
import fitness from "../_ressources/fitness.png"
import darksouls from "../_ressources/dark-souls.png"
//import bouldering from "../_ressources/bouldering.png"
import music from "../_ressources/music.png"


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
                    German | English<br/>
                </p>
            </div>
            <div className="pic-l"><img alt="" src={fitness}/></div>
            <div className="content-body content-body-me">
                <h2>Sports <FontAwesomeIcon className="h2-icon" icon={faDumbbell}/></h2>
                <p>
                In my opinion, sport is important for mental health and the body itself.<br/>
                That's one of the reasons why I do both bouldering and climbing - besides my little obsession of it.
                </p>
            </div>
            <div className="pic-r"><img alt="" src={darksouls}/></div>
            <div className="content-body content-body-me">
                <h2>Videogames <FontAwesomeIcon className="h2-icon" icon={faGamepad}/></h2>
                <p>
                Videogames are a great hobby to calm down and train your mind. <br/>
                Besides ARPGs like Dark Souls I am also playing rythm games like Beat-Saber. And much more if there is enough spare time left!
                </p>
            </div>
            <div className="pic-l"><img alt="" src={music}/></div>
            <div className="content-body content-body-me">
                <h2>Music I <FontAwesomeIcon className="h2-icon" icon={faHeart}/></h2>
                <p>
                    I am always listening to music because it fits every mood. I have been jumping between many genres the last years. To name some of them:<br/>
                    - Doom/Black Metal<br/>
                    - Lofi Hip-Hop<br/>
                    - Videogame Soundtracks<br/>
                    - Speedcore<br/>
                </p>
            </div>
        </div>
    )
}
export default About