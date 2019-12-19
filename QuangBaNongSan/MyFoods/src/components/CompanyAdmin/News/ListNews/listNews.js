import React, {Component} from 'react'

import classes from './listNews.css';

import ListNewsItem from '../ListNewsItem/listNewsItem';

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
                    listImages = {ig.images}
                    deleteCompanyNews = {this.props.deleteCompanyNews}
                />
            )
        });
        return(
            <table className="table table-bordered mt-5 text-center">
                <thead>
                    <tr style = {{backgroundColor: "green", color: "#fff"}}>
                        <th>Tiêu Đề</th>
                        <th>Nội Dung</th>
                        <th>Ảnh</th>
                        <th>Số Lượng Click</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {listNewsItem}
                </tbody>
            </table>
        );
    }
}

export default ListNews;