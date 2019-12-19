import React, {Component} from 'react';

import classes from './sellingProduct.css';

import ProductBG from '../product';
import ProductItem from '../ProductItem/productItem';

class SellingProduct extends Component{
    render(){
        const sellingProductList = this.props.sellingProducts.map(ig=>{
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
                {sellingProductList}
            </ProductBG>
        );
    }
}

export default SellingProduct;