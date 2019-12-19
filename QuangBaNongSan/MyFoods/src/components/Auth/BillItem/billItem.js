import React,{Component} from 'react';

import {formatCurrency} from '../../../shared/utility';
import classes from './billItem.css';

class BillItem extends Component{
    onshowBillDetailHander = (event,id_bill) =>{
        event.preventDefault();
        this.props.showBillDetailHander(id_bill);
    }
    render(){
        const status = parseInt(this.props.status);
            let statusContent = "";
            if(status === 0){
                statusContent = "Đã Giao";
            }else if(status === 1){
                statusContent = "Đang xác Nhận";
            }else{
                statusContent = "Đã Hủy";
        }
        return(
            <tr>
                <td>{this.props.id_bills}</td>
                <td>{this.props.create_at}</td>
                <td>{formatCurrency(this.props.total)} đ</td>
                <td>{statusContent}</td>
                <td>
                    <button className = {classes.detailButton}
                        onClick = {(event) =>this.onshowBillDetailHander(event,this.props.id_bills)}
                    >Chi Tiết</button>
                </td>
            </tr>
        );
    }
}
export default BillItem;