import React from 'react';

type props = {
    title:string,
    startDate:number,
    endDate:number|undefined,
    subject:string,
    details:string,
}

export function CVCard(props:props){
    var endDate = (props.endDate === 0)? "Now" : props.endDate
    return(
        <>
            <div className="time-cv"><span>{props.startDate} - {endDate}</span></div>
            <div className="content-body cvCard">
                <h2>{props.title}</h2>
                <p>{props.subject}</p>
                <p>{props.details}</p>
            </div>
        </>
    )
}
export default CVCard