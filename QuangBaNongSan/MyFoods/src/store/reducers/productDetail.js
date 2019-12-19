import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../../shared/utility';

const initialState = {
    productDetail: [],
    loading: false,
    error: null
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.FETCH_PRODUCTS_DETAIL_START:
            return updateObject(state,{
                loading: true
            });
        case actionTypes.FETCH_PRODUCTS_DETAIL_SUCCESS:
            return updateObject(state,{
                loading: false,
                productDetail: action.productDetail
            })
        case actionTypes.FETCH_PRODUCTS_DETAIL_FAIL:
            return updateObject(state,{
                loading: false,
                error: action.error
            })
        
        default:
            return state
    }
}
export default reducer;