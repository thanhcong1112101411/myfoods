import React, {Component} from 'react';
import ImageUploader from 'react-images-upload';
import { connect } from 'react-redux';

import classes from './newsManagement.css';
import style from '../../../Styles/style.css';

import Title from '../../../components/CompanyAdmin/Title/title';
import ListNews from '../../../components/CompanyAdmin/News/ListNews/listNews';
import AddNewsModel from '../../../components/CompanyAdmin/News/AddNewsModel/addNewsModel';
import * as actions from '../../../store/actions/index';


class NewsManagement extends Component{
    state= {
        showAddNewsModel: false
    }
    componentDidMount(){
        this.props.onGetProductNews();
    }
    toggleNewsModel = () =>{
        this.setState({showAddNewsModel: !this.state.showAddNewsModel});
    }
    render(){
        return(
            <div className = {["container", style.container,classes.productManagement].join(" ")}>
                <Title 
                    title = "Quản Lý Tin Tức"
                >
                    <button onClick = {this.toggleNewsModel} className={classes.btnAdd}>Thêm</button>
                </Title>
                <ListNews 
                    news = {this.props.news}
                    deleteCompanyNews = {this.props.onDeleteCompanyNews}
                />
                <AddNewsModel
                    show = {this.state.showAddNewsModel}
                    addNewsClick = {this.props.onAddCompanyNews}
                    toggleNewsModel = {this.toggleNewsModel}
                    
                />

            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        news: state.newsCompany.news
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onGetProductNews: ()=> dispatch(actions.getCompanyNews()),
        onAddCompanyNews: (formdata) => dispatch(actions.addCompanyNews(formdata)),
        onDeleteCompanyNews: (idNews) => dispatch(actions.deleteCompanyNews(idNews))
        
    };  
};
export default connect(mapStateToProps,mapDispatchToProps)(NewsManagement);