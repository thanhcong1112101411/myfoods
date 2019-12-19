import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../../shared/utility';

const initialState = {
    companyInf: [],
    newProductCompany:[],
    productCompany:[],
    newsList: [],
    error: null
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.FETCH_COMPANY_INFO_SUCCESS:
            return updateObject(state,{
                companyInf: action.companyInf
            });
        case actionTypes.UPDATE_CART_FAIL:
            return updateObject(state,{
                error: action.error
            });
        case actionTypes.FETCH_NEWPRODUCTS_COMPANY_SUCCESS:
            return updateObject(state,{
                newProductCompany: action.products
            });
        case actionTypes.FETCH_NEWPRODUCTS_COMPANY_FAIL:
            return updateObject(state,{
                error: action.error
            });
        case actionTypes.FETCH_PRODUCTS_COMPANY_SUCCESS:
            return updateObject(state,{
                productCompany: action.products
            });
        case actionTypes.FETCH_PRODUCTS_COMPANY_FAIL:
            return updateObject(state,{
                error: action.error
            });
        case actionTypes.FETCH_NEWS_COMPANY_SUCCESS:
            return updateObject(state,{
                newsList: action.newsList
            });
        case actionTypes.FETCH_NEWS_COMPANY_FAIL:
            return updateObject(state,{
                error: action.error
            });
        default:
            return state;
    }
}
export default reducer;