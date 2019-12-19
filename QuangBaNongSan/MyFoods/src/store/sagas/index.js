import {takeEvery} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {
    fetchSellProductsSaga,
    fetchNewProductsSaga
} from './home';
import{
    fetchProductsSaga,
    fetchPortfoliosSaga,
    putPortfoliosStorageSaga,
    putPriceStorageSaga
} from './products';
import {
    fetchNewsSaga,
    fetchNewsDetailSaga
}from './news'
import { 
    fetchPutInputSearchStorageSaga,
    getInfoSearchSaga
} from './search';
import{
    fetchProductDetailSaga
} from './productDetail';
import{
    authLoginSaga,
    authLogoutSaga,
    authCheckTimeOutSaga,
    fetchBillsSaga,
    fetchBillDetailSaga,
    fetchCustomerInfoSaga
} from './auth';
import{
    addToCartSaga,
    updateCartSaga,
    deleteCartItemSaga,
    changeQuantityProductSaga
} from './cart';
import{
    fetchCompanySaga
} from './company';
import{
    authLoginCompanySaga,
    authLogoutCompanySaga,
    authCheckTimeOutCompanySaga,
    signInCompanySaga
} from './authCompany';
import{
    fetchProductHiddenCompanySaga,
    fetchProductSellingCompanySaga,
    getPublicInfoProductSaga,
    addProductSaga,
    deleteProductSaga,
    getUpdateProductInfSaga,
    updateProductSaga,
    
} from './productCompany';
import{
    getCompanyNewsSaga,
    addCompanyNewsSaga,
    deleteCompanyNewsSaga
} from './newsCompany';
import{
    getCompanySaga,
    confirmCompanySaga,
    authLoginAdminSaga,
    getActionCompanySaga,
    authCheckTimeOutAdminSaga,
    authLogoutAdminSaga
} from './admin';

import { fetchCompanyInfSuccess, fetchProductHiddenCompany } from '../actions';

export function* watchHome(){
    yield takeEvery(actionTypes.FETCH_SELLPRODUCTS, fetchSellProductsSaga);
    yield takeEvery(actionTypes.FETCH_NEWPRODUCTS, fetchNewProductsSaga);
}
export function* watchProducts(){
    yield takeEvery(actionTypes.FETCH_PRODUCTS, fetchProductsSaga);
    yield takeEvery(actionTypes.FETCH_PORTFOLIOS, fetchPortfoliosSaga);
    yield takeEvery(actionTypes.PUT_PORTFOLIOS_STORAGE, putPortfoliosStorageSaga);
    yield takeEvery(actionTypes.PUT_PRICE_STORAGE, putPriceStorageSaga);
}
export function* watchNews(){
    yield takeEvery(actionTypes.FETCH_NEWS, fetchNewsSaga);
    yield takeEvery(actionTypes.FETCH_NEWS_DETAIL, fetchNewsDetailSaga);
}
export function* watchSearch(){
    yield takeEvery(actionTypes.PUT_INPUT_SEARCH_STORAGE, fetchPutInputSearchStorageSaga);
    yield takeEvery(actionTypes.GET_INFO_SEARCH, getInfoSearchSaga);
}
export function* watchProductDetail(){
    yield takeEvery(actionTypes.FETCH_PRODUCTS_DETAIL, fetchProductDetailSaga);
}
export function* watchAuth(){
    yield takeEvery(actionTypes.AUTH_LOGIN, authLoginSaga);
    yield takeEvery(actionTypes.AUTH_LOGOUT, authLogoutSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, authCheckTimeOutSaga);
    yield takeEvery(actionTypes.FETCH_BILLS, fetchBillsSaga);
    yield takeEvery(actionTypes.FETCH_BILL_DETAIL, fetchBillDetailSaga);
    yield takeEvery(actionTypes.FETCH_CUSTOMER_INFO,fetchCustomerInfoSaga);
}
export function* watchCart(){
    yield takeEvery(actionTypes.ADD_TO_CART, addToCartSaga);
    yield takeEvery(actionTypes.UPDATE_CART, updateCartSaga);
    yield takeEvery(actionTypes.DELETE_CART_ITEM, deleteCartItemSaga);
    yield takeEvery(actionTypes.CHANGE_QUANTITY_PRODUCT, changeQuantityProductSaga);
}
export function* watchCompany(){
    yield takeEvery(actionTypes.FETCH_COMPANY_HOME, fetchCompanySaga);
}
export function* watchAuthCompany(){
    yield takeEvery(actionTypes.AUTH_LOGIN_COMPANY, authLoginCompanySaga);
    yield takeEvery(actionTypes.AUTH_LOGOUT_COMPANY, authLogoutCompanySaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT_COMPANY, authCheckTimeOutCompanySaga);
    yield takeEvery(actionTypes.SIGNIN_COMPANY, signInCompanySaga);
}
export function* watchProductCompany(){
    yield takeEvery(actionTypes.FETCH_PRODUCTS_SELLING_COMPANY, fetchProductSellingCompanySaga);
    yield takeEvery(actionTypes.FETCH_PRODUCTS_HIDDEN_COMPANY, fetchProductHiddenCompanySaga);
    yield takeEvery(actionTypes.GET_PUBLLIC_INFO_PRODUCTS, getPublicInfoProductSaga);
    yield takeEvery(actionTypes.ADD_PRODUCT, addProductSaga);
    yield takeEvery(actionTypes.DELETE_PRODUCT, deleteProductSaga);
    yield takeEvery(actionTypes.GET_UPDATE_PRODUCT_INF, getUpdateProductInfSaga);
    yield takeEvery(actionTypes.UPDATE_PRODUCT, updateProductSaga);
}
export function* watchProductNews(){
    yield takeEvery(actionTypes.GET_COMPANY_NEWS, getCompanyNewsSaga);
    yield takeEvery(actionTypes.ADD_COMPANY_NEWS, addCompanyNewsSaga);
    yield takeEvery(actionTypes.DELETE_COMPANY_NEWS, deleteCompanyNewsSaga);
}
export function* watchAdmin(){
    yield takeEvery(actionTypes.GET_COMPANY, getCompanySaga);
    yield takeEvery(actionTypes.CONFIRM_COMPANY, confirmCompanySaga);
    yield takeEvery(actionTypes.AUTH_LOGIN_ADMIN, authLoginAdminSaga);
    yield takeEvery(actionTypes.GET_ACTION_COMPANY, getActionCompanySaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT_ADMIN, authCheckTimeOutAdminSaga);
    yield takeEvery(actionTypes.AUTH_LOGOUT_ADMIN, authLogoutAdminSaga);
}
