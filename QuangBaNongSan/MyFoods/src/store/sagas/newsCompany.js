import {put,call} from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions/index';

export function* getCompanyNewsSaga(){
	const info = {
        idCompany: sessionStorage.getItem("idCompany")
	}
	try{
		const res = yield axios.post('React/getCompanyNewsAdmin',info);
		const fetchedNews = [];
        for (let key in res.data) {
            fetchedNews.push(res.data[key]);
		}
        yield put(actions.getCompanyNewsSuccess(fetchedNews));
	}catch(err){
		yield put(actions.getCompanyNewsFail(err));
	}
}
export function* addCompanyNewsSaga(action){
	const info = {
		...action.formdata,
		idCompany: sessionStorage.getItem("idCompany")
	}
	try{
		const res = yield axios.post('React/addNews', info);
		// yield put(actions.addProductSuccess(res.data));
		console.group(res.data);
	}catch(err){
		// yield put(actions.addProductFail(err));
		console.log("false");
	}
	yield call(getCompanyNewsSaga);
}
export function* deleteCompanyNewsSaga(action){
	const info = {
		idNews: action.idNews
	}
	try{
		const res = yield axios.post('React/deleteNews',info);
		// yield put(actions.addProductSuccess(res.data));
		console.group(res.data);
	}catch(err){
		// yield put(actions.addProductFail(err));
		console.log("false");
	}
	yield call(getCompanyNewsSaga);
}


