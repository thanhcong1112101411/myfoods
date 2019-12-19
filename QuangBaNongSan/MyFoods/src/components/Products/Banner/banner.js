import React from 'react';

import classes from './banner.css';
import style from '../../../Styles/style.css';

import bannerProductImage from '../../../assets/images/banner/banner-product.png';
import eggImage from '../../../assets/images/banner/egg.png';
import tomatoImage from '../../../assets/images/banner/tomatoes.png';

const banner = (props) =>(
    <div className = {[classes.banner, classes.bannerProductCont].join(" ")}>
        <img width="100%" src={bannerProductImage} alt = "banner seasonalfoods"/>
        <div className = {[classes.bannerContent, "container",style.container, classes.bannerProduct].join(" ")}>
            <div>
                <h1>Sản Phẩm</h1>
                <p>Your company will look astonishing. Attract more visitors, and win more business with Front template.</p>
            </div>
            
        </div>
        <div className= {classes.bannerProductImg}>
            <div className = {classes.bg}>
                <img width="100%" src={eggImage} alt="egg"/>
            </div>
            <div className = {classes.bg}>
                <img width="100%" src={eggImage} alt="egg"/>
            </div>
            <div className = {classes.bgAbs}>
                <img width="100%" src={tomatoImage} alt="tomato"/>
            </div>
        </div>
    </div>
);

export default banner;