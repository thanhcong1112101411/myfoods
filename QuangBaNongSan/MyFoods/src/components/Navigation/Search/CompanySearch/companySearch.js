import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import classes from './companySearch.css';
import CompanySearchItem from './CompanySearchItem/companySearchItem';

class CompanySearch extends Component{
    render(){
        const ListCompanySearch = this.props.listCompany.map(ig=>{
            return(
                <CompanySearchItem
                    key = {ig.Id}
                    companyName = {ig.companyName}
                    companyLink = {ig.companyLink}
                    selectCompany = {this.props.selectCompany}
                />
            )
        })
        return(
            <div className = {classes.itemSearch}>
                {ListCompanySearch}
            </div>
        );
    }
}
export default CompanySearch;