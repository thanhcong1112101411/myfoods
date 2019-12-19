import React from 'react';

import classes from './title.css';

const title = (props) =>{
    return(
        <div className = {classes.title}>
            <h1>{props.title}</h1>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default title;