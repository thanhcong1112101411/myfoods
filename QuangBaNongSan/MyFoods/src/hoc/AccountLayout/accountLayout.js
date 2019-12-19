import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import classes from './accountLayout.css';
import styles from '../../Styles/style.css';

import Banner from '../../components/Products/Banner/banner';

class AccountLayout extends Component{
    render(){
        return(
            <div>
                <Banner />
                <div className = {classes.main}>
                    <div className = {["container",styles.container,styles.pdTop].join(" ")}>
                        <div className = "row">
                            <div className = "col-md-4">
                                <div className = {classes.menu}>
                                    <ul>
                                        <li>
                                            <NavLink to = "/account/information">Thông Tin Tài Khoản</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to = "/account/bills">Danh Sách Đơn Hàng</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to = "/">Sản Phẩm Xem Sau</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to = "/">Sản Phẩm Yêu Thích</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className = "col-md-8">
                                {this.props.children}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
        
    }
}


export default AccountLayout;