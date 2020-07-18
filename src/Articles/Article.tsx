import React from 'react';
import { article } from "../_data/articles-data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import defIcon from "../_ressources/default-icon.png"

export function Article(props:article){
    let date = new Date(props.date).toLocaleDateString()
console.log(props.authors.length)
    //format authors
    let authors:JSX.Element[] = [
        (props.authors.length > 1)
            ?(<>{"Autoren: "}</>)
            :(<>{"Autor: "}</>)
    ]
    props.authors.forEach((author:string) => {
        authors.push(
            <span>
                {author}
            </span>
        )
    });
    //format tags
    let topics:JSX.Element[] = []
    props.topics.forEach((topic:string) => {
        topics.push(
            <span>
                {topic}
            </span>
        )
    });

    //TODO: Responsive styling on topics -> they destroy everything if you add too much
    return(
        <>
            <div className="article-date"><span>{date}</span></div>
            <div className="content-body article-container">
                <div className="article-image"><img src={props.img?props.img:defIcon} alt="Article Thumbnail"/></div>
                <div className="article-details">
                    <h2>{props.title}</h2>
                    <div className="article-infos">
                        <div className="article-author-container">{authors}</div>
                        <div className="article-topics-container">{topics}</div>
                    </div>
                    <p className="article-abstract">
                        {props.abstract}
                    </p>
                    <a className="button article-button" href={props.url}>Go to Article <FontAwesomeIcon icon={faArrowRight}/></a>
                </div>
            </div>
        </>
    )
}
export default Article