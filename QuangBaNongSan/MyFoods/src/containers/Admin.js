import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from '../containers/Admin/AdminLayout/adminLayout';
import CompanyManagement from './Admin/CompanyManagement/companyManagement';
import CompanyAction from './Admin/CompanyAction/companyAction';
import Login from '../containers/Admin/Login/login';

class Admin extends Component{
    render(){
        let routes = (
            <Switch>
                <Route path="/Admin/Login" exact component={Login} />
                <Redirect to = "/Admin/Login" />
            </Switch>
        );
        if(this.props.idAdmin){
            routes = (
                <Switch>
                    <Route path="/Admin/companymanagement" exact component={CompanyManagement} />
                    <Route path="/Admin/companyaction" exact component={CompanyAction} />
                    <Redirect to = "/Admin/companymanagement" />
                </Switch>
            );
        }
        return(
            <div>
                <Layout>
                    {routes}
                </Layout>
            </div>
            
        );
    }
}
const mapStateToProps = state =>{
    return{
        idAdmin: state.admin.idAdmin
    };
};

export default withRouter(connect(mapStateToProps)(Admin));