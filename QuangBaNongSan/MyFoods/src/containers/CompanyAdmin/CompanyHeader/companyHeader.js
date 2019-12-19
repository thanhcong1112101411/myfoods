import React, {Component} from 'react';
import { connect } from 'react-redux';

import classes from './companyHeader.css';

import {baseUrl} from '../../../shared/utility';
import { faBars, faHome, faUserTie, faCogs, faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import * as actions from '../../../store/actions/index';

class CompanyHeader extends Component{
    state = {
        showListFunction : false
    }
    componentDidMount(){
        this.props.onAuthCheckTimeOutCompany();
    }
    showListFunctionClick = ()=>{
        this.setState({showListFunction: !this.state.showListFunction})
    }
    onAuthLogoutCompanyHandler(){
        this.props.onAuthLogoutCompany();
        this.props.history.replace("/companyadmin/login");
      
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
                            <NavLink to="/companyadmin/productmanagement"
                                activeClassName = {classes.active}
                                onClick = {this.showListFunctionClick}
                            >
                                <span><FontAwesomeIcon icon={faCartPlus}/></span>Quản Lý Sản Phẩm
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/companyadmin/newsmanagement"
                                 activeClassName = {classes.active}
                                 onClick = {this.showListFunctionClick}
                            >
                                <span><FontAwesomeIcon icon={faCartPlus}/></span>Quản Lý Tin Tức
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="/">
                                <span><FontAwesomeIcon icon={faCartPlus}/></span>Quản Lý Khuyến Mãi
                            </NavLink>
                        </li> */}
                        <li>
                            <button onClick = {this.props.onAuthLogoutCompany}>Đăng Xuất</button>
                        </li>
                    </ul>
                </div>
            );
        }

        return(
            <header className = {[classes.companyHeader,this.props.path == "/companyadmin/login" ? classes.visible : ""].join(" ")}>
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
                                <button className={classes.admin}>
                                        <FontAwesomeIcon icon={faUserTie} />
                                        
                                </button>
                                <p style = {{color: "#fff", display: "inline"}}>{this.props.usernameCompany}</p>
                                
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
        usernameCompany: state.authCompany.usernameCompany
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onAuthCheckTimeOutCompany: () =>dispatch(actions.authCheckTimeOutCompany()),
        onAuthLogoutCompany: () => dispatch(actions.authLogoutCompany())
    };  
};


export default connect(mapStateToProps,mapDispatchToProps)(CompanyHeader);