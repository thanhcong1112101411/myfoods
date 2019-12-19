import React, {Component} from 'react';

import classes from './hiddenProduct.css';

import ProductBG from '../product';
import ProductItem from '../ProductItem/productItem';

class HiddenProduct extends Component{
    render(){
        const hiddenProductList = this.props.hiddenProducts.map(ig=>{
            return(
                <ProductItem
                    key = {ig.productId}
                    id = {ig.productId}
                    name = {ig.Name}
                    image = {ig.Images}
                    price = {ig.Price}
                    rrp = {ig.rrp}
                    quantityProduct = {ig.quantityProduct}
                    quantumDiscount = {ig.Quantum}
                    unitName = {ig.unitName}

                    onDeleteProductClick = {this.props.onDeleteProductClick}
                    productUpdateIconClick = {this.props.productUpdateIconClick}
                    productUpdateIconClickShow = {this.props.productUpdateIconClickShow}
                />
            )
        })
        return(
            <ProductBG>
                {hiddenProductList}
            </ProductBG>
        );
    }
}

export default HiddenProduct;