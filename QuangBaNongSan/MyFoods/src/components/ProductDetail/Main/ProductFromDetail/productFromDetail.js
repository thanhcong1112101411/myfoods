import React from 'react';
import classes from './productFromDetail.css';
import {logoImageLink} from '../../../../shared/utility';
import { Link } from 'react-router-dom';

const productFromDetail = (props) =>{
    return(
        <div className = {classes.company}>
            <p className = {classes.heading}>Được Cung Cấp Bởi</p>
            <div className = {classes.companyLogo}>
                <div className = {classes.logo}>
                    <Link to={"/seasonalFoods/company/"+props.productDetail.companyLink}>
                        <img width="100%" src= {logoImageLink + props.productDetail.companyLogo}/>
                    </Link>
                </div>
                <p className = {classes.companyName}>{props.productDetail.companyName}</p>
             </div>
        </div>
    );
}
export default productFromDetail;