import React,{Component} from 'react';
import { connect } from 'react-redux';

import Title from '../../../components/CompanyAdmin/Title/title';
import * as actions from '../../../store/actions/index';
import CompanyActionItem from '../../../components/Admin/ActionCompany/ActionCompanyItem/actionCompanyItem';

import style from '../../../Styles/style.css';
import classes from './companyAction.css';

class CompanyAction extends Component{

    componentDidMount(){
        this.props.onSetPath(this.props.location.pathname);
      
    }

    render(){
        const listAction = this.props.actionInf.map(ig=>{
            return(
                <CompanyActionItem 
                    key = {ig.IdCompany}
                    id = {ig.IdCompany}
                    name = {ig.companyName}
                    link = {ig.companyLink}
                    newsQuantum = {ig.newsQuantum}
                    productQuantum = {ig.productQuantum}
                />
            );
           
        })
        return(
            <div className = {["container",style.container,classes.companyManagementStyle].join(" ")}>
                <Title title = "Thống Kê Hoạt Động Công Ty" />
                <table className="table table-bordered mt-5 text-center">
                <thead>
                    <tr style= {{backgroundColor: "green", color: "#fff"}}>
                        <th>Công Ty</th>
                        <th>Link</th>
                        <th>Số Lượng Sản Phẩm</th>
                        <th>Số Lượng Tin Tức</th>
                        {/* <th></th> */}
                    </tr>
                </thead>
                <tbody>
                    {listAction}
                </tbody>
            </table>
            </div>
            
        )
    }
}
const mapStateToProps = state =>{
    return{
        path: state.home.path,
        actionInf: state.admin.actionInf
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onSetPath: (path) => dispatch(actions.setPath(path)),
    };  
};

export default connect(mapStateToProps,mapDispatchToProps)(CompanyAction);