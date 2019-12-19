import React from 'react';

import classes from './input.css';

const Input = ( props ) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = (
                <div className = {classes.element}>
                    <p>{props.elementConfig.placeholder}<span className={classes.note}>{props.elementConfig.note}</span></p>
                    <input
                        type = {props.elementConfig.type}
                        className={inputClasses.join(' ')}
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed} />
                </div>
                );
            break;
        case ( 'inputFile' ):
            inputElement = (
                <div className = {classes.element}>
                    <p>{props.elementConfig.placeholder}<span className={classes.note}>{props.elementConfig.note}</span></p>
                    <input
                        type = {props.elementConfig.type}
                        className={inputClasses.join(' ')}
                        {...props.elementConfig}
                        // value={props.value}
                        onChange={props.changed} />
                </div>
                );
            break;
        case ( 'textarea' ):
            inputElement = (
                <div className = {classes.element}>
                    <p>{props.elementConfig.placeholder}<span className={classes.note}>{props.elementConfig.note}</span></p>
                    <textarea
                        className={inputClasses.join(' ')}
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed} />
                </div>
            );
            break;
        case ( 'select' ):
            inputElement = (
                <div className = {classes.element}>
                    <p>{props.elementConfig.placeholder}<span className={classes.note}>{props.elementConfig.note}</span></p>
              
                    <select
                        className={inputClasses.join(' ')}
                        value={props.value}
                        onChange={props.changed}>
                        {props.options.map(option => (
                            <option 
                                key={option.value} 
                                value = {option.value}
                                >
                                    {option.displayValue}
                            </option>
                        ))}
                    </select>
                </div>
            );
            break;
        case ( 'selectDefault' ):
            inputElement = (
                <div className = {classes.element}>
                    <p>{props.elementConfig.placeholder}<span className={classes.note}>{props.elementConfig.note}</span></p>
                    
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
                </div>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div>
            {inputElement}
        </div>
    );

};

export default Input;