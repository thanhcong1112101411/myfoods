import React from 'react';

import classes from './alert2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const alert = (props) =>{
    return(
        <div className = {classes.alert} >
            <div className = {classes.placeHover}></div>
            <div className={classes.boxAlert}>
                <div>
                    <button
                        onClick = {props.onDeleteAlert}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                
                <p>Đặt Hàng Thành Công !</p>
            </div>
        </div>
    );
}

export default alert;