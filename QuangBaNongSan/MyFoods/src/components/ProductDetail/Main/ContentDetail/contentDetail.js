import React,{Component} from 'react';

import {formatCurrency} from '../../../../shared/utility';
import classes from './contentDetail.css';

class ContentDetail extends Component{
    render(){
        console.log(this.props.productDetail);
        let sellPrice = this.props.productDetail.Price;
        let priceshow = null;
        let discountRibbon = null;

        if(this.props.productDetail.rrp != 0){
            priceshow = (
                <span className={[classes.rrp, classes.line].join(" ")}>{this.props.productDetail.rrp} đ</span>
            );
        }
        if(this.props.productDetail.Quantum){
            sellPrice = sellPrice * (1 - this.props.productDetail.Quantum/100);
            priceshow = (
                <span className={[classes.rrp, classes.line].join(" ")}>{formatCurrency(this.props.productDetail.Price)} đ</span>
            );
            discountRibbon = (
                <span className = {classes.price}>-{this.props.productDetail.Quantum}%</span>
            );
        }
        return(
            <div className = {classes.content}>
                <h1>{this.props.productDetail.Name}</h1>
                <p>{this.props.productDetail.Description}
                </p>
                <p>
                    Giá: <span className = {classes.price}>{sellPrice} đ/{this.props.productDetail.unitName}</span>
                    {priceshow}
                    {discountRibbon}
                </p>
                
                <button>Thêm Vào Giỏ Hàng</button>
            </div>
        );
        }
    }
export default ContentDetail;