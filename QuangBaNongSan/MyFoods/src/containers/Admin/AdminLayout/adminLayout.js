import React, {Component} from 'react';

import Aux from '../../../hoc/Auxx/auxx';
import Header from '../AdminHeader/adminHeader';

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