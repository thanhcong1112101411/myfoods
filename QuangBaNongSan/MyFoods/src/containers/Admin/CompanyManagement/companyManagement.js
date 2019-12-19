import React,{Component} from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Title from '../../../components/CompanyAdmin/Title/title';
import CompanyWating from '../../../components/Admin/CompanyManagement/CompanyWating/companyWating';
import CompanyConfirmed from '../../../components/Admin/CompanyManagement/CompanyConfirmed/companyConfirmed';
import * as actions from '../../../store/actions/index';

import style from '../../../Styles/style.css';
import classes from './companyManagement.css';

class CompanyMangement extends Component{

    componentDidMount(){
        this.props.onSetPath(this.props.location.pathname);
        this.props.onGetCompany();
    }

    render(){
        return(
            <div className = {["container",style.container,classes.companyManagementStyle].join(" ")}>
                <Title title = "Danh Sách Công Ty"/>
                <Tabs id="controlled-tab-example" className= {classes.tabStyle}>
                    <Tab eventKey="home" title="Chưa Xác Nhận">
                        <CompanyWating 
                            companyWating = {this.props.companyWating}
                            confirmCompany = {this.props.onConfirmCompany}
                        />
                    </Tab>
                    <Tab eventKey="profile" title="Đã Xác Nhận" >
                        <CompanyConfirmed 
                            companyConfirmed = {this.props.companyConfirmed}
                        />
                    </Tab>
                </Tabs>
            </div>
            
        )
    }
}
const mapStateToProps = state =>{
    return{
        path: state.home.path,
        companyWating: state.admin.companyWating,
        companyConfirmed: state.admin.companyConfirmed
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onSetPath: (path) => dispatch(actions.setPath(path)),
        onGetCompany: () => dispatch(actions.getCompany()),
        onConfirmCompany: (idCompany) => dispatch(actions.confirmCompany(idCompany))
    };  
};

export default connect(mapStateToProps,mapDispatchToProps)(CompanyMangement);