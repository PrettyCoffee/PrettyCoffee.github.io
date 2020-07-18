export type education_item = {
    startDate:number,
    endDate:number,
    facility:string,
    subjectArea:string,
    graduation:string,
}
export const education:education_item[] = [
    {
        startDate: 2017,
        endDate:0,
        facility:"Cooperative State University Stuttgart",
        subjectArea:"Informatics",
        graduation:"Bachelor of Science",
    },
    {
        startDate: 2015,
        endDate:2017,
        facility:"Gottlieb-Daimler-Schule 2",
        subjectArea:"Industrial Design",
        graduation:"State-certified industrial design assistant; Advanced technical college certificate",
    },
    {
        startDate: 2012,
        endDate:2015,
        facility:"Steinbeisschule Stuttgart",
        subjectArea:"Carpentry",
        graduation:"Carpenter journeyman's certificate",
    },
]

export type career_item = {
    startDate:number,
    endDate:number,
    company:string,
    profession:string,
    subjects:string[],
}
export const career:career_item[] = [
    {
        startDate:2017,
        endDate:0,
        company:"heureka e-Business GmbH",
        profession:"Web-Development",
        subjects:["ColdFusion", "React", "MariaDB"],
    },
    {
        startDate:2012,
        endDate:2015,
        company:"Scheyhing Holzbau GmbH",
        profession:"Carpentry",
        subjects:[]
    },
]