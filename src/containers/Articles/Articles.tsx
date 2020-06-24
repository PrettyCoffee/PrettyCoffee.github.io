import React from 'react';
import Article from "./Article"
import { articles, article } from "../../data/articles-data"
import "./Articles.css"
export function Articles(props:any){
    let articlesJSX:JSX.Element[] = []
    articles.forEach((art:article) => {
        articlesJSX.push(
            <Article {...art}/>
        )
    })
    return(
        <>
            <div>
                <div className="content-header articles-header">
                    <h1>Articles</h1>
                </div>
                <div className="content-header articles-disclaimer">
                    <p>Disclaimer: Since my english is not academic, I will proceed with german at this point because the phrasing, in my opinion, is very important at this topic. </p>
                </div>
            </div>
            <div>
                {articlesJSX}
            </div>
        </>

    )
}
export default Articles