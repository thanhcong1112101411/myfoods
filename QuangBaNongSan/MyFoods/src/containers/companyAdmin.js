import React, {Component} from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CompanyAdminLayout from './CompanyAdmin/CompanyAdminLayout/companyAdminLayout';

import ProductManagement from './CompanyAdmin/ProductManagement/productManagement';
import Home from './CompanyAdmin/Home/home';
import Login from './CompanyAdmin/Login/login';
import NewsManagement from './CompanyAdmin/NewsManagement/newsManagement';

class Account extends Component{
    render(){
        let routes = (
            <Switch>
                <Route path="/companyadmin/login" exact component={Login} />
                <Redirect to = "/SesonalFoods" />
            </Switch>
        );
        if(this.props.idCompany){
            routes = (
                <Switch>
                    <Route path="/companyadmin" exact component={Home} />
                    <Route path="/companyadmin/productmanagement" component={ProductManagement} />
                    <Route path="/companyadmin/newsmanagement" component={NewsManagement} />
                    <Redirect to="/companyadmin" />
                </Switch>
            );
        }
        return(
            <div>
                <CompanyAdminLayout>
                    {routes}
                </CompanyAdminLayout>
            </div>
            
        );
    }
}
const mapStateToProps = state =>{
    return{
        idCompany: state.authCompany.idCompany
    };
};

export default withRouter(connect(mapStateToProps)(Account));