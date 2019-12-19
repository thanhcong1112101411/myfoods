import React from 'react';

import classes from './alert1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const alert = (props) =>{
    return(
        <div className = {classes.alert} >
            <button
                onClick = {props.putAlert}
            >
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <p>{props.title}</p>
        </div>
    );
}

export default alert;