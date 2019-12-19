import * as actionTypes from './actionTypes';

//---------------------------------- LOGIN ------------------------------------------------
export const authLogin = (username, password) =>{
    return{
        type: actionTypes.AUTH_LOGIN,
        username: username,
        password: password
    }
}
export const authLoginSuccess = (inforUser) =>{
	return{
		type: actionTypes.AUTH_LOGIN_SUCCESS,
        inforUser: inforUser
	};
};

export const authLoginFail = (error) =>{
	return{
		type: actionTypes.AUTH_LOGIN_FAIL,
		error: error
	};
};
//---------------------------------- LOGOUT ------------------------------------------------
export const authLogout = ()=>{
    return{
        type: actionTypes.AUTH_LOGOUT
    }
}
export const authLogoutSuccess = () =>{
    return{
        type: actionTypes.AUTH_LOGOUT_SUCCESS
    }
}
//---------------------------------- SIGN UP ------------------------------------------------
export const authSignup = (userInfo) =>{
    return{
        type: actionTypes.AUTH_SIGNUP,
        userInfo: userInfo
    }
}
export const authSignupSuccess = (id, username) =>{
	return{
		type: actionTypes.AUTH_SIGNUP_SUCCESS,
        id: id,
        username: username
	};
};

export const authSigupFail = (error) =>{
	return{
		type: actionTypes.AUTH_SIGNUP_FAIL,
		error: error
	};
};
//--------------------------------- CHECK TIME OUT --------------------------------------------
export const authCheckTimeOut = () =>{
    return{
        type: actionTypes.AUTH_CHECK_TIMEOUT
    }
}
//--------------------------------- BILLS -------------------------------------------------
export const fetchBills = () =>{
    return{
        type: actionTypes.FETCH_BILLS
    }
}
export const fetchBillsSuccess = (bills) =>{
    return{
        type: actionTypes.FETCH_BILLS_SUCCESS,
        bills: bills
    }
}
export const fetchBillsFail = (err) =>{
    return{
        type: actionTypes.FETCH_BILLS_FAIL,
        error: err
    }
}
//--------------------------------- BILLS -------------------------------------------------
export const fetchBillDetail = (idBill) =>{
    return{
        type: actionTypes.FETCH_BILL_DETAIL,
        idBill: idBill
    }
}
export const fetchBillDetailSuccess = (billDetail) =>{
    return{
        type: actionTypes.FETCH_BILL_DETAIL_SUCCESS,
        billDetail: billDetail
    }
}
export const fetchBillDetailFail = (err) =>{
    return{
        type: actionTypes.FETCH_BILL_DETAIL_FAIL,
        error: err
    }
}
//--------------------------------- CUSTOMER INFO ----------------------------------
export const fetchCustomerInfo = () =>{
    return{
        type: actionTypes.FETCH_CUSTOMER_INFO
    }
}
export const fetchCustomerInfoSuccess = (cusInfo) =>{
    return{
        type: actionTypes.FETCH_CUSTOMER_INFO_SUCCESS,
        cusInfo: cusInfo
    }
}
export const fetchCustomerInfoFail = (err) =>{
    return{
        type: actionTypes.FETCH_CUSTOMER_INFO_FAIL,
        error: err
    }
}