import React, {Component} from 'react';
import { connect } from 'react-redux';

import classes from './adminHeader.css';

import {baseUrl} from '../../../shared/utility';
import { faBars, faHome, faUserTie, faCogs, faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import * as actions from '../../../store/actions/index';

class AdminHeader extends Component{
    state = {
        showListFunction : false
    }
    showListFunctionClick = ()=>{
        this.setState({showListFunction: !this.state.showListFunction})
    }
    componentDidMount(){
        this.props.onGetActionCompanyInf();
        this.props.onAuthCheckTimeOutAdmin();
    }
    onAuthLogoutAdminHandler(){
        this.props.onAuthLogoutAdmin();
        this.props.history.replace("/Admin/login");
    }
    render(){
        let listfunction = null;
        if(this.state.showListFunction){
            listfunction = (
                <div className= {classes.listfunction}>
                    <ul>
                        <li>
                            <ul className={classes.subList}>
                                <li><FontAwesomeIcon icon ={faUserTie} /></li>
                                <li>Admin<br/>Quản Trị Viên</li>
                                <li><a href="#"><FontAwesomeIcon icon = {faCogs} /></a></li>
                            </ul>
                        </li>
                        <li className = {classes.gray}>Chức Năng Quản Trị</li>
                        <li>
                            <NavLink to="/Admin/companymanagement"
                                activeClassName = {classes.active}
                                onClick = {this.showListFunctionClick}
                            >
                                <span><FontAwesomeIcon icon={faCartPlus}/></span>Quản Lý Công Ty
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Admin/companyaction"
                                activeClassName = {classes.active}
                                onClick = {this.showListFunctionClick}
                            >
                                <span><FontAwesomeIcon icon={faCartPlus}/></span>Tình Trạng Hoạt Động
                            </NavLink>
                        </li>
                        <li>
                                <button onClick = {this.props.onAuthLogoutAdmin}>Đăng Xuất</button>
                            </li>
                    </ul>
                </div>
            );
        }

        return(
            <header className = {[classes.adminHeader,this.props.path == "/Admin/Login" ? classes.visible : ""].join(" ")}>
                <nav className={classes.companyNav}>
                    <div className={classes.logo}>
                        <Link to="/companyadmin">
                            <img width="100px" src={baseUrl+"public/images/logo/logo-web.png"}/>
                        </Link>
                        <button onClick={this.showListFunctionClick}><FontAwesomeIcon icon={faBars} /></button>
                    </div>
                    <div className= {classes.menu}>
                        <ul>
                            <li>
                                <Link to="/seasonalFoods">
                                    <span className={classes.home}><FontAwesomeIcon icon={faHome} /></span>Trang Chủ
                                </Link>
                            </li>
                            <li>
                                <button className={classes.admin}><FontAwesomeIcon icon={faUserTie} />
                                </button>
                                <p style = {{color: "#fff", display: "inline"}}>{this.props.nameAdmin}</p>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
                {listfunction}
                
            </header>
        );
    }
}

const mapStateToProps = state =>{
    return{
        path: state.home.path,
        nameAdmin: state.admin.nameAdmin
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onAuthCheckTimeOutAdmin: () =>dispatch(actions.authCheckTimeOutAdmin()),
        onGetActionCompanyInf: () => dispatch(actions.getActionCompany()),
        onAuthLogoutAdmin: () => dispatch(actions.authLogoutAdmin())
    };  
};


export default connect(mapStateToProps,mapDispatchToProps)(AdminHeader);