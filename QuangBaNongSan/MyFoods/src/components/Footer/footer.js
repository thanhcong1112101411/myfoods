import React, {Component} from 'react';
import {Link } from 'react-router-dom';

import classes from './footer.css';
import style from '../../Styles/style.css';

class Footer extends Component{
    render(){
        return(
            <div className = {["Container",style.container,classes.footer].join(" ")}>
                <div className = "row">
                    <div className = "col-md-6">
                        <h1>Seasonal Foods</h1>
                        <p>Kênh Bán Hàng Nông Sản Trực Tuyến</p>
                    </div>
                    <div className = "col-md-6">
                        <h1>Kết Nối</h1>
                        <ul>
                            <li>
                                <Link to="/seasonalFoods/signin">Đăng Ký Đối Tác</Link>
                            </li>
                            <li>
                                <Link to="/companyadmin/login">Đăng Nhập</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;