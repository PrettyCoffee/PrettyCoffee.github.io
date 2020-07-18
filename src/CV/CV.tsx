import React, { useState, useEffect } from 'react';
import CVCard from "./CVCard"
import Tabbar from "../_components/Tabbar"

import "../_styles/CV.css"
import {career, education} from "../_data/cv-data"

export default function CV(props:any){
    const [display, setDisplay]:"career"|"education"|any = useState("career")
    const [cvItems, setCvItems]:JSX.Element[]|any = useState([])

    useEffect(()=>{
        let tmpItems:JSX.Element[] = []
        if (display === "career") {
            career.forEach(elem => {
                let subjects:string = ""
                if (elem.subjects) {
                    elem.subjects.forEach(subject => {
                        subjects += subject+"; "
                    });
                }
                tmpItems.push(
                    <CVCard
                        title={elem.company}
                        startDate={elem.startDate}
                        endDate={elem.endDate}
                        subject={elem.profession}
                        details={subjects}
                    />
                )
            });
        } else if (display ==="education") {
            education.forEach(elem => {
                tmpItems.push(
                    <CVCard
                    title={elem.facility}
                    startDate={elem.startDate}
                    endDate={elem.endDate}
                    subject={elem.subjectArea}
                    details={elem.graduation}
                />
                )
            })
        }

        setCvItems([...tmpItems])
    },[display])

    return(
        <>
            <div className="cv-content">
                <Tabbar 
                    tabs={[
                        {
                            key:"career",
                            content:<h1>Career</h1>,
                            actionValue:"career",
                            action:setDisplay
                        },
                        {
                            key:"education",
                            content:<h1>Education</h1>,
                            actionValue:"education",
                            action:setDisplay
                        },
                    ]}
                />
                {cvItems}
            </div>
        </>
    )
}