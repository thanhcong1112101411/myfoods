import React from 'react';

import classes from './feature.css';
import style from '../../../Styles/style.css';

const feature = (props) =>(
    <div className={classes.feature}>
        <div className = {["container",style.container].join(" ")}>
            <div className="row">
                <div className="col-md-4 featureItem">
                    <div className= {[classes.icon, "text-center mb-3"].join(" ")}>
                        <span className="fab fa-yelp fa-2x btn-icon__inner btn-icon__inner-bottom-minus"></span>
                    </div>
                    <div className = {[classes.content, "text-center"].join(" ")}>
                        <h1 className="h3">Sản Phẩm An Toàn</h1>
                        <p>Achieve virtually any design and layout from within the one template.</p>
                    </div>
                </div>
                <div className="col-md-4 featureItem">
                    <div className= {[classes.icon, "text-center mb-3"].join(" ")}>
                        <span className="fas fa-fire fa-2x btn-icon__inner btn-icon__inner-bottom-minus"></span>
                    </div>
                    <div className = {[classes.content, "text-center"].join(" ")}>
                        <h1 className="h3">Sản Phẩm An Toàn</h1>
                        <p>Achieve virtually any design and layout from within the one template.</p>
                    </div>
                </div>
                <div className="col-md-4 featureItem">
                    <div className= {[classes.icon, "text-center mb-3"].join(" ")}>
                        <span className="fab fa-whmcs fa-2x btn-icon__inner btn-icon__inner-bottom-minus"></span>
                    </div>
                    <div className = {[classes.content, "text-center"].join(" ")}>
                        <h1 className="h3">Sản Phẩm An Toàn</h1>
                        <p>Achieve virtually any design and layout from within the one template.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default feature;