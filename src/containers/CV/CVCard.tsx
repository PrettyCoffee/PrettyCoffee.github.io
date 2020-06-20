import React from 'react';

import "./CV.css"

type props = {
    type:string,
    title:string,
    startDate:number,
    endDate:number|undefined,
    subject:string,
    details:string,
}

export function CVCard(props:props){
    var style:string
    if (props.type === "edu") {
    	style="time-education"
    } else {
    	style="time-career"
    }
    var endDate = (props.endDate === 0)? "Now" : props.endDate
    return(
        <>
            <div className={style}><span>{props.startDate} - {endDate}</span></div>
            <div className="content-body">
                <h2>{props.title}</h2>
                <p>{props.subject}</p>
                <p>{props.details}</p>
            </div>
        </>
    )
}
export default CVCard