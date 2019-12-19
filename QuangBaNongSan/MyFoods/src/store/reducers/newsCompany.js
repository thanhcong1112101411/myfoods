import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../../shared/utility';

const initialState = {
    news: [],
    error: null
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.GET_COMPANY_NEWS_SUCCESS:
            return updateObject(state,{
                news: action.news
            });
        case actionTypes.GET_COMPANY_NEWS_FAIL:
            return updateObject(state,{
                error: action.error
            });
        
        default:
            return state
    }
}
export default reducer;