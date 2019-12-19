import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../../shared/utility';

const initialState = {
    idCompany: null,
    usernameCompany: null,
    alertSignIn: null,
    error: null
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.AUTH_LOGIN_COMPANY_SUCCESS:
            
            if(action.inforUser === 1){
                return updateObject(state,{
                    error: "Tên Đăng Nhập Hoặc Mật Khẩu Không Chính Xác !"
                });
            }
            return updateObject(state, {
                idCompany: action.inforUser.id,
                usernameCompany: action.inforUser.username,
                error: null
            });
        case actionTypes.AUTH_LOGIN_COMPANY_FAIL:
            return updateObject(state,{
                error: action.error
            });
        
        case actionTypes.AUTH_LOGOUT_COMPANY_SUCCESS:
            return updateObject(state,{
                idCompany: null,
                usernameCompany: null
            });
        case actionTypes.SIGNIN_COMPANY_SUCCESS:
            if(action.alertSignIn === 0){
                return updateObject(state,{
                    error: "Link Công Ty hoặc username Đã Tồn Tại !",
                    alertSignIn: state.alertSignIn
                });
            
            }else{
                return updateObject(state,{
                    error: "Đăng Ký Thành Công, Vui Lòng Chờ Xác Nhận !",
                    alertSignIn: state.alertSignIn
                });
            }
        
        case actionTypes.SIGNIN_COMPANY_FAIL:
            return updateObject(state,{
                error: action.error
            });
        default:
            return state;
    }
}
export default reducer;