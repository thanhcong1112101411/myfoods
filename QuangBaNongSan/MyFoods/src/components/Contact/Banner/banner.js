import React from 'react';

import classes from './banner.css';
import style from '../../../Styles/style.css';
import {baseUrl} from '../../../shared/utility';

const banner = (props_ =>{
    return(
        <div className = {classes.slider}>
            <div className = {classes.images}>
                <div>
                    <img width="100%" src = {baseUrl+"public/images/slider/7.png"}/>
                </div>
                <div>
                    <img width="100%" src = {baseUrl+"public/images/slider/12.png"}/>
                </div>
                <div>
                    <img width="100%" src = {baseUrl+"public/images/slider/2.png"}/>
                </div>
                <div>
                    <img width="100%" src = {baseUrl+"public/images/slider/3.png"}/>
                </div>
                <div style = {{width: "20%"}}>
                    <img width="100%" src = {baseUrl+"public/images/slider/4.png"}/>
                </div>
                <div>
                    <img width="100%" src = {baseUrl+"public/images/slider/5.png"}/>
                </div>
                <div>
                    <img width="100%" src = {baseUrl+"public/images/slider/9.png"}/>
                </div>
                <div>
                    <img width="100%" src = {baseUrl+"public/images/slider/11.png"}/>
                </div>
                <div>
                    <img width="100%" src = {baseUrl+"public/images/slider/8.png"}/>
                </div>
                <div style= {{width: "30%"}} >
                    <img width="100%" src = {baseUrl+"public/images/slider/7.png"}/>
                </div>
                <div>
                    <img width="100%" src = {baseUrl+"public/images/slider/8.png"}/>
                </div>
                <div style= {{width: "20%"}}>
                    <img width="100%" src = {baseUrl+"public/images/slider/6.png"}/>
                </div>
                <div style= {{width: "20%"}}>
                    <img width="100%" src = {baseUrl+"public/images/slider/5.png"}/>
                </div>
                <div style = {{width: "20%"}}>
                    <img width="100%" src = {baseUrl+"public/images/slider/12.png"}/>
                </div>
                <div>
                    <img width="100%" src = {baseUrl+"public/images/slider/2_01.png"}/>
                </div>
                <div style = {{width: "20%"}}>
                    <img width="100%" src = {baseUrl+"public/images/slider/11.png"}/>
                </div>
                
            </div>
            <img width="100%" src = {baseUrl+"public/images/banner/white.png"}/>
            <div className = {[classes.bannerContent,"container",style.container].join(" ")}>
                <div>
                    <h1>Liên Hệ</h1>
                    <p>Cám ơn bạn đã ghé thăm Seasonal Foods, liên hệ với chúng tôi nếu các bạn có bất cứ câu hỏi hay ý kiến hữu ích nào</p>
                </div>
            </div>
        </div>

    );
});

export default banner;