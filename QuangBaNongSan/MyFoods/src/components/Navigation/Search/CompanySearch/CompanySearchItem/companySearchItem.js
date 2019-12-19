import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import classes from './companySearchItem.css';

class CompanySearchItem extends Component{
    selectCompanySearchItemClick = () =>{
        this.props.selectCompany(this.props.companyLink);
    }
    render(){
        return(
            <Link
                className = {classes.searchItemStyle}
                to = {"/seasonalFoods/company/"+this.props.companyLink}
                onClick = {this.selectCompanySearchItemClick}
            >
                {this.props.companyName}
            </Link>
        );
    }
}
export default CompanySearchItem;