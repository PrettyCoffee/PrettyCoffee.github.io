import React, { useState, useEffect } from "react";
import Switch from '@material-ui/core/Switch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faGitlab, faXing } from '@fortawesome/free-brands-svg-icons'

import { toastAction } from "../_components/Toastify"
import "../_styles/Navbar.css"

type themeObj = {
    [key:string]:string
	'bg-color':string,
	'default-color':string,
	'accent-color':string,
	'accent-color2':string,
}
type themeCollection = {
    [name:string]:themeObj,
}
const themes:themeCollection = {
    "light":{
        'bg-color': "rgba(220,220,220,1)",
        'default-color': "rgba(40,40,40,1)",
        'accent-color': "rgba(15, 50, 40, 0.3)",
        'accent-color2': "rgba(50, 15, 15, 0.3)",
    },
    "dark":{
        'bg-color': "rgba(40,40,40,1)",
        'default-color': "rgba(220,220,220,1)",
        'accent-color': "rgba(150, 255, 255, 0.3)",
        'accent-color2': "rgba(255, 170, 170, 0.3)",
    },
}
type props = {
    setCurrPage: (page:string) => void
}
export default function Navbar(props:props) {
    const [theme, setTheme]:"light"|"dark"|any = useState("light")
    
    //Prepare colors
    var root = document.documentElement
    useEffect(()=>{
        var lsTheme = localStorage.getItem("theme")
        if (lsTheme) {
            setTheme(lsTheme)
        }
    }, [])

    useEffect(()=>{
        Object.keys(themes[theme]).forEach(key => {
            root.style.setProperty("--"+key, themes[theme][key])
        })
    },[theme, root.style])

	var handleThemeChange = (checked:boolean) => {
        let newTheme = (checked)?"dark":"light"
        localStorage.setItem("theme", newTheme)
        setTheme(newTheme)
        toastAction('Theme changed to '+newTheme)
    }

	return (
        <div className="navbar">
            <a className="home-button" onClick={() => props.setCurrPage("")}><FontAwesomeIcon icon={faHome}/></a>
            <a href="MailTo:jonathan-holz@outlook.com">
                <FontAwesomeIcon  icon={faEnvelope}/>
            </a>
            <a href="https://www.xing.com/profile/Jonathan_Holz2/cv">
                <FontAwesomeIcon  icon={faXing}/>
            </a>
            <a href="https://github.com/PrettyCoffee">
                <FontAwesomeIcon  icon={faGithubAlt}/>
            </a>
            <a href="https://gitlab.com/PrettyCoffee">
                <FontAwesomeIcon  icon={faGitlab}/>
            </a>
            <div className="theme-switch">
                <Switch
                    checked={theme==="dark"}
                    onChange={(e)=>handleThemeChange(e.target.checked)}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </div>
        </div>
	);
}