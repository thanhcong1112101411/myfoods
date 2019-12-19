import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import classes from './productSearch.css';

import ProductSearchItem from './ProductSearchItem/productSearchItem';

class ProductSearch extends Component{
    
    render(){
        const ListProductSearch = this.props.listProduct.map(ig=>{
            return(
                <ProductSearchItem
                    key = {ig.IdProduct}
                    Name = {ig.Name}
                    selectSearch = {this.props.selectSearch}
                />
            )
        })
        return(
            <div className = {classes.itemSearch}>
                {ListProductSearch}
            </div>
        );
    }
}
export default ProductSearch;