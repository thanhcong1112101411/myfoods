import React from 'react';

import classes from './input.css';

const input = ( props ) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch ( props.elementType ) {
        case ( 'name' ):
            inputElement =  <div>
                                <span>{props.elementConfig.placeholder}: </span>
                                <input 
                                    className={inputClasses.join(' ')} 
                                    type="text"
                                    defaultValue = {(props.value)? props.value.cusName: ""}
                                    onChange={props.changed}
                                />
                            </div>;
            break;
        case ("phone"):
            inputElement =  <div>
                                <span>{props.elementConfig.placeholder}: </span>
                                <input 
                                    className={inputClasses.join(' ')} 
                                    type="text"
                                    defaultValue = {(props.value)? props.value.phonenumber: ""}
                                    onChange={props.changed}
                                />
                            </div>;
            break;
        case ("email"):
            inputElement =  <div>
                                <span>{props.elementConfig.placeholder}: </span>
                                <input 
                                    className={inputClasses.join(' ')} 
                                    type="text"
                                    defaultValue = {(props.value)? props.value.email: ""}
                                    onChange={props.changed}
                                />
                            </div>;
            break;
        
    }

    return inputElement;

};

export default input;