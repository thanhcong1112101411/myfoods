import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose , combineReducers} from 'redux';

import homeReducers from './store/reducers/home';
import productsReducers from './store/reducers/products';
import newsReducers from './store/reducers/news';
import productDetail from './store/reducers/productDetail';
import authReducers from './store/reducers/auth';
import cartReducers from './store/reducers/cart';
import alertReducers from './store/reducers/alert';
import companyReducers from './store/reducers/company';
import authCompanyReducers from './store/reducers/authCompany';
import productCompanyReducers from './store/reducers/productCompany';
import newsCompanyReducers from './store/reducers/newsCompany';
import adminReducers from './store/reducers/admin';
import searchReducers from './store/reducers/search';

import createSagaMiddleware from 'redux-saga';
import { 
    watchHome, watchSearch, watchProducts, watchProductDetail, watchAuth, 
    watchCart, watchCompany,watchAuthCompany, watchProductCompany, watchProductNews, watchNews,watchAdmin
} from './store/sagas';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: null || compose;

const rootReducer = combineReducers({
    home: homeReducers,
    products: productsReducers,
    news: newsReducers,
    productDetail: productDetail,
    auth: authReducers,
    cart: cartReducers,
    alert: alertReducers,
    company: companyReducers,
    authCompany: authCompanyReducers,
    productCompany: productCompanyReducers,
    newsCompany: newsCompanyReducers,
    admin: adminReducers,
    search: searchReducers
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk, sagaMiddleware)
));

sagaMiddleware.run(watchHome);
sagaMiddleware.run(watchSearch);
sagaMiddleware.run(watchProducts);
sagaMiddleware.run(watchNews);
sagaMiddleware.run(watchProductDetail);
sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchCart);
sagaMiddleware.run(watchCompany);
sagaMiddleware.run(watchAuthCompany);
sagaMiddleware.run(watchProductCompany);
sagaMiddleware.run(watchProductNews);
sagaMiddleware.run(watchAdmin);
sagaMiddleware.run(watchSearch);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

