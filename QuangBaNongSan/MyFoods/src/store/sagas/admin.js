import {put, call} from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions/index';

export function* getCompanySaga(){
	try{
        const res = yield axios.get('React/getCompanyAdmin');
        
        yield put(actions.getCompanySuccess(res.data));
	}catch(err){
		yield put(actions.getCompanyFail(err));
	}
}
export function* confirmCompanySaga(action){
	const info = {
		idCompany: action.idCompany
	}
	console.log(info);
	try{
        const res = yield axios.post('React/confirmCompany',info);
        
		// yield put(actions.confirmCompanySuccess(res.data));
		yield call(getCompanySaga);
	}catch(err){
		console.log("fail");
		// yield put(actions.confirmCompanyFail(err));
	}
}
//--------------------------------------- LOGIN ADMIN ------------------------------------
export function* authLoginAdminSaga(action){
    const inforAdmin = {
        username: action.username,
        password: action.password
    };
	try{
        const res = yield axios.post('React/adminLogin', inforAdmin);
        if(res.data === 1){// tài khoản không tồn tại (tạo thông báo)
			yield put(actions.authLoginAdminSuccess(res.data));
        }else{
			sessionStorage.setItem("idAdmin", res.data.IdAdmin);
			sessionStorage.setItem("nameAdmin", res.data.employeeName);
			yield put(actions.authLoginAdminSuccess(res.data));
        }
        
	}catch(err){
		yield put(actions.authLoginAdminFail(err));
	}
}
//------------------------------------ LOGOUT ADMIN -----------------------------------------------
export function* authLogoutAdminSaga(){
    yield call([sessionStorage, 'removeItem'], "idAdmin");
    yield call([sessionStorage, 'removeItem'], "nameAdmin");
    yield put(actions.authLogoutAdminSuccess());
}
//------------------------------------ CHECK TIME OUT -----------------------------------------------
export function* authCheckTimeOutAdminSaga(){
    const id = yield sessionStorage.getItem("idAdmin");
    if(!id){
        yield put(actions.authLogoutCompanySuccess());
    }else{
        const username = yield sessionStorage.getItem("nameAdmin");
        const inforAdmin = {
            employeeName: username,
            IdAdmin: id
		};
        yield put(actions.authLoginAdminSuccess(inforAdmin));
        
    }
}
//----------------------------------- GET ACTION COMPANY INFO -------------------------------------
export function* getActionCompanySaga(){
	try{
        const res = yield axios.get('React/getActionInf');
        
        yield put(actions.getActionCompanySuccess(res.data));
	}catch(err){
		yield put(actions.getActionCompanyFail(err));
	}
}