import React, {Component} from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import AccountLayout from '../../hoc/AccountLayout/accountLayout';
import AccountInfo from './AcountInfo/accountInfo';
import Bills from './Bills/bills';

class Account extends Component{
    render(){
        return(
            <AccountLayout>
                <Switch>
                    <Route path="/account" component={AccountInfo} />
                    <Route path="/account/bills" component={Bills} /> 
                    <Redirect to = "/account" />
                </Switch>
            </AccountLayout>
        );
    }
}
export default withRouter(Account);