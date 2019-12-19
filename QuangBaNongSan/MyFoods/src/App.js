import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Main from './containers/Main';
import CompanyAdmin from './containers/companyAdmin';
import Admin from './containers/Admin';

//--------------- suppost package --------------------------------
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
        <Switch>
            <Route path="/seasonalFoods" component={Main} />
            <Route path="/companyadmin" component={CompanyAdmin} />
            <Route path="/admin" component={Admin} />
            <Redirect to="/seasonalFoods" />
        </Switch>
    </div>
  );
}

export default withRouter(App);
