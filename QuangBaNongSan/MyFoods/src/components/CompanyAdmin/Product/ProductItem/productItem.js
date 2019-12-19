import React, {Component} from 'react';

import classes from './productItem.css';

import { faTrashAlt, faPenAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ImageProductLink, formatCurrency} from '../../../../shared/utility';

class ProductItem extends Component{
    onDeleteProduct = () =>{
        
        this.props.onDeleteProductClick(this.props.id);
        
    }
    onProductUpdateIconClick = () =>{
        this.props.productUpdateIconClick(this.props.id);
        this.props.productUpdateIconClickShow();
    }
    render(){
        let sellPrice = this.props.price;
        let quantumDiscount = 0;
        if(this.props.quantumDiscount){
            quantumDiscount = this.props.quantumDiscount;
            sellPrice = this.props.price * (1- this.quantityProduct/100);
        }
        return(
            <tr className = {classes.itemStyle}>
                <td>{this.props.name}</td>
                <td><img width="150px" src={ImageProductLink + this.props.image}></img></td>
                <td>{formatCurrency(this.props.price)} đ</td>
                <td>{ (this.props.rrp == 0 ? "Chưa Đặt" : formatCurrency(this.props.rrp) + " đ")}</td>
                <td>{quantumDiscount}%</td>
                <td>{formatCurrency(sellPrice)} đ</td>
                <td>{this.props.quantityProduct}</td>
                <td>{this.props.unitName}</td>
                <td>
                    <button onClick = {this.onDeleteProduct} className = {classes.deletebtn}><FontAwesomeIcon icon = {faTrashAlt} /></button>
                    <button onClick = {this.onProductUpdateIconClick} className = {classes.updatebtn}><FontAwesomeIcon icon = {faPenAlt} /></button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;