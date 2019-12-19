import {put} from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions/index';

export function* fetchCompanySaga(action){
	try{
		const res = yield axios.get('React'+ action.companyLink);
		yield put(actions.fetchCompanyInfSuccess(res.data.companyInf[0]));
		yield put(actions.fetchNewProductCompanySuccess(res.data.newproducts));
		yield put(actions.fetchProductCompanySuccess(res.data.products));
		yield put(actions.fetchNewsCompanySuccess(res.data.newsList));
	}catch(err){
		yield put(actions.fetchCompanyInfFail(err));
		yield put(actions.fetchNewProductCompanyFail(err));
		yield put(actions.fetchProductCompanyFail(err));
		yield put(actions.fetchNewsCompanyFail(err));
	}
}