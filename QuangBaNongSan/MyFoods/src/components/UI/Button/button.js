import React from 'react';
import classes from './button.css';

const button = (props) =>{
    let button = null;
    switch(props.type){
        case "update":{
            button = <button className = {[classes.button, classes.update].join(" ")}>{props.children}</button>;
            break;
        }
        default:{
            button = <button className = {[classes.button, classes.update].join(" ")}>{props.children}</button>;
            break;
        }
        
    }
    return button;
}
export default button;