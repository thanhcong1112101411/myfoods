import * as actionTypes from './actionTypes';

//---------------------------------- GET COMPANY NEWS ------------------------------------------------
export const getCompanyNews  = () =>{
    return{
        type: actionTypes.GET_COMPANY_NEWS
    }
}
export const getCompanyNewsSuccess = (news) =>{
    return{
        type: actionTypes.GET_COMPANY_NEWS_SUCCESS,
        news: news
    }
}
export const getCompanyNewsFail = (err) =>{
    return{
        type: actionTypes.GET_COMPANY_NEWS_FAIL,
        error: err
    }
}
//------------------------------------ ADD COMPANY NEWS ----------------------------------------------
export const addCompanyNews  = (formdata) =>{
    return{
        type: actionTypes.ADD_COMPANY_NEWS,
        formdata: formdata
    }
}
export const addCompanyNewsSuccess = (alertAddNews) =>{
    return{
        type: actionTypes.ADD_COMPANY_NEWS_SUCCESS,
        alertAddNews: alertAddNews
    }
}
export const addCompanyNewsFail = (err) =>{
    return{
        type: actionTypes.ADD_COMPANY_NEWS_FAIL,
        error: err
    }
}
//------------------------------------ DELETE COMPANY NEWS ----------------------------------------------
export const deleteCompanyNews  = (idNews) =>{
    return{
        type: actionTypes.DELETE_COMPANY_NEWS,
        idNews: idNews
    }
}
export const deleteCompanyNewsSuccess = (alertDeleteNews) =>{
    return{
        type: actionTypes.DELETE_COMPANY_NEWS_SUCCESS,
        alertDeleteNews: alertDeleteNews
    }
}
export const deleteCompanyNewsFail = (err) =>{
    return{
        type: actionTypes.DELETE_COMPANY_NEWS_FAIL,
        error: err
    }
}





