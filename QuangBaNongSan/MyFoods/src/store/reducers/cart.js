import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../../shared/utility';

const initialState = {
    cart : [],
    totalMoney : 0,
    error: null,
    quantityProducts: 0
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.UPDATE_CART_SUCCESS:
            var Money = 0;
            action.products.map(key =>{
                if(key[0].quantumDiscount){
                    Money += (key[0].price * (1-key[0].quantumDiscount / 100)) * key[1].quantity;
                }else{
                    Money += key[0].price*key[1].quantity;
                }
                
            });
            return updateObject(state,{
                cart: action.products,
                totalMoney: Money,
                quantityProducts: action.products.length
            });
        case actionTypes.UPDATE_CART_FAIL:
            return updateObject(state,{
                error: action.error
            });
        
        
        default:
            return state;
    }
}
export default reducer;