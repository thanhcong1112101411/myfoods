import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import classes from './navigationItem.css';

class NavigationItem extends Component{
    render(){
        return(
            <li className={classes.NavigationItem}
            onClick = {this.props.showMenuMinHandler}
            >
                <NavLink
                    className = {this.props.type === "contact"? classes.Contact: ""}
                    to={this.props.link}
                    exact={this.props.exact}
                    activeClassName={classes.active}>{this.props.children}
                </NavLink>
            </li>
        );
    }
}

export default NavigationItem;