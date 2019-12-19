import {put} from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions/index';

export function* fetchProductDetailSaga(action){
    actions.fetchProductDetailStart();
	try{
		const res = yield axios.get('React' + action.src);
        const fetchedProductDetail = res.data[0];
        yield put(actions.fetchProductDetailSuccess(fetchedProductDetail));
	}catch(err){
		yield put(actions.fetchProductDetailFail(err));
	}
}