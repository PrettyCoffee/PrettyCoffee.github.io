import React, {useState} from 'react';
import { SwatchesPicker } from 'react-color';
import {getColors} from "./colors"

type props = {
    handleColorChange: (key: string, color: string) => void,
    var:string,
    defaultValue:string,
}

export function Settings(props:props){
    const [displayColorPicker, setDisplayColorPicker]:boolean | any = useState(false)
    const [color, setColor]:string | any = useState(props.defaultValue)
    
    var handleClick = () => {
        setDisplayColorPicker(!displayColorPicker)
    }
    
    var handleClose = () => {
        setDisplayColorPicker(false)
    }
    
    var handleChange = (c:any) => {
        props.handleColorChange(props.var, "rgba("+c.rgb.r+", "+c.rgb.g+", "+c.rgb.b+", "+c.rgb.a+")")
    }
    
    //Todo: Colorpicker für eigene Farben und in Local Storage
    
    return(
        <div>
            <p>{props.var}</p>
            <div className="swatch" onClick={handleClick}>
                <div className={props.var} />
            </div>
            {displayColorPicker? 
            <div className="popover">
                <div className="cover" onClick={handleClose}/>
                <SwatchesPicker colors={getColors()} onChange={handleChange} />
            </div> : null }
        </div>
    )
}
export default Settings