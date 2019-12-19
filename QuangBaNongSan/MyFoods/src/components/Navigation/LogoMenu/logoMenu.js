import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList } from '@fortawesome/free-solid-svg-icons';
import classes from './logoMenu.css';
import style from '../../../Styles/style.css';
import NavigationItems from '../NavigationItems/navigationItems';
import Logo from '../../../components/Logo/logo';

class LogoMenu extends Component{
    render(){
        return(
            <nav className = {["container",style.container,classes.LogoMenu].join(" ")}>
                <Logo />
                <div className = {classes.Menu}>
                    <NavigationItems />
                </div>
                {this.props.showMenuMin
                    ?   <div className = {classes.MenuMin}>
                            <NavigationItems showMenuMinHandler = {this.props.showMenuMinHandler} />
                        </div>
                    : null
                }
                
                <span onClick = {this.props.showMenuMinHandler} className = {classes.ListIcon}>
                    <FontAwesomeIcon icon = {faThList} />
                </span>
            </nav>
        );
    }
}
export default LogoMenu;