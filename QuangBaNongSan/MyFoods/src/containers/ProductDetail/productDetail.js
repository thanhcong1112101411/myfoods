import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Aux from '../../hoc/Auxx/auxx';
import Banner from '../../components/ProductDetail/Banner/banner';
import Main from '../../components/ProductDetail/Main/main';

class ProductDetail extends Component{
    componentDidMount(){
        this.props.onFetchProductDetail("/"+this.props.location.pathname.split("/").splice(2,2).join("/"));
        this.props.onSetPath(this.props.location.pathname);
        
    }
    render(){
        return(
            <Aux>
                <Banner 
                    name = {this.props.productDetail.Name}
                />
                <Main
                    productDetail = {this.props.productDetail}
                />
            </Aux>
        )
    }
}
const mapStateToProps = state =>{
    return{
        productDetail: state.productDetail.productDetail,
        path: state.home.path
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onFetchProductDetail : (url) => dispatch(actions.fetchProductDetail(url)),
        onSetPath: (path) => dispatch(actions.setPath(path))
    };  
};
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail);