import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../../shared/utility';

const initialState = {
    sellingProducts: [],
    hiddenProducts: [],
    catagory: [],
    brand: [],
    unit: [],
    addAlert : 0,
    updateAlert: 0,
    updateProductInf: [],
    error: null
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.FETCH_PRODUCTS_SELLING_COMPANY_SUCCESS:
            return updateObject(state,{
                sellingProducts: action.products
            });
        case actionTypes.FETCH_PRODUCTS_SELLING_COMPANY_FAIL:
            return updateObject(state,{
                error: action.error
            });
        case actionTypes.FETCH_PRODUCTS_HIDDEN_COMPANY_SUCCESS:
            return updateObject(state,{
                hiddenProducts: action.products
            });
        case actionTypes.FETCH_PRODUCTS_HIDDEN_COMPANY_FAIL:
            return updateObject(state, {
                error: action.error
            });
        case actionTypes.GET_PUBLLIC_INFO_PRODUCTS_SUCCESS:
            return updateObject(state,{
                catagory: action.info.catagory,
                unit: action.info.unit,
                brand: action.info.brand
            });
        case actionTypes.GET_PUBLLIC_INFO_PRODUCTS_FAIL:
            return updateObject(state, {
                error: action.error
            });
        case actionTypes.ADD_PRODUCT_SUCCESS:
            return updateObject(state,{
                addAlert: action.addAlert
            });
        case actionTypes.ADD_PRODUCT_FAIL:
            return updateObject(state, {
                error: action.error
            });
        case actionTypes.GET_UPDATE_PRODUCT_INF_SUCCESS:
            return updateObject(state,{
                updateProductInf: action.productInf
            });
        case actionTypes.GET_UPDATE_PRODUCT_INF_FAIL:
            return updateObject(state, {
                error: action.error
            });
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return updateObject(state,{
                updateAlert: action.updateAlert
            });
        case actionTypes.UPDATE_PRODUCT_FAIL:
            return updateObject(state, {
                error: action.error
            });
        default:
            return state
    }
}
export default reducer;