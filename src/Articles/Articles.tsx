import React from 'react';
import Article from "./Article"
import { articles, article } from "../_data/articles-data"
import "../_styles/Articles.css"
export function Articles(props:any){
    let articlesJSX:JSX.Element[] = []
    articles.forEach((art:article) => {
        articlesJSX.push(
            <Article {...art}/>
        )
    })
    return(
        <div className="articles-content">
            <div className="content-header">
                <h1>Articles</h1>
            </div>
            <div className="articles-disclaimer">
                <p>Disclaimer: Since my english is not academic, I will proceed with german at this point because the phrasing, in my opinion, is very important at this topic. </p>
            </div>
            <div>
                {articlesJSX}
            </div>
        </div>

    )
}
export default Articles