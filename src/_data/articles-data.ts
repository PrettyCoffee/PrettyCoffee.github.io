import react_coldfusion from "../_ressources/react_coldfusion.png"

export type article = {
    img:string|undefined,
    date:string,
    title:string,
    abstract:string,
    text?:string|undefined,
    url:string|undefined,
    topics:string[],
    authors:string[]
}
export const articles:article[] = [
    {
        img:        react_coldfusion,
        date:       "2020-03-06",
        title:      "Webentwicklung mit ColdFusion und ReactJS",
        abstract:   "In diesem Artikel soll dargelegt werden, wie eine moderne Webapplikation mit den Sprachen ColdFusion und React programmiert werden kann. Hierbei wird ebenso das Prinzip von Rest APIs und einer Möglichkeit der Authentifizierung betrachtet.",
        text:       undefined,
        url:        "https://www.heureka.com/de/fachartikel/webentwicklung-mit-coldfusion-und-reactjs",
        topics:     ["ColdFusion", "React", "Rest API", "JSON Web Token"],
        authors:    ["Jonathan Holz"]
    },
]