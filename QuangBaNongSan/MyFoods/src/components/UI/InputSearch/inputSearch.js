import React from 'react';
import {Link} from 'react-router-dom';

import classes from './inputSearch.css';

const filterSelectItem = (props) =>{
    let inputElement = null;
    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = (
                <input
                    className = {classes.searchInput}
                    type = {props.elementConfig.type}
                    placeholder = {props.elementConfig.placeholder}
                    value = {props.value}
                    onChange = {props.changed}
                    // onKeyUp = {props.changed}
                />
            );
            break;
        case ('button'):
            inputElement = (
                <button
                    className = {classes.searchButton}
                    onClick = {props.clicked}
                ><Link to = "/seasonalFoods/products">
                    {props.elementConfig.placeholder}
                </Link>
                </button>
            );
            break;
        default:
            inputElement = (
                <p>wrong</p>
            );
            break;
            
    }
    return inputElement;
}

export default filterSelectItem;
