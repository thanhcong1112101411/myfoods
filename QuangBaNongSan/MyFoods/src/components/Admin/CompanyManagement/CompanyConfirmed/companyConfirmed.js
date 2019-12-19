import React, {Component} from 'react';

class CompanyConfirmed extends Component{

    render(){
        const listCompany = this.props.companyConfirmed.map(ig=>{
            return(
                <tr key = {ig.Id}>
                    <td>{ig.companyName}</td>
                    <td>{ig.companyEmail}</td>
                    <td>{ig.companyTel}</td>
                    <td></td>
                </tr>
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
                    </tr>
                </thead>
                <tbody>
                    {listCompany}
                </tbody>
            </table>
        );
    }
}
export default CompanyConfirmed;