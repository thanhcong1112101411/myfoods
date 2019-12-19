import React,{Component} from 'react';

import classes from './payment.css';
import style from '../../../Styles/style.css';
import {formatCurrency} from '../../../shared/utility';

class payment extends Component{
    putAlertCartShowHandler = () =>{
        if(!this.props.id){
            this.props.putAlertCartShow();
        }
        
    }
    render(){
        return(
            <div className={classes.payment}>
                <div className = {["container", style.container].join(" ")}>
                    <div className="row">
                        <div className = {["col-md-4","offset-md-8"].join(" ")}>
                            <div className = {classes.paymentContent}>
                                <strong>Tổng Tiền: </strong>
                                <span id="tongtien">{formatCurrency(this.props.totalMoney)} đ</span>
                                <button
                                    onClick = {this.putAlertCartShowHandler}
                                >Tiến Hành Đặt Hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default payment;