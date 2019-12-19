import {put,call} from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions/index';

export function* fetchPutInputSearchStorageSaga(action){
    yield localStorage.setItem("searchValue", action.searchValue);
}
//------------------- GET INFO SEARCH (sản phẩm, công ty, danh mục top 10) ------------------------------
export function* getInfoSearchSaga(){
    const info = {
        searchValue: localStorage.getItem("searchValue")
    }
	try{
		const res = yield axios.post('React/getInfoSearch',info);
        
        yield put(actions.getInfoSearchSuccess(res.data));
	}catch(err){
		yield put(actions.getInfoSearchFail(err));
	}
}