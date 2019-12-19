import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../../shared/utility';

const initialState = {
    companySearch: [],
    productSearch: [],
    catagorySearch: [],
    error: null
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.GET_INFO_SEARCH_SUCCESS:
            return updateObject(state,{
                companySearch: action.value["companySearch"],
                productSearch: action.value["productSearch"],
                catagorySearch: action.value["catagorySearch"]
            });
        case actionTypes.GET_INFO_SEARCH_FAIL:
            return updateObject(state,{
                error: action.error
            });
        default:
            return state
    }
}
export default reducer;