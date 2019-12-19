import * as actionTypes from './actionTypes';

//---------------------------------- SELLING PRODUCT (0) ------------------------------------------------
export const fetchProductSellingCompany  = (idCompany) =>{
    return{
        type: actionTypes.FETCH_PRODUCTS_SELLING_COMPANY,
        idCompany: idCompany
    }
}
export const fetchProductSellingCompanySuccess = (products) =>{
    return{
        type: actionTypes.FETCH_PRODUCTS_SELLING_COMPANY_SUCCESS,
        products: products
    }
}
export const fetchProductSellingCompanyFail = (err) =>{
    return{
        type: actionTypes.FETCH_PRODUCTS_SELLING_COMPANY_FAIL,
        error: err
    }
}
//---------------------------------- HIDDEN PRODUCT (1) ------------------------------------------------
export const fetchProductHiddenCompany  = (idCompany) =>{
    return{
        type: actionTypes.FETCH_PRODUCTS_HIDDEN_COMPANY,
        idCompany: idCompany
    }
}
export const fetchProductHiddenCompanySuccess = (products) =>{
    return{
        type: actionTypes.FETCH_PRODUCTS_HIDDEN_COMPANY_SUCCESS,
        products: products
    }
}
export const fetchProductHiddenCompanyFail = (err) =>{
    return{
        type: actionTypes.FETCH_PRODUCTS_HIDDEN_COMPANY_FAIL,
        error: err
    }
}
//----------------------------------- PUBLIC INFO PRODUCTS ------------------------------------------------
export const getPublicInfoProducts  = () =>{
    return{
        type: actionTypes.GET_PUBLLIC_INFO_PRODUCTS
    }
}
export const getPublicInfoProductsSuccess = (info) =>{
    return{
        type: actionTypes.GET_PUBLLIC_INFO_PRODUCTS_SUCCESS,
        info: info
    }
}
export const getPublicInfoProductsFail = (err) =>{
    return{
        type: actionTypes.GET_PUBLLIC_INFO_PRODUCTS_FAIL,
        error: err
    }
}
//----------------------------------- ADD PRODUCT ------------------------------------------------
export const addProduct  = (formdata) =>{
    return{
        type: actionTypes.ADD_PRODUCT,
        formdata: formdata
    }
}
export const addProductSuccess = (addAlert) =>{
    return{
        type: actionTypes.ADD_PRODUCT_SUCCESS,
        addAlert: addAlert
    }
}
export const addProductFail = (err) =>{
    return{
        type: actionTypes.ADD_PRODUCT_FAIL,
        error: err
    }
}
//-------------------------------------- DELETE PRODUCT ----------------------------------------------------
export const deleteProduct = (id) =>{
    return{
        type: actionTypes.DELETE_PRODUCT,
        id: id
    }
}
//------------------------------------ GET UPDATE PRODUCT INFORMATION ---------------------------------------
export const getUpdateProductInf  = (idProduct) =>{
    return{
        type: actionTypes.GET_UPDATE_PRODUCT_INF,
        idProduct: idProduct
    }
}
export const getUpdateProductInfSuccess = (productInf) =>{
    return{
        type: actionTypes.GET_UPDATE_PRODUCT_INF_SUCCESS,
        productInf: productInf
    }
}
export const getUpdateProductInfFail = (err) =>{
    return{
        type: actionTypes.GET_UPDATE_PRODUCT_INF_FAIL,
        error: err
    }
}
//----------------------------------- UPDATE PRODUCT ------------------------------------------------
export const updateProduct  = (formdata,idProduct) =>{
    return{
        type: actionTypes.UPDATE_PRODUCT,
        formdata: formdata,
        idProduct: idProduct
    }
}
export const updateProductSuccess = (updateAlert) =>{
    return{
        type: actionTypes.UPDATE_PRODUCT_SUCCESS,
        updateAlert: updateAlert
    }
}
export const updateProductFail = (err) =>{
    return{
        type: actionTypes.UPDATE_PRODUCT_FAIL,
        error: err
    }
}



