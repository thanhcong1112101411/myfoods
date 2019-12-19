import * as actionTypes from './actionTypes';

// --------------------------------------- fetch products -------------------------------------------
export const fetchProducts = () =>{
    return{
        type: actionTypes.FETCH_PRODUCTS
    }
}
export const fetchProductsStart = () =>{
    return{
        type: actionTypes.FETCH_PRODUCTS_START
    }
}
export const fetchProductsSuccess = (products, pageQuantum) =>{
    return{
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        products: products,
        pageQuantum: pageQuantum
    }
}
export const fetchProductsFail = (error) =>{
    return{
        type: actionTypes.FETCH_PRODUCTS_FAIL,
        error: error
    }
}
// --------------------------------------- fetch portfolios -------------------------------------------
export const fetchPortfolios = () =>{
    return{
        type: actionTypes.FETCH_PORTFOLIOS
    }
}
export const fetchPortfoliosSuccess = (portfolios) =>{
    return{
        type: actionTypes.FETCH_PORTFOLIOS_SUCCESS,
        portfolios: portfolios
    }
}
export const fetchPortfoliosFail = (error) =>{
    return{
        type: actionTypes.FETCH_PORTFOLIOS_FAIL,
        error: error
    }
}
export const checkPortfolioItems = (portfolioId)=>{
    return{
        type: actionTypes.CHECK_PORTFOLIO_ITEMS,
        portfolioId: portfolioId
    }
}
// --------------------------------------- storage -------------------------------------------
export const putPortfoliosStorage = (portfolios) =>{
    return{
        type: actionTypes.PUT_PORTFOLIOS_STORAGE,
        portfolios: portfolios
    }
}
export const putPriceStorage = (price) =>{
    return{
        type: actionTypes.PUT_PRICE_STORAGE,
        price: price
    }
}
