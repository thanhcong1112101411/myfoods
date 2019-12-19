import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye, faCartPlus } from '@fortawesome/free-solid-svg-icons';


import {baseUrl, formatCurrency} from '../../shared/utility';

import classes from './product.css';

class Product extends Component{
    onAddCartClickHandler = (event,id) =>{
        event.preventDefault();
        this.props.putAlertCartShow();
        this.props.addCartClicked(id);
    }
    render(){
        let ribbon = null;
        let iconList = null;
        let discountRibbon = null;
        let sellPrice = this.props.price;
        let priceshow = null;

        // let productPageItemStyle = [classes.productPageItem];
        

        if(this.props.pageFrom === "Products"){
            iconList = (
                <div className={classes.icon}>
                    <span><button title="Thêm Vào Sản Phẩm Yêu Thích"><FontAwesomeIcon icon={faHeart} /></button></span>
                    <span><button title="Thêm Vào Xem Sau"><FontAwesomeIcon icon={faEye} /></button></span>
                    <span>
                        <button 
                            title="Thêm Vào Giỏ Hàng"
                            onClick = {(event)=>this.onAddCartClickHandler(event,this.props.id)}
                        ><FontAwesomeIcon icon={faCartPlus} /></button>
                    </span>
                </div>
            );
            // productPageItemStyle = productPageItemStyle.push(classes.border);
        }
        if(this.props.pageFrom === "Home"){
            ribbon = (
                <div className={classes.ribbon}>
                    <div className = {classes.ribbonInner}>SeasonalFoods</div>
                </div>
            );
        }
        if(this.props.rrp != 0){
            priceshow = (
                <span className={[classes.rrp, classes.line].join(" ")}>{formatCurrency(this.props.rrp)} đ</span>
            );
        }
        if(this.props.quantumDiscount){
            sellPrice = sellPrice * (1 - this.props.quantumDiscount/100);
            priceshow = (
                <span className={[classes.rrp, classes.line].join(" ")}>{formatCurrency(this.props.price)} đ</span>
            );
            discountRibbon = (
                <div className={classes.discountRibbon}>
                    <div className={classes.discountRibbonInner}>-{this.props.quantumDiscount}%</div>
                </div>
            );
        }

        return(
            <div className = {classes.productDec}>
                <Link className = {classes.linkStyle} to = {"/seasonalFoods/productDetail/"+this.props.id}>
                    <div className = {classes.productPageItem}>
                        {ribbon}
                        <div className={classes.img}>
                            <img width="100%" src={baseUrl +"public/images/products/"+ this.props.image} alt="seasonal food"/>
                        </div>
                        <div className = {[classes.content, "text-center"].join(" ")}>
                            <h1 className="h5">{this.props.name}</h1>
                            <span className={classes.price}>{formatCurrency(sellPrice)} đ</span>
                            {priceshow}
                        </div>
                       {discountRibbon}
                    </div>
                    {iconList}
                </Link>
                
            </div>
        );
    }
}

export default Product;