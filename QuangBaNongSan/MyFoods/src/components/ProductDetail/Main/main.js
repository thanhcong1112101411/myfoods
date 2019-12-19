import React from 'react';

import classes from './main.css';
import styles from '../../../Styles/style.css';

import ListProductImg from './ListProductImg/listProductImg';
import ContentDetail from './ContentDetail/contentDetail';
import DescriptionDetail from './DescriptionDetail/descriptionDetail';
import ProductFromDetail from './ProductFromDetail/productFromDetail';

const Main = (props) =>{
    return(
        <div className={["container",styles.container, styles.pdTop].join(" ")}>
            <div className="row">
                <div className="col-md-5">
                    <ListProductImg
                        image= {props.productDetail.Images}
                    />
                </div>
                <div className = {["col-md-6","offset-md-1"].join(" ")}>
                    <ContentDetail
                        productDetail = {props.productDetail}
                    />
                    <ProductFromDetail
                        productDetail = {props.productDetail}
                    />
                </div>
            </div>
            <DescriptionDetail
                description = {props.productDetail.Description2}
            />
        </div>
        
    );
}
export default Main;