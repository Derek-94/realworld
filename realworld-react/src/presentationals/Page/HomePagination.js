import React from "react";
import { fetchArticleData } from "../../containers/ApiContainer/Api";
import { useRecoilValue, useSetRecoilState } from "recoil"
import { currentPageState } from "../Home/Home"

const MakeButton = () => {
    const fullArticleDataPagination = useRecoilValue(fetchArticleData(0));
    const setPageIndex = useSetRecoilState(currentPageState);

    const totalArticleCnt = fullArticleDataPagination.articlesCount;
    const pageCnt = totalArticleCnt / 20;

    return (
        [...Array(pageCnt)].map((n, index) => 
            <button key = {index} className = "pagination-button" onClick = { () => {
                setPageIndex(index)
            }}>{index + 1}</button>
        )
    );
}

const HomePagination = () => {
    return(
        <div className = "home-pagination" style = {{
            display: "flex", justifyContent: "center", flexWrap: "wrap"
        }}>
            <MakeButton />
        </div>
    );
}

export default HomePagination;