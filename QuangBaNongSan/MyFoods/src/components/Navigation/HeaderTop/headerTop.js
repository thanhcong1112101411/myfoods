import React from 'react';
import {Link} from 'react-router-dom';

import classes from './headerTop.css';
import style from '../../../Styles/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import Alert from '../../../components/UI/Alert1/alert1';

const headerTop = (props) =>(
    <div className = {["container",style.container,classes.headerTop].join(" ")}>
        <ul>
            <li>
                <button id="search" onClick = {props.searchClicked}><FontAwesomeIcon icon={faSearch}/></button>
            </li>
            <li><Link onClick = {props.putAlertCartHide} to="/cart"><FontAwesomeIcon icon={faShoppingCart}/>
                <span><sub  className = {classes.numbercart}>{props.quantityProducts}</sub></span>
                </Link>
                {props.showAlertCart === true
                    ? <Alert 
                        putAlert = {props.putAlertCartHide}
                        title = "Thêm vào giỏ hàng thành công!"/>
                    : null
                }
                
            </li>
            {!props.isAuthentiacted
                ?   <li><button id="user" onClick = {props.userClicked}><FontAwesomeIcon icon={faUserCircle} />
                        <span id="username">Login</span>
                        </button>
                        {props.showAlertLogin === true
                            ? <Alert 
                                putAlert = {props.putAlertLoginHide}
                                title="Đăng Nhập Ngay Để Đặt Hàng" />
                            : null
                        }
                        
                    </li>
                :   <li className = {classes.user}><button id="user"><FontAwesomeIcon icon={faUserCircle} />
                        <span id="username">{props.isAuthentiacted}</span>
                    </button>
                        <div className = {classes.subMenu}>
                            <div className = {classes.white}></div>
                            <ul>
                                <li><Link to = "/account/information">Thông Tin Tài Khoản</Link></li>
                                <li><Link to = "/">Sản Phẩm Xem Sau</Link></li>
                                <li><Link to = "/">Sản Phẩm Yêu Thích</Link></li>
                                <li><button onClick = {props.logoutClicked}>Đăng Xuất</button></li>
                                
                            </ul>
                        </div>
                    </li>
            }
            
        </ul>
    </div>
);

export default headerTop;