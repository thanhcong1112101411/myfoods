import {put, call} from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions/index';

export function* authLoginCompanySaga(action){
    const inforUser = {
        username: action.username,
        password: action.password
    };
	try{
        const res = yield axios.post('React/companyLogin', inforUser);
        if(res.data === 1){
            yield put(actions.authLoginCompanySuccess(res.data));
        }else{
            sessionStorage.setItem("idCompany", res.data.id);
            sessionStorage.setItem("usernameCompany",res.data.username);
            
            yield put(actions.authLoginCompanySuccess(res.data));
        }
        
	}catch(err){
		yield put(actions.authLoginCompanyFail(err));
	}
}
export function* authLogoutCompanySaga(){
    yield call([sessionStorage, 'removeItem'], "idCompany");
    yield call([sessionStorage, 'removeItem'], "usernameCompany");
    
    yield put(actions.authLogoutCompanySuccess());
}
export function* authCheckTimeOutCompanySaga(){
    const id = yield sessionStorage.getItem("idCompany");
    if(!id){
        yield put(actions.authLogoutCompanySuccess());
    }else{
        const username = yield sessionStorage.getItem("usernameCompany");
        const inforUser = {
            username: username,
            id: id
        };
        yield put(actions.authLoginCompanySuccess(inforUser));
        
    }
}
export function* signInCompanySaga(action){
	try{
        const res = yield axios.post('React/signInCompany', action.formdata);
        
        yield put(actions.signInCompanySuccess(res.data));
	}catch(err){
		yield put(actions.signInCompanyFail(err));
	}
}

