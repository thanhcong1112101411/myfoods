import * as actionTypes from './actionTypes';

//----------------------------------- COMPANY INFOR -----------------------------------
export const fetchCompany = (companyLink) =>{
    return{
        type: actionTypes.FETCH_COMPANY_HOME,
        companyLink: companyLink
    }
}
export const fetchCompanyInfSuccess = (companyInf) =>{
    return{
        type: actionTypes.FETCH_COMPANY_INFO_SUCCESS,
        companyInf: companyInf
    }
}
export const fetchCompanyInfFail = (err) =>{
    return{
        type: actionTypes.FETCH_COMPANY_INF_FAIL,
        error: err
    }
}
export const fetchNewProductCompanySuccess = (products) =>{
    return{
        type: actionTypes.FETCH_NEWPRODUCTS_COMPANY_SUCCESS,
        products: products
    }
}
export const fetchNewProductCompanyFail = (err) =>{
    return{
        type: actionTypes.FETCH_NEWPRODUCTS_COMPANY_FAIL,
        error: err
    }
}
//------------------------------ COMPANY PRODUCT ---------------------------------
export const fetchProductCompanySuccess = (products) =>{
    return{
        type: actionTypes.FETCH_PRODUCTS_COMPANY_SUCCESS,
        products: products
    }
}
export const fetchProductCompanyFail = (err) =>{
    return{
        type: actionTypes.FETCH_NEWPRODUCTS_COMPANY_FAIL,
        error: err
    }
}
//------------------------------ COMPANY PRODUCT ---------------------------------
export const fetchNewsCompanySuccess = (newsList) =>{
    return{
        type: actionTypes.FETCH_NEWS_COMPANY_SUCCESS,
        newsList: newsList
    }
}
export const fetchNewsCompanyFail = (err) =>{
    return{
        type: actionTypes.FETCH_NEWS_COMPANY_FAIL,
        error: err
    }
}

