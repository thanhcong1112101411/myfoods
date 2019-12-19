import {put} from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions/index';

export function* fetchSellProductsSaga(action){
	yield put(actions.fetchSellProductsStart());
	const quantity = {
		quantity: action.quantity
	};
	try{
		const res = yield axios.post('React/sellProducts', quantity);
		const fetchedProducts = [];
        for (let key in res.data) {
            fetchedProducts.push(res.data[key]);
		}
        yield put(actions.fetchSellProductsSuccess(fetchedProducts));
	}catch(err){
		yield put(actions.fetchSellProductsFail(err));
	}
}
export function* fetchNewProductsSaga(action){
	yield put(actions.fetchNewProductsStart());
	const quantity = {
		quantity: action.quantity
	};
	try{
		const res = yield axios.post('React/newProducts', quantity);
		const fetchedProducts = [];
        for (let key in res.data) {
            fetchedProducts.push(res.data[key]);
		}
        yield put(actions.fetchNewProductsSuccess(fetchedProducts));
	}catch(err){
		yield put(actions.fetchNewProductsFail(err));
	}
}