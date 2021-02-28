import React from "react";
import { useRecoilValue } from "recoil";
import { fetchArticleData } from "../ApiContainer/Api";

const EachArticle = ({author, createdAt, description, favoritesCount, title}) => {
    return(
        <div className="article-preview">
            <div className="article-meta">  
                <a href="profile.html"><img src={author.image} /></a>
                <div className="info">
                    <a href="" className="author">{author.username}</a>
                    <span className="date">{createdAt}</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> {favoritesCount}
                </button>
            </div>
            <a href="" className="preview-link">
                <h1>{title}</h1>
                <p>{description}</p>
                <span>Read more...</span>
            </a>
        </div>
    );
}

const HomeContainer = ({currentPage}) => {
    const fullArticleData = useRecoilValue(fetchArticleData(currentPage));

    return (
        <>
            {
                fullArticleData.articles.map(data => 
                    <EachArticle 
                        key = {data.slug} /* temporary key! */
                        author = {data.author}
                        createdAt = {data.createdAt}
                        description = {data.description}
                        favoritesCount = {data.favoritesCount}
                        title = {data.title}
                    />
                )
            }
        </>
    );
}

export default HomeContainer;