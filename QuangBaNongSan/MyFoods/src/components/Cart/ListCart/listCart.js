import React, {Component} from 'react';

import {baseUrl, formatCurrency} from '../../../shared/utility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import style from '../../../Styles/style.css';
import classes from './listCart.css';

class ListCart extends Component{
    onDeleteClickedHandler = (event,id) =>{
        event.preventDefault();
        this.props.deleteClicked(id);
    }
    onChangeQuantityProductHandler = (event,id) =>{
        event.preventDefault();
        const quantity = event.target.value;
        if(quantity < 1 || quantity.toString() === ""){
            alert("aaaa");
            this.props.changeQuantityProductClicked(id,1);
        }else{
            this.props.changeQuantityProductClicked(id,quantity);
        }
        
    }
    render(){
        const listProduct = this.props.cartProducts.map(key =>{
            return <tr key = {key[0].id}>
                        <td><img width="150px" src={baseUrl +"public/images/products/"+key[0].image} /></td>
                        <td>{key[0].name}</td>
                        <td><span id="price">{formatCurrency(key[0].price)}</span> đ</td>
                        <td>
                            <span>
                            {!key[0].quantumDiscount ? 0 : key[0].quantumDiscount } %
                            </span>
                        </td>
                        <td><input 
                                className = "text-center" 
                                type="number"
                                min = "1"
                                defaultValue = {key[1].quantity}
                                onChange = {(event)=>this.onChangeQuantityProductHandler(event,key[0].id)}
                                />
                        </td>
                        <td>{key[0].unitName}</td>
                        <td><span id="thanhtien">
                            {!key[0].quantumDiscount ? formatCurrency(key[0].price*key[1].quantity) : formatCurrency(key[0].price * (1 - key[0].quantumDiscount/100 )*key[1].quantity)}
                            </span> đ
                        </td>
                        <td>
                            <button
                                onClick = {(event)=>this.onDeleteClickedHandler(event,key[0].id)}
                                className = {classes.iconDelete} 
                                title="xóa sản phẩm"><FontAwesomeIcon icon = {faTrashAlt} />
                            </button>
                        </td>
                   </tr>
        });
        return(
            <div className="mt-5">
                <div className={["container",style.container ].join(" ")}>
                    <table className = {["table","table-bordered","text-center",classes.shadow].join(" ")}>
                        <thead>
                            <tr className= {classes.bgColor}>
                                <th colSpan="2">Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Giảm Giá</th>
                                <th>Số Lượng</th>
                                <th>ĐVT</th>
                                <th>Thành Tiền</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {listProduct}
                        </tbody>
                        
                    </table>
                </div>
            </div>
        );
    }
}
export default ListCart;