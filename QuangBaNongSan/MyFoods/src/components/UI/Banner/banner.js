import React from 'react';

import classes from './banner.css';
import style from '../../../Styles/style.css';

import bgBannerHome from '../../../assets/images/banner/mau.png';
import bgBannerCart from '../../../assets/images/banner/banner-cart.png';

const banner = (props) =>{

    return(
        <div className={classes.banner}>
            <img width="100%" src={ props.pageFrom === "Cart"? bgBannerCart: bgBannerHome} alt = "banner"/>
            <div className = {["container",style.container,classes.bannerContent].join(" ")}>
                <div>
                    <h1>{props.heading}</h1>
                    <p>Kênh Bán Hàng Nông Sản Trực Tuyến Uy Tín, Chất Lượng. Cam Kết Mang Đến Cho Khách Hàng Những 
                        Sản phẩm Tốt Nhất
                    </p>
                </div>
                </div>
            
        </div>
    );
}
export default banner;