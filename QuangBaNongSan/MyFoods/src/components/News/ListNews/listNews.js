import React, {Component} from 'react';

import classes from './listNews.css';

import ListNewsItem from './ListNewsItem/listNewsItem';


class ListNews extends Component{
    render(){
        const listNewsItem = this.props.news.map(ig =>{
            return(
                <ListNewsItem
                    key = {ig.IdNew}
                    id = {ig.IdNew}
                    title = {ig.newsTitle}
                    content = {ig.newsContent}
                    quantumClick = {ig.quantumClick}
                    logo = {ig.logo}
                    companyName = {ig.companyName}
                    companyLink = {ig.companyLink}
                    listImages = {ig.images}
                    deleteCompanyNews = {this.props.deleteCompanyNews}
                />
            )
        });
        return(
            <div>
                {listNewsItem}
            </div>
        );
    }
}

export default ListNews;