import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import classes from './catagorySearchItem.css';

class CatagorySearchItem extends Component{
    selectCatagorySearchItemClick = () =>{
        this.props.selectCatagory(this.props.IdCatagory);
    }
    render(){
        return(
            <Link
                className = {classes.searchItemStyle}
                to = "/seasonalFoods/products"
                onClick = {this.selectCatagorySearchItemClick}
            >
                {this.props.catagoryName}
            </Link>
        );
    }
}
export default CatagorySearchItem;