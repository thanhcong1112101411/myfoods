import React, {Component} from 'react';

import classes from './newsList.css';
import style from '../../../Styles/style.css';

import NewsItemImages from './NewsItemImages/newsItemImages';
class NewsList extends Component{
    render(){
        const newList = this.props.news.map(ig =>{
            return <div
                        key = {ig.IdNew}
                        className = {classes.newsItem}
                    >
                        <h2>{ig.newsTitle}</h2>
                        <p>{ig.newsContent}</p>
                        <NewsItemImages 
                            images = {ig.images}
                            linkImage = {this.props.companyLink+"/"+ig.newsImages+"/"}
                        />
                    </div>
        });
       

        return(
            <div className={["container",style.container,"mt-2"].join(" ")}>
                
                {newList}
                
            </div>
        )
    }
}

export default NewsList;