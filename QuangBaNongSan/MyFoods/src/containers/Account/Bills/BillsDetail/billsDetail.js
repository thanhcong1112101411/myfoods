import React,{Component} from 'react';

import classes from './billsDetail.css';

import Aux from '../../../../hoc/Auxx/auxx';
import Backdrop from '../../../../components/UI/backdrop/backdrop';
import {formatCurrency} from '../../../../shared/utility';
class BillsDetail extends Component{
    render(){
        let idBill = 0;
        let createAt = "";
        let total = 0;
        const billsDetailItem = this.props.billsDetail.map(item =>{
            idBill = item.id_bills;
            createAt = item.create_at;
            total = formatCurrency(item.total);
            return  <tr key = {item.id_product}>
                        <td>{item.id_product}</td>
                        <td>{item.name}</td>
                        <td>{formatCurrency(item.price)} đ</td>
                        <td>{item.quantum}</td>
                        <td>{formatCurrency(item.money)} đ</td>
                    </tr>
        });
        return(      
            <Aux>
                <Backdrop show={this.props.show} clicked = {this.props.hideBillItem} />
                <div className = {classes.content}
                    style={{
                        display: this.props.show ? 'block': 'none'
                    }}
                >
                    <div className = {classes.Heading}>
                        <div>
                            <p>Mã Đơn Hàng: 
                                <span> {idBill}</span>
                            </p>
                        </div>
                        <div>
                            <p>Ngày Tạo: <span>{createAt}</span></p>
                        </div>
                    </div>
                    <table className = {["table","table-bordered","text-center"].join(" ")}>
                        <thead>
                            <tr>
                                <th>Mã Sản Phẩm</th>
                                <th>Tên Sản Phẩm</th>
                                <th>Giá Bán</th>
                                <th>Số Lượng</th>
                                <th>Thành Tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {billsDetailItem}
                        </tbody>
                    </table>
                    <div className = {classes.Footer}>
                        <p>Tổng Tiền: <span>{total} đ</span></p>
                        
                    </div>
                </div>
            </Aux>
            
        );
    }
}
export default BillsDetail;