import * as actionTypes from './actionTypes';

//---------------------------------- LOGIN COMPANY -------------------------------------------------
export const authLoginAdmin = (username, password) =>{
    return{
        type: actionTypes.AUTH_LOGIN_ADMIN,
        username: username,
        password: password
    }
}
export const authLoginAdminSuccess = (inforAdmin) =>{
	return{
		type: actionTypes.AUTH_LOGIN_ADMIN_SUCCESS,
        inforAdmin: inforAdmin
	};
};

export const authLoginAdminFail = (error) =>{
	return{
		type: actionTypes.AUTH_LOGIN_ADMIN_FAIL,
		error: error
	};
};
//------------------------------------ CHECK TIME OUT COMPANY ------------------------------------
export const authCheckTimeOutAdmin = () =>{
    return{
        type: actionTypes.AUTH_CHECK_TIMEOUT_ADMIN
    }
}
//---------------------------------- GET COMPANY ------------------------------------------------
export const getCompany = () =>{
    return{
        type: actionTypes.GET_COMPANY
    }
}
export const getCompanySuccess = (company) =>{
	return{
		type: actionTypes.GET_COMPANY_SUCCESS,
        company: company
	};
};

export const getCompanyFail = (error) =>{
	return{
		type: actionTypes.GET_COMPANY_FAIL,
		error: error
	};
};
//------------------------------------ CONFIRM COMPANY --------------------------------------
export const confirmCompany = (idCompany) =>{
    return{
		type: actionTypes.CONFIRM_COMPANY,
		idCompany: idCompany
    }
}
export const confirmCompanySuccess = (alertConfirmCompany) =>{
	return{
		type: actionTypes.CONFIRM_COMPANY_SUCCESS,
        alertConfirmCompany: alertConfirmCompany
	};
};

export const confirmCompanyFail = (error) =>{
	return{
		type: actionTypes.CONFIRM_COMPANY_FAIL,
		error: error
	};
};
//---------------------------------- LOGOUT ------------------------------------------------
export const authLogoutAdmin = ()=>{
    return{
        type: actionTypes.AUTH_LOGOUT_ADMIN
    }
}
export const authLogoutAdminSuccess = () =>{
    return{
        type: actionTypes.AUTH_LOGOUT_ADMIN_SUCCESS
    }
}
//------------------------- GET ACTION COMPANY INFO --------------------
export const getActionCompany = () =>{
    return{
		type: actionTypes.GET_ACTION_COMPANY
    }
}
export const getActionCompanySuccess = (actionInf) =>{
	return{
		type: actionTypes.GET_ACTION_COMPANY_SUCCESS,
        actionInf: actionInf
	};
};

export const getActionCompanyFail = (error) =>{
	return{
		type: actionTypes.GET_ACTION_COMPANY_FAIL,
		error: error
	};
};