import React from 'react';

import classes from './navigationItems.css';
import NavigationItem from './NavigationItem/navigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem showMenuMinHandler = {props.showMenuMinHandler} link="/seasonalFoods/products" >Sản Phẩm</NavigationItem>
        <NavigationItem showMenuMinHandler = {props.showMenuMinHandler} link="/" >Giới Thiệu</NavigationItem>
        <NavigationItem showMenuMinHandler = {props.showMenuMinHandler} link="/seasonalFoods/news" >Tin Tức</NavigationItem>
        <NavigationItem showMenuMinHandler = {props.showMenuMinHandler} link="/" >Hướng Dẫn Mua Hàng</NavigationItem>
        <NavigationItem showMenuMinHandler = {props.showMenuMinHandler} type="contact" link="/seasonalFoods/contact" >Liên Hệ</NavigationItem>

    </ul>
);

export default navigationItems;