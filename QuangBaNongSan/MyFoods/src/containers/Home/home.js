import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import Aux from '../../hoc/Auxx/auxx';
import Banner from '../../components/UI/Banner/banner';
import ContentTop from '../../components/Home/ContentTop/contentTop';
import About from '../../components/Home/About/about';
import SellingProduct from '../../components/Home/SellingProduct/sellingProduct';
import NewProduct from '../../components/Home/NewProduct/newProduct';
import Feature from '../../components/Home/Feature/feature';



class Home extends Component{
    componentDidMount() {
        // this.props.onFetchSellProducts(3);
        this.props.onFetchNewProducts(8);
        this.props.onSetPath(this.props.location.pathname);
    }
    render(){
        return(
            <Aux>
                <Banner 
                    pageFrom = "Home"
                    heading = "Seasonal Foods"
                />
                <ContentTop />
                {/* <About /> */}
                {/* <SellingProduct 
                    pageFrom = "Home"
                    products = {this.props.sellProducts}
                    loading = {this.props.loading}
                /> */}
                <NewProduct 
                    pageFrom = "Home" 
                    products = {this.props.newProducts}
                />
                {/* <Feature/> */}
            </Aux>
        );
    }
}

const mapStateToProps = state =>{
    return{
        sellProducts: state.home.sellProducts,
        newProducts: state.home.newProducts,
        loading: state.home.loading,
        path: state.home.path
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        onFetchSellProducts : (quantity) => dispatch(actions.fetchSellProducts(quantity)),
        onFetchNewProducts: (quantity) => dispatch(actions.fetchNewProducts(quantity)),
        onSetPath: (path) => dispatch(actions.setPath(path))
    };  
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);