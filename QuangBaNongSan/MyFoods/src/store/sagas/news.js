import {put} from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions/index';

export function* fetchNewsSaga(action){
	try{
		const res = yield axios.get('React/getNews');
		const fetchedNews = [];
        for (let key in res.data) {
            fetchedNews.push(res.data[key]);
		}
        yield put(actions.fetchNewsSuccess(fetchedNews));
	}catch(err){
		yield put(actions.fetchNewsFail(err));
	}
}
export function* fetchNewsDetailSaga(action){
	try{
		const res = yield axios.get('React'+action.linkNews);
		
        yield put(actions.fetchNewsDetailSuccess(res.data));
	}catch(err){
		yield put(actions.fetchNewsDetailFail(err));
	}
}
