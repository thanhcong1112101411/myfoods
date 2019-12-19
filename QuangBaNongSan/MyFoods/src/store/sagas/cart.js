import {put, call} from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions/index';

export function* addToCartSaga(action){
    const cart = yield localStorage.getItem("cart");
    const cartItem = {
        id: action.id,
        quantity: 1
    };
    if(!cart){
        const arrayCart = [];
        arrayCart.push(cartItem);
        yield localStorage.setItem("cart",JSON.stringify(arrayCart));
    }else{
        let updateCart = JSON.parse(cart);
        let index = -1;
        for(let i=0; i<updateCart.length; i++){
            if(updateCart[i].id === action.id){
                index = i;
            }
        }
        if(index === -1){
            updateCart.push(cartItem);
        }else{
            updateCart[index].quantity += 1;
        }
        yield localStorage.setItem("cart",JSON.stringify(updateCart));
    }
    yield call(updateCartSaga);
    
}
export function* updateCartSaga(){
    try{
        const cart = yield localStorage.getItem("cart");
        const data = {
            cart: JSON.parse(cart)
        };
        const res = yield axios.post('React/updateCart',data);
        const products = res.data;
        yield put(actions.updateCartSuccess(products));
    }catch(err){
        yield put(actions.updateCartFail(err));
    }
}
export function* deleteCartItemSaga(action){
    let cart = yield localStorage.getItem("cart");
    cart = JSON.parse(cart);
    var index = -1;
    for(var i=0; i<cart.length; i++){
        if(cart[i].id === action.id){
            index = i;
            break;
        }
    }
    cart.splice(index,1);
    yield localStorage.setItem("cart",JSON.stringify(cart));
    yield call(updateCartSaga);
}
export function* changeQuantityProductSaga(action){
    let cart = yield localStorage.getItem("cart");
    cart = JSON.parse(cart);
    for(var i=0; i<cart.length; i++){
        if(cart[i].id === action.id){
            cart[i].quantity = action.quantity;
        }
    }
    yield localStorage.setItem("cart",JSON.stringify(cart));
    yield call(updateCartSaga);
}