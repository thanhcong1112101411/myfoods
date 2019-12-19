import * as actionTypes from './actionTypes';

//---------------------------------- GET NEWS ------------------------------------------------
export const fetchNews  = () =>{
    return{
        type: actionTypes.FETCH_NEWS
    }
}
export const fetchNewsSuccess = (news) =>{
    return{
        type: actionTypes.FETCH_NEWS_SUCCESS,
        news: news
    }
}
export const fetchNewsFail = (err) =>{
    return{
        type: actionTypes.FETCH_NEWS_FAIL,
        error: err
    }
}
//-------------------------------- FETCH NEWS DETAIL -------------------------------------------
export const fetchNewsDetail  = (linkNews) =>{
    return{
        type: actionTypes.FETCH_NEWS_DETAIL,
        linkNews: linkNews
    }
}
export const fetchNewsDetailSuccess = (newsDetail) =>{
    return{
        type: actionTypes.FETCH_NEWS_DETAIL_SUCCESS,
        newsDetail: newsDetail
    }
}
export const fetchNewsDetailFail = (err) =>{
    return{
        type: actionTypes.FETCH_NEWS_DETAIL_FAIL,
        error: err
    }
}
