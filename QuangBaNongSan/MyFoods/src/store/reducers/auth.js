import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../../shared/utility';

const initialState = {
    id: null,
    username: null,
    error: null,
    bills: [],
    billDetail: [],
    customerInfo: null
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.AUTH_LOGIN_SUCCESS:
            
            if(action.inforUser === 1){
                return updateObject(state,{
                    error: "Tên Đăng Nhập Hoặc Mật Khẩu Không Chính Xác !"
                });
            }
            return updateObject(state, {
                id: action.inforUser.id,
                username: action.inforUser.username,
                error: null
            });
        case actionTypes.AUTH_LOGIN_FAIL:
            return updateObject(state,{
                error: action.error
            });
        
        case actionTypes.AUTH_LOGOUT_SUCCESS:
            return updateObject(state,{
                id: null,
                username: null
            });
        case actionTypes.FETCH_BILLS_SUCCESS:
            return updateObject(state,{
                bills: action.bills
            });
        case actionTypes.FETCH_BILLS_FAIL:
            return updateObject(state,{
                error: action.error
            });
        case actionTypes.FETCH_BILL_DETAIL_SUCCESS:
            return updateObject(state,{
                billDetail: action.billDetail
            });
        case actionTypes.FETCH_BILL_DETAIL_FAIL:
            return updateObject(state,{
                error: action.error
            });
        case actionTypes.FETCH_CUSTOMER_INFO_SUCCESS:
            return updateObject(state,{
                customerInfo: action.cusInfo
            });
        case actionTypes.FETCH_CUSTOMER_INFO_FAIL:
            return updateObject(state,{
                error: action.error
            });
        default:
            return state;
    }
}
export default reducer;