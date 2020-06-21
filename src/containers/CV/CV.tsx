import React from 'react';
import CVCard from "./CVCard"

import teacher from "../../ressources/Teacher.png"
import "./CV.css"
import {education_item, education, career_item, career} from "../../data/cv-data"

export function CV(props:any){

    //Get CVCard with career details
    let renderCareerElem = (elem:career_item) => {
        let subjects:string = ""
        if (elem.subjects) {
            elem.subjects.forEach(subject => {
                subjects += subject+"; "
            });
        }
        return (
            <CVCard
                type={"car"}
                title={elem.company}
                startDate={elem.startDate}
                endDate={elem.endDate}
                subject={elem.profession}
                details={subjects}
            />
        )
    }
            
    //Get CVCard with education details
    let renderEducationElem = (elem:education_item) => {
        return (
            <CVCard
                type={"edu"}
                title={elem.facility}
                startDate={elem.startDate}
                endDate={elem.endDate}
                subject={elem.subjectArea}
                details={elem.graduation}
            />
        )
    }

    //Get alle rows of cv
    let rows:JSX.Element[] = []
    let curEdu = 0
    let curCar = 0
    for (;true;) {
        if (education[curEdu] && career[curCar] && education[curEdu].endDate === career[curCar].endDate) {
            rows.push(
                <div className="cv-row">
                    {renderCareerElem(career[curCar])}
                    {renderEducationElem(education[curEdu])}
                </div>
            )
            curEdu++
            curCar++
        } else {
            if (!education[curEdu]
                || career[curCar].endDate === 0
                || (career[curCar] && career[curCar].endDate > education[curEdu]?.endDate)) {
                rows.push(
                    <div className="cv-row">
                        {renderCareerElem(career[curCar])}
                        <span className="empty-cv-card"></span>
                    </div>
                )
                curCar++
            } else if (education[curEdu]) {
                rows.push(
                    <div className="cv-row">
                        <span className="empty-cv-card"></span>
                        {renderEducationElem(education[curEdu])}
                    </div>
                )
                curEdu++
            }
        }
        if (curEdu === education.length && curCar === career.length) {
            break;
        }
    }

    return(
        <>
            <div className="cv-content">
                <div className="cv-row">
                    <div className="content-header cv-desktop-header">
                        <h1>Career</h1>
                    </div>
                    <div className="content-header cv-desktop-header">
                        <h1>Education</h1>
                    </div>
                    <div className="content-header cv-mobile-header">
                        <h1>{"Career|Education"}</h1>
                    </div>
                    <div className="teacher"><img alt="" src={teacher}/></div>
                </div>
                {rows}
            </div>
        </>
    )
}
export default CV