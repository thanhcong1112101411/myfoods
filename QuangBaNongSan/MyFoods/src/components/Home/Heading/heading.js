import React from 'react';

import classes from './heading.css';

const heading = (props) =>(
    <div className={[classes.productHeading, "text-center"].join(" ")}>
        <h1>{props.children}</h1>
    </div>
);

export default heading;