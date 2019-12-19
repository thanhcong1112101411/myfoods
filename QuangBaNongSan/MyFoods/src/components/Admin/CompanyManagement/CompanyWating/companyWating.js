import React, {Component} from 'react';

import { faCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CompanyWatingItem from './companyWatingItem/companyWatingItem';

class CompanyWating extends Component{
    
    render(){
        const listCompany = this.props.companyWating.map(ig=>{
            return(
                <CompanyWatingItem 
                    key = {ig.Id}
                    name = {ig.companyName}
                    phone = {ig.companyTel}
                    email = {ig.companyEmail}
                    id = {ig.Id}
                    confirmCompany = {this.props.confirmCompany}
                />
            )
        })
        return(
            <table className="table table-bordered mt-5 text-center">
                <thead>
                    <tr style = {{backgroundColor: "green", color: "#fff"}}>
                        <th>Công Ty</th>
                        <th>Email</th>
                        <th>Số Điện Thoại</th>
                        <th>Địa Chỉ</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {listCompany}
                </tbody>
            </table>
        );
    }
}
export default CompanyWating;