import {put} from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions/index';

export function* fetchProductsSaga(action){
	yield put(actions.fetchProductsStart());
	const filterItems = {
		portfolios: localStorage.getItem("portfolios"),
		price: localStorage.getItem("price"),
		searchValue: localStorage.getItem("searchValue")
	}
	try{
		const res = yield axios.post('React/filterProducts',filterItems);
		const pageQuantum = res.data.length;
		const fetchedProducts = [];
        for (let key in res.data) {
            fetchedProducts.push(res.data[key]);
		}
        yield put(actions.fetchProductsSuccess(fetchedProducts,pageQuantum));
	}catch(err){
		yield put(actions.fetchProductsFail(err));
	}
}
export function* fetchPortfoliosSaga(action){
	try{
		const res = yield axios.get('React/catagory');
		const fetchedPortfolios = [];
        for (let key in res.data) {
            fetchedPortfolios.push({
				...res.data[key],
				checked: false
			});
		}
        yield put(actions.fetchPortfoliosSuccess(fetchedPortfolios));
	}catch(err){
		yield put(actions.fetchPortfoliosFail(err));
	}
}
export function* putPortfoliosStorageSaga(action){
    yield localStorage.setItem("portfolios", action.portfolios);
}
export function* putPriceStorageSaga(action){
    yield localStorage.setItem("price", action.price);
}