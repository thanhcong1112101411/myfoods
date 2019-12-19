import React, {Component} from 'react';

import Products from '../../Product/product';
import FilterPortfolio from './FilterPortfolio/filterPortfolio';
import FilterPrice from './FilterPrice/filterPrice';

import classes from './main.css';
import style from '../../../Styles/style.css';
class Main extends Component{
    render(){
        const productList = this.props.products.map(ig =>{
            return <div
                        key = {ig.productId}
                        className = {["col-md-4 col-sm-8 col-10 offset-1 offset-sm-2 offset-md-0",classes.productItem].join(" ")}>
                        <Products
                            pageFrom = {this.props.pageFrom}
                            id = {ig.productId}
                            price = {ig.Price}
                            rrp = {ig.rrp}
                            name = {ig.Name}
                            image = {ig.Images}
                            quantumDiscount = {ig.Quantum}
                            addCartClicked = {this.props.addCartClicked}
                            putAlertCartShow = {this.props.putAlertCartShow}
                        />
                    </div>
        });
        return(
            <div className = {[classes.productMain, style.padding].join(" ")}>
                <div className = {["container",style.container].join(" ")}>
                    <div className = "row">
                        <div className = "col-md-3">
                            <div className = "row">
                                <div className = "col-12">
                                    <FilterPortfolio
                                        heading = "Danh Mục"
                                        portfolioForm = {this.props.portForm}
                                        clicked = {this.props.clicked}
                                    />
                                    <FilterPrice 
                                        priceForm = {this.props.priceForm} 
                                        changed = {this.props.changed}
                                    />
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className = "col-md-9">
                            <div className = "row">
                            {productList}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Main;