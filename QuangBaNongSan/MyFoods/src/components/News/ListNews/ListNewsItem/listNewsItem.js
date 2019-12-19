import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import classes from './listNewsItem.css';

import {logoImageLink} from '../../../../shared/utility';
import {ImageNewsCompanyLink} from '../../../../shared/utility';

class ListNewsItem extends Component{

    render(){
        const listImage = this.props.listImages.map((ig,index)=>{
            return(
                <img
                    style={{border: "1px solid #eee",boxShadow: "2px 2px 5px #eee"}}
                    key = {index}
                    width="100px" 
                    src={ImageNewsCompanyLink + ig} 
                />
            );
        })
        return(
            
            <div className = {classes.listNewsItem}>
                    <div className = {classes.companyInfStyle}>
                        <Link to={"/seasonalFoods/company/"+this.props.companyLink}>
                            <div>
                                <img width="100px" src={logoImageLink + this.props.logo} />
                            </div>
                        </Link>
                        <p>{this.props.companyName}</p>
                    </div>
                    <Link to={"/seasonalFoods/newsDetail/"+this.props.id}>
                        <div className = {classes.newsContent}>
                            <h3>{this.props.title}</h3>
                            {/* <p>{this.props.content}</p> */}
                            {listImage}
                        </div>
                    </Link>
            </div>
        );
    }
}

export default ListNewsItem;