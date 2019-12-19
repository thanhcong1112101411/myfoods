import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../../shared/utility';

const initialState = {
    sellProducts: [],
    newProducts: [],
    loading: false,
    error: null,
    path: ""
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.FETCH_SELLPRODUCTS_START:
            return updateObject(state, {loading: true});
        
        case actionTypes.FETCH_SELLPRODUCTS_SUCCESS:
            return{
                ...state,
                loading: false,
                sellProducts: action.products
            };
        
        case actionTypes.FETCH_SELLPRODUCTS_FAIL:
            return{
                ...state,
                loading: false,
                error: action.error
            };
        case actionTypes.FETCH_NEWPRODUCTS_START:
            return updateObject(state,{
                loading: true
            });
        case actionTypes.FETCH_NEWPRODUCTS_SUCCESS:
            return updateObject(state,{
                loading: false,
                newProducts: action.products
            });
        case actionTypes.FETCH_NEWPRODUCTS_FAIL:
            return updateObject(state,{
                loading: false,
                error: action.error
            });
        case actionTypes.SET_PATH:
            return updateObject(state,{
                path: action.path
            });
        
        default:
            return state;
    }
}
export default reducer;