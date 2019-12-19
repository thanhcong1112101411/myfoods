import React, {Component} from 'react';

import Aux from '../Auxx/auxx';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

class Layout extends Component{
    render(){
        return(
            <Aux>
                <Header />
                <main>
                    {this.props.children}  
                </main>
                <Footer />
            </Aux>
        )
    }
}

export default Layout;