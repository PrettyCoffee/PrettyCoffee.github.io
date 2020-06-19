import React from 'react';
import CVCard from "./CVCard"

import teacher from "../../ressources/Teacher.png"
import "./CV.css"
import {education_item, education, career_item, career} from "../../data/cv-data"


export function CV(props:any){
    //Get career
    var renderCareerElem = (elem:career_item) => {
        var subjects:string = ""
        if (elem.subjects !== undefined) {
            elem.subjects.forEach(subject => {
                subjects += subject+"; "
            });
        }
        return (
            <CVCard
                expand={true}
                type={"car"}
                title={elem.company}
                startDate={elem.startDate}
                endDate={elem.endDate}
                subject={elem.profession}
                details={subjects}
            />
        )
    }
    var career_items:JSX.Element[] = []
    career.forEach((elem) => {
        career_items.push(renderCareerElem(elem))
    })

    //Get education
    var renderEducationElem = (elem:education_item) => {
        return (
            <CVCard
                expand={true}
                type={"edu"}
                title={elem.facility}
                startDate={elem.startDate}
                endDate={elem.endDate}
                subject={elem.subjectArea}
                details={elem.graduation}
            />
        )
    }
    var education_items:JSX.Element[] = []
    education.forEach((elem:education_item) => {
        education_items.push(renderEducationElem(elem))
    })

    return(
        <>
            <div className="teacher"><img alt="" src={teacher}/></div>
            <div className="cv-row">
                <div>
                    <div className="content-header">
                        <h1>Career</h1>
                    </div>
                    {career_items}
                </div>
                <div>
                    <div className="content-header">
                        <h1>Education</h1>
                    </div>
                    {education_items}
                </div>
            </div>
        </>
    )
}
export default CV