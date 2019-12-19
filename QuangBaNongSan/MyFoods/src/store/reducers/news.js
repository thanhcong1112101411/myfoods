import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../../shared/utility';

const initialState = {
    news: [],
    newsDetail: [],
    error: null
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.FETCH_NEWS_SUCCESS:
            return updateObject(state,{
                news: action.news
            });
        case actionTypes.FETCH_NEWS_FAIL:
            return updateObject(state,{
                error: action.error
            });
        case actionTypes.FETCH_NEWS_DETAIL_SUCCESS:
            return updateObject(state,{
                newsDetail: action.newsDetail
            });
        case actionTypes.FETCH_NEWS_DETAIL_FAIL:
            return updateObject(state,{
                error: action.error
            });
        
        default:
            return state
    }
}
export default reducer;