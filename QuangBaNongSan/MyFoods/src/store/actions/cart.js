import * as actionTypes from './actionTypes';

//---------------------------------------- ADD TO CART --------------------------------------
export const addToCart = (id) =>{
    return{
        type: actionTypes.ADD_TO_CART,
        id: id
    }
}
//---------------------------------------- UPDATE CART --------------------------------------
export const updateCart = () =>{
    return{
        type: actionTypes.UPDATE_CART
    }
}
export const updateCartSuccess = (products) =>{
    return{
        type: actionTypes.UPDATE_CART_SUCCESS,
        products: products
    }
}
export const updateCartFail = (error) =>{
    return{
        type: actionTypes.UPDATE_CART_FAIL,
        error: error
    }
}
//---------------------------------------- DELETE CART ITEM --------------------------------------
export const deleteCartItem = (id) =>{
    return{
        type: actionTypes.DELETE_CART_ITEM,
        id: id
    }
}
//---------------------------------------- CHANGE QUANTITY PRODUCT --------------------------------------
export const changeQuantityProduct = (id,quantity) =>{
    return{
        type: actionTypes.CHANGE_QUANTITY_PRODUCT,
        id: id,
        quantity: quantity
    }
}
