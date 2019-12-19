import React from 'react';

import classes from './listProductImg.css';
import {baseUrl} from '../../../../shared/utility';

const listProductImg = (props) =>{
    return(
        <div className = {classes.litsProductImg}>
            <div>
                <img width="100%" src = {baseUrl + "public/images/products/"+props.image}/> 
            </div>
        </div>
    );
}
export default listProductImg;