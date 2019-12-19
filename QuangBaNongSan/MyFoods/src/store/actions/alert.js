import * as actionTypes from './actionTypes';

//---------------------------------- CART ------------------------------------------------
export const putAlertCartShow = () =>{
    return{
        type: actionTypes.PUT_ALERT_CART_SHOW
    }
}
export const putAlertCartHide = () =>{
    return{
        type: actionTypes.PUT_ALERT_CART_HIDE
    }
}
//---------------------------------- LOGIN ------------------------------------------------
export const putAlertLoginShow = () =>{
    return{
        type: actionTypes.PUT_ALERT_LOGIN_SHOW
    }
}
export const putAlertLoginHide = () =>{
    return{
        type: actionTypes.PUT_ALERT_LOGIN_HIDE
    }
}