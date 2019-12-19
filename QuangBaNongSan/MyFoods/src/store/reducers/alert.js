import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../../shared/utility';

const initialState = {
    alertCart: false,
    alertLogin: false
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.PUT_ALERT_CART_SHOW:
            return updateObject(state,{
                alertCart: true
            });
        case actionTypes.PUT_ALERT_CART_HIDE:
            return updateObject(state,{
                alertCart: false
            });
        case actionTypes.PUT_ALERT_LOGIN_SHOW:
            return updateObject(state,{
                alertLogin: true
            });
        case actionTypes.PUT_ALERT_LOGIN_HIDE:
            return updateObject(state,{
                alertLogin: false
            })
        default:
            return state;
    }
}
export default reducer;