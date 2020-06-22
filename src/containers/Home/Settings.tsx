import React from 'react';

import Colorpicker from "./Colorpicker"
import "./Settings.css"

type props = {
    handleColorChange: (key: string, color: string) => void,
}

export function Settings(props:props){
    //Todo: Colorpicker für eigene Farben und in Local Storage
    return(
        <>
            <div className="content-body">
                <Colorpicker
                    handleColorChange={props.handleColorChange}
                    var="bg-color"
                    defaultValue="rgba(46,46,46,255)"
                />
                <Colorpicker
                    handleColorChange={props.handleColorChange}
                    var="default-color"
                    defaultValue="rgba(230,230,230,255)"
                />
                <Colorpicker
                    handleColorChange={props.handleColorChange}
                    var="accent-color"
                    defaultValue="rgba(50,200,150,.3)"
                />
                <Colorpicker
                    handleColorChange={props.handleColorChange}
                    var="accent-color2"
                    defaultValue="rgba(200, 50, 50, 0.3)"
                />
            </div>
        </>
    )
}
export default Settings