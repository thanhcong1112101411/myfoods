import React,{Component} from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from '../hoc/Layout/layout';
import Products from '../containers/Products/products';
import Contact from '../containers/Contact/contact';
import Cart from '../containers/Cart/cart';
import ProductDetail from '../containers/ProductDetail/productDetail';
import Account from '../containers/Account/account';
import Company from '../containers/Company/company';
import Home from '../containers/Home/home';
import News from '../containers/News/news';
import SignIn from '../containers/SignIn/signIn';
import NewsDetail from '../containers/NewsDetail/newsDetail';

class Main extends Component{
    render(){
        return(
            <Layout>
                <Switch>
                    <Route path="/seasonalFoods" exact component={Home} />
                    <Route path="/seasonalFoods/products" component={Products} />
                    <Route path="/seasonalFoods/contact" component={Contact} />
                    <Route path="/seasonalFoods/cart" component={Cart} />
                    <Route path = "/seasonalFoods/productDetail" component = {ProductDetail} />
                    <Route path = "/seasonalFoods/account" component = {Account} />
                    <Route path="/seasonalFoods/company" component = {Company} />
                    <Route path="/seasonalFoods/news" component = {News} />
                    <Route path="/seasonalFoods/signin" component = {SignIn} />
                    <Route path="/seasonalFoods/newsDetail" component = {NewsDetail} />
                    <Redirect to = "" />
                </Switch>
            </Layout>
        );
    }
}
export default withRouter(Main);