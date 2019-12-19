import React from 'react';

import classes from './filterSelectItem.css';

const filterSelectItem = (props) =>{
    let inputElement = null;
    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = (
                <li className = {classes.filterItem}>
                    <input
                        type = {props.type}
                        onClick = {props.clicked} 
                        defaultChecked = {props.checked}
                        />
                        
                    <span>{props.value}</span>
                </li>
            );
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={classes.filterSelect}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
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
