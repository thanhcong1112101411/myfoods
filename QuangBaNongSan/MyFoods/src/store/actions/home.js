import * as actionTypes from './actionTypes';

//---------------------------------------- SELL PRODUCTS --------------------------------------
export const fetchSellProducts = (quantity) =>{
    return{
        type: actionTypes.FETCH_SELLPRODUCTS,
        quantity: quantity
    }
}
export const fetchSellProductsStart = () =>{
	return{
		type: actionTypes.FETCH_SELLPRODUCTS_START
	};
};
export const fetchSellProductsSuccess = (products) =>{
	return{
		type: actionTypes.FETCH_SELLPRODUCTS_SUCCESS,
		products: products
	};
};

export const fetchSellProductsFail = (error) =>{
	return{
		type: actionTypes.FETCH_SELLPRODUCTS_FAIL,
		error: error
	};
};
//----------------------------------------- NEW PRODUCTS ---------------------------------------------
export const fetchNewProducts = (quantity) =>{
    return{
		type: actionTypes.FETCH_NEWPRODUCTS,
		quantity: quantity
    }
}
export const fetchNewProductsStart = () =>{
	return{
		type: actionTypes.FETCH_NEWPRODUCTS_START
	};
};
export const fetchNewProductsSuccess = (products) =>{
	return{
		type: actionTypes.FETCH_NEWPRODUCTS_SUCCESS,
		products: products
	};
};

export const fetchNewProductsFail = (error) =>{
	return{
		type: actionTypes.FETCH_NEWPRODUCTS_FAIL,
		error: error
	};
};
//----------------------------------- SET PATH --------------------------------------------------------
export const setPath = (path) =>{
	return{
		type: actionTypes.SET_PATH,
		path: path
	};
}