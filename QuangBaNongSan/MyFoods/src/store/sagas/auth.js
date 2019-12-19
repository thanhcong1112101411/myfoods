import {put, call} from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions/index';

export function* authLoginSaga(action){
    const inforUser = {
        username: action.username,
        password: action.password
    };
	try{
        const res = yield axios.post('React/userLogin', inforUser);
        if(res.data === 1){
            yield put(actions.authLoginSuccess(res.data));
        }else{
            const now = new Date();
            const expirationDate = yield new Date(now.setDate(now.getDate()+30));
            localStorage.setItem("id", res.data.id);
            localStorage.setItem("username",res.data.username);
            localStorage.setItem("expirationDate", expirationDate);

            yield put(actions.authLoginSuccess(res.data));
        }
        
	}catch(err){
		yield put(actions.authLoginFail(err));
	}
}
export function* authCheckTimeOutSaga(){
    const id = yield localStorage.getItem("id");
    if(!id){
        yield put(actions.authLogout());
        console.log("logout");
    }else{
        const expirationDate = yield localStorage.getItem("expirationDate");
        if(expirationDate <= new Date()){
            yield put(actions.authLogout());
        }else{
            const username = yield localStorage.getItem("username");
            const inforUser = {
                username: username,
                id: id
            };
            yield put(actions.authLoginSuccess(inforUser));
        }
    }
}
export function* authLogoutSaga(){
    yield call([localStorage, 'removeItem'], "id");
	yield call([localStorage, 'removeItem'], "expirationDate");
    yield call([localStorage, 'removeItem'], "username");
    
    yield put(actions.authLogoutSuccess());
}
//---------------------------------- BILLS ----------------------------------
export function* fetchBillsSaga(action){
    const id = yield localStorage.getItem("id");
    const data = {
        id: id
    }
    try{
        const res = yield axios.post('React/bills',data);
		const fetchedBills = [];
        for (let key in res.data) {
            fetchedBills.push(res.data[key]);
        }
        
        yield put(actions.fetchBillsSuccess(fetchedBills));
    }catch(err){
        yield put(actions.fetchBillsFail(err));
    }
}
//---------------------------- BILL DETAIL ----------------------------------
export function* fetchBillDetailSaga(action){
    const id = yield localStorage.getItem("id");
    const data = {
        id: id,
        id_bill: action.idBill
    }
    try{
        const res = yield axios.post('React/detailBill',data);
		const fetchedBillDetail = [];
        for (let key in res.data) {
            fetchedBillDetail.push(res.data[key]);
        }
        
        yield put(actions.fetchBillDetailSuccess(fetchedBillDetail));
    }catch(err){
        yield put(actions.fetchBillDetailFail(err));
    }
}
//------------------------- CUSTOMER INFO ----------------------------------
export function* fetchCustomerInfoSaga(){
    const id = yield localStorage.getItem("id");
    const data = {
        id: id
    }
    try{
        const res = yield axios.post('React/customerInfo',data);
        yield put(actions.fetchCustomerInfoSuccess(res.data[0]));
    }catch(err){
        yield put(actions.fetchCustomerInfo)
    }
}