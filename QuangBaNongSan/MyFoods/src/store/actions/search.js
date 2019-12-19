import * as actionTypes from './actionTypes';

export const putInputSearchStorage = (searchValue) =>{
    return{
        type: actionTypes.PUT_INPUT_SEARCH_STORAGE,
        searchValue: searchValue
    }
}
//------------------------------ GET INFO SEARCH -------------------------------
export const getInfoSearch = () =>{
    return{
        type: actionTypes.GET_INFO_SEARCH
    }
}
export const getInfoSearchSuccess = (value) =>{
    return{
        type: actionTypes.GET_INFO_SEARCH_SUCCESS,
        value: value
    }
}
export const getInfoSearchFail = (err) =>{
    return{
        type: actionTypes.GET_INFO_SEARCH_FAIL,
        error: err
    }
}
