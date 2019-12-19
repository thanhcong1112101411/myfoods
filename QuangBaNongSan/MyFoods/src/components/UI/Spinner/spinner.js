import React from 'react';

import classes from './spinner.css';

const one = [classes.inner, classes.one].join(" ");
const two = [classes.inner, classes.two].join(" ");
const three = [classes.inner, classes.three].join(" ");

const Spinner = () => (
    <div className = {classes.loader}>
        <div className = {one}></div>
        <div className = {two}></div>
        <div className = {three}></div>
    </div>
);

export default Spinner;


