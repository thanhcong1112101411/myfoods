import React,{Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

import classes from './bills.css';
import {formatCurrency} from '../../../shared/utility';

import BillsDetail from './BillsDetail/billsDetail';
import BillItem from '../../../components/Auth/BillItem/billItem';

class Bill extends Component{
    state = {
        showBillDetail: false
    }
    componentDidMount(){
        this.props.onFetchBills();
    }
    showBillDetailHandler = (id_bill) =>{
        this.setState({showBillDetail: true});
        this.props.onFetchBillDetail(id_bill);
    }
    hideBillItemHandler = ()=>{
        this.setState({showBillDetail: false});
    }
    render(){
        const billItems = this.props.bills.map(item =>{
            return  <BillItem
                        key = {item.id_bills}
                        id_bills = {item.id_bills}
                        create_at = {item.create_at}
                        total = {item.total}
                        status = {item.status}
                        showBillDetailHander = {this.showBillDetailHandler}
                    />
                
        });
        return(
            <div>
                <table className = {["table","table-bordered","text-center"].join(" ")}>
                    <thead>
                        <tr>
                            <th>Mã Đơn Hàng</th>
                            <th>Ngày Đặt</th>
                            <th>Tổng Tiền</th>
                            <th>Trạng Thái</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {billItems}
                    </tbody>
                </table>
                <BillsDetail
                    show = {this.state.showBillDetail}
                    hideBillItem = {this.hideBillItemHandler}
                    billsDetail = {this.props.billsDetail}
                />
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return{
        bills: state.auth.bills,
        billsDetail: state.auth.billDetail
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onFetchBills : ()=>dispatch(actions.fetchBills()),
        onFetchBillDetail: (id_bill)=>dispatch(actions.fetchBillDetail(id_bill))
    };  
};

export default connect(mapStateToProps,mapDispatchToProps)(Bill);