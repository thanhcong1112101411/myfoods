import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import classes from './productSearchItem.css';

class ProductSearchItem extends Component{
    selectSearchItemClick = () =>{
        this.props.selectSearch(this.props.Name);
    }
    render(){
        return(
            <Link
                className = {classes.searchItemStyle}
                to = "/seasonalFoods/products"
                onClick = {this.selectSearchItemClick}
            >
                {this.props.Name}
            </Link>
        );
    }
}
export default ProductSearchItem;