import {put,call} from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions/index';

export function* fetchProductSellingCompanySaga(){
	const info = {
        idCompany: sessionStorage.getItem("idCompany"),
        hidden: 0
	}
	try{
		const res = yield axios.post('React/companyProductsAdmin',info);
		const fetchedProducts = [];
        for (let key in res.data) {
            fetchedProducts.push(res.data[key]);
		}
        yield put(actions.fetchProductSellingCompanySuccess(fetchedProducts));
	}catch(err){
		yield put(actions.fetchProductSellingCompanyFail(err));
	}
}
export function* fetchProductHiddenCompanySaga(){
	const info = {
        idCompany: sessionStorage.getItem("idCompany"),
        hidden: 1
	}
	try{
		const res = yield axios.post('React/companyProductsAdmin',info);
		const fetchedProducts = [];
        for (let key in res.data) {
            fetchedProducts.push(res.data[key]);
		}
        yield put(actions.fetchProductHiddenCompanySuccess(fetchedProducts));
	}catch(err){
		yield put(actions.fetchProductHiddenCompanyFail(err));
	}
}
export function* getPublicInfoProductSaga(){
	try{
		const res = yield axios.get('React/getPublicInfProduct');
		
        yield put(actions.getPublicInfoProductsSuccess(res.data));
	}catch(err){
		yield put(actions.getPublicInfoProductsFail(err));
	}
}
export function* addProductSaga(action){
	const info = {
		...action.formdata,
		company: sessionStorage.getItem("idCompany")
	}
	try{
		const res = yield axios.post('React/addProduct', info);
		yield put(actions.addProductSuccess(res.data));
	}catch(err){
		yield put(actions.addProductFail(err));
	}
	yield call(fetchProductSellingCompanySaga);
	yield call(fetchProductHiddenCompanySaga);
}
export function* deleteProductSaga(action){
	const info = {
		idProduct: action.id
	}
	const res = yield axios.post('React/deleteProduct', info);
	
	yield call(fetchProductSellingCompanySaga);
	yield call(fetchProductHiddenCompanySaga);
}
export function* getUpdateProductInfSaga(action){
	const info = {
		idProduct: action.idProduct
	}
	try{
		const res = yield axios.post('React/getProductInf', info);
		yield put(actions.getUpdateProductInfSuccess(res.data[0]));
	}catch(err){
		yield put(actions.getUpdateProductInfFail(err));
	}
}
export function* updateProductSaga(action){
	const info = {
		...action.formdata,
		idProduct: action.idProduct
	}
	try{
		const res = yield axios.post('React/updateProduct', info);
		yield put(actions.updateProductSuccess(res.data));
	}catch(err){
		yield put(actions.updateProductFail(err));
	}
	yield call(fetchProductSellingCompanySaga);
	yield call(fetchProductHiddenCompanySaga);
}
