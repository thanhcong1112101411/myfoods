import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './logo.css';
import seasonalFoodsLogo from "../../assets/images/logo/logo-web.png";

const logo = (props) =>(
    <div className = {classes.Logo}>
        <NavLink to="/seasonalFoods">
            <img src={seasonalFoodsLogo} alt="logo"/>
        </NavLink>
    </div>  
);

export default logo;