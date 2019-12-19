import * as actionTypes from './actionTypes';

// --------------------------------------- fetch products Detail -------------------------------------------
export const fetchProductDetail = (src) =>{
    return{
        type: actionTypes.FETCH_PRODUCTS_DETAIL,
        src: src
    }
}
export const fetchProductDetailStart = () =>{
    return{
        type: actionTypes.FETCH_PRODUCTS_DETAIL_START
    }
}
export const fetchProductDetailSuccess = (productDetail) =>{
    return{
        type: actionTypes.FETCH_PRODUCTS_DETAIL_SUCCESS,
        productDetail: productDetail
    }
}
export const fetchProductDetailFail = (error) =>{
    return{
        type: actionTypes.FETCH_PRODUCTS_DETAIL_FAIL,
        error: error
    }
}