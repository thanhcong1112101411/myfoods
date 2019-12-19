import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../../shared/utility';

const initialState = {
    idAdmin: null,
    nameAdmin: null,
    companyWating: [],
    companyConfirmed: [],
    actionInf: [],
    error: null
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.AUTH_LOGIN_ADMIN_SUCCESS:
            if(action.inforAdmin === 1){
                return updateObject(state,{
                    error: "Tên Đăng Nhập Hoặc Mật Khẩu Không Chính Xác !"
                });
            }
            return updateObject(state, {
                idAdmin: action.inforAdmin.IdAdmin,
                nameAdmin: action.inforAdmin.employeeName,
                error: null
            });
        case actionTypes.AUTH_LOGIN_ADMIN_SUCCESS:
            return updateObject(state,{
                error: action.error
            });
        case actionTypes.AUTH_LOGOUT_ADMIN_SUCCESS:
            return updateObject(state,{
                idAdmin: null,
                nameAdmin: null
            });
        case actionTypes.GET_COMPANY_SUCCESS:
            return updateObject(state,{
                companyWating: action.company["companyWating"],
                companyConfirmed: action.company["companyConfirmed"]
            });
        case actionTypes.GET_COMPANY_FAIL:
            return updateObject(state,{
                error: action.error
            });
        case actionTypes.GET_ACTION_COMPANY_SUCCESS:
            return updateObject(state,{
                actionInf: action.actionInf
            });
        case actionTypes.GET_ACTION_COMPANY_FAIL:
            return updateObject(state,{
                error: action.error
            });
        
        default:
            return state;
    }
}
export default reducer;