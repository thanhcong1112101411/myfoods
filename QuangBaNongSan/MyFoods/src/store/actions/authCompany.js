import * as actionTypes from './actionTypes';

//---------------------------------- LOGIN ------------------------------------------------
export const authLoginCompany = (username, password) =>{
    return{
        type: actionTypes.AUTH_LOGIN_COMPANY,
        username: username,
        password: password
    }
}
export const authLoginCompanySuccess = (inforUser) =>{
	return{
		type: actionTypes.AUTH_LOGIN_COMPANY_SUCCESS,
        inforUser: inforUser
	};
};

export const authLoginCompanyFail = (error) =>{
	return{
		type: actionTypes.AUTH_LOGIN_COMPANY_FAIL,
		error: error
	};
};
//---------------------------------- LOGOUT ------------------------------------------------
export const authLogoutCompany = ()=>{
    return{
        type: actionTypes.AUTH_LOGOUT_COMPANY
    }
}
export const authLogoutCompanySuccess = () =>{
    return{
        type: actionTypes.AUTH_LOGOUT_COMPANY_SUCCESS
    }
}
//--------------------------------- CHECK TIME OUT --------------------------------------------
export const authCheckTimeOutCompany = () =>{
    return{
        type: actionTypes.AUTH_CHECK_TIMEOUT_COMPANY
    }
}
//---------------------------------- SIGIN IN ----------------------------------------------
export const signInCompany = (formdata) =>{
    return{
        type: actionTypes.SIGNIN_COMPANY,
        formdata: formdata
    }
}
export const signInCompanySuccess = (alertSignIn) =>{
	return{
		type: actionTypes.SIGNIN_COMPANY_SUCCESS,
        alertSignIn: alertSignIn
	};
};

export const signInCompanyFail = (error) =>{
	return{
		type: actionTypes.SIGNIN_COMPANY_FAIL,
		error: error
	};
};