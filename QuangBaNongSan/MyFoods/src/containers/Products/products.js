import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import Aux from '../../hoc/Auxx/auxx';
import Banner from '../../components/Products/Banner/banner';
import Main from '../../components/Products/Main/main';

import {updateObject} from '../../shared/utility';

class Products extends Component{
    state = {
        filterFrice :{
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: 'default', displayValue: 'Mặc Định'},
                    {value: 'increase', displayValue: 'Giá Tăng Dần'},
                    {value: 'decrease', displayValue: 'Giá Giảm Dần'}
                ]
            },
            value: 'default'
        }
    }
    componentDidMount(){
        this.props.onFetchPortfolios();
        this.props.onFetchProducts();

        // set default storage
        this.props.onPutPortfoliosStorage("");
        this.props.onPutPriceStorage(this.state.filterFrice.value);

        this.props.onSetPath(this.props.location.pathname);
    }

    selectChangeHandler = (event) =>{
        const updateFilterPrice = updateObject(this.state.filterFrice,{
            value: event.target.value
        });
        this.setState({filterFrice: updateFilterPrice});
        // set value price storage
        this.props.onPutPriceStorage(event.target.value);
        // fetch products
        this.props.onFetchProducts();
    }
    checkPortfolioItemsHandler = (portfolioId) =>{
        this.props.onCheckPortfolioItems(portfolioId);
        // create array portfolio id
        let portChecked = [];
        for(let i = 0; i<this.props.portfolios.length; i++){
            if(this.props.portfolios[i].checked === true){
                portChecked.push(this.props.portfolios[i].IdCatagory);
            }
        }
        //set portfolio storage
        this.props.onPutPortfoliosStorage(portChecked);
        // fetch product
        this.props.onFetchProducts();
    }

    render(){
        return(
            <Aux>
                <Banner/>
                <Main
                    products = {this.props.products}
                    portForm = {this.props.portfolios}
                    pageFrom = "Products"
                    priceForm = {this.state.filterFrice}
                    clicked = {this.checkPortfolioItemsHandler}
                    changed = {this.selectChangeHandler}
                    addCartClicked = {this.props.onAddToCart}
                    putAlertCartShow = {this.props.onPutAlertCartShow}
                />
            </Aux>
        );
    }
}
const mapStateToProps = state =>{
    return{
        portfolios: state.products.portfolios,
        products: state.products.products,
        path: state.home.path
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onFetchProducts : () => dispatch(actions.fetchProducts()),
        onFetchPortfolios: () => dispatch(actions.fetchPortfolios()),
        onCheckPortfolioItems: (portfolioId) => dispatch(actions.checkPortfolioItems(portfolioId)),
        onPutPortfoliosStorage: (portfolios) => dispatch(actions.putPortfoliosStorage(portfolios)),
        onPutPriceStorage: (price) => dispatch(actions.putPriceStorage(price)),
        onSetPath: (path) => dispatch(actions.setPath(path)),
        onAddToCart: (id) => dispatch(actions.addToCart(id)),
        onPutAlertCartShow: () => dispatch(actions.putAlertCartShow())
    };  
};

export default connect(mapStateToProps,mapDispatchToProps)(Products);

