import React from 'react';

import classes from './signInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const input = ( props ) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
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
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }
    let iconElement = null;
    switch(props.icon){
        case ('user'):
            iconElement = <FontAwesomeIcon icon = {faUser} />;
            break;
        case ('password'):
            iconElement = <FontAwesomeIcon icon = {faLock} />;
            break;
        case ('phone'):
            iconElement = <FontAwesomeIcon icon = {faPhone} />;
            break;
        case ('email'):
            iconElement = <FontAwesomeIcon icon = {faEnvelope} />;
            break;
        default:
            iconElement = <FontAwesomeIcon icon = {faUser} />;
            break;
    }
    
    return (
        <div className = {classes.Input}>
            <span>{iconElement}</span>
            {inputElement}
        </div>
    );

};

export default input;