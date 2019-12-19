import React from 'react';

import classes from './banner.css';
import style from '../../../Styles/style.css';
import {baseUrl,ImageProductLink} from '../../../shared/utility';

const banner = (props) =>{
    return(
        <div className = {classes.banner}>
            <img width="100%" src= {baseUrl + "public/images/banner/banner-lienhe.png"}/>
            <div className = {[classes.bannerContent, "container",style.container].join(" ")}>
                <div>
                    <h1>{props.name}</h1>
                    <p>Your company will look astonishing. Attract more visitors, and win more business with Front template.</p>
                </div>
                
            </div>
            <div className = {classes.circleMain}>
                <img width="100%" height="100%" src={ImageProductLink+"bg.PNG"}/>
                <div className = {[classes.circleContent, "text-center"].join(" ")}>
                    <h1 className = {["h3","mb-4"].join(" ")}>Ain't Got Far To Go Tour Playlist</h1>
                    <p>Joss-embarks on a tour of the US and Europe this fall, where she'll be listening these recent tracks </p>
                    <input type="submit" value="VIEW PLAYLIST"/>
                </div>
                <div className = {[classes.circleSp, classes.circle1].join(" ")}>
                    <img width="100%" height="100%" src={ImageProductLink+"bg.PNG"}/>
                </div>
                <div className = {[classes.circleSp, classes.circle2].join(" ")}>
                    <img width="100%" height="100%" src={ImageProductLink+"bg.PNG"}/>
                </div>
                <div className = {[classes.circleSp, classes.circle3].join(" ")}>
                    <img width="100%" height="100%" src={ImageProductLink+"bg.PNG"}/>
                </div>
                <div className = {[classes.circleSp, classes.circle4].join(" ")}>
                    <img width="100%" height="100%" src={ImageProductLink+"bg.PNG"}/>
                </div>
                <div className = {[classes.circleSp, classes.circle5].join(" ")}>
                    <img width="100%" height="100%" src={ImageProductLink+"bg.PNG"}/>
                </div>
            </div>
        </div>
    );
}
export default banner;


