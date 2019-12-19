import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../../shared/utility';

const initialState = {
    products: [],
    portfolios: [],
    loading: false,
    error: null,
    pageQuantum: 1
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.FETCH_PRODUCTS_START:
            return updateObject(state,{
                loading: true
            });
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return updateObject(state,{
                products: action.products,
                loading: false,
                pageQuantum: action.pageQuantum
            });
        case actionTypes.FETCH_PRODUCTS_FAIL:
            return updateObject(state,{
                loading: false,
                error: action.error
            });
        case actionTypes.FETCH_PORTFOLIOS_SUCCESS:
            return updateObject(state,{
                portfolios: action.portfolios
            });
        case actionTypes.FETCH_PORTFOLIOS_FAIL:
            return updateObject(state, {
                error: action.error
            });
        case actionTypes.CHECK_PORTFOLIO_ITEMS:
            for(let i = 0; i<state.portfolios.length; i++){
                if(state.portfolios[i].IdCatagory === action.portfolioId){
                    const updateItem = state.portfolios[i];
                    if(updateItem.checked === false){
                        updateItem.checked = true;
                        continue;
                    }else{
                        updateItem.checked = false;
                        continue;
                    }
                }
            }
            return state
            
        default:
            return state
    }
}
export default reducer;