import React, {Component} from 'react';

import Aux from '../../../hoc/Auxx/auxx';
import Header from '../CompanyHeader/companyHeader';

class CompanyAdminLayout extends Component{
    render(){
        return(
            <Aux>
                <Header />
                <main>
                    {this.props.children}  
                </main> 
            </Aux>
        )
    }
}

export default CompanyAdminLayout;