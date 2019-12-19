import React,{Component} from 'react';
import { connect } from 'react-redux';

import classes from './news.css';

import * as actions from '../../store/actions/index';

import ListNews from '../../components/News/ListNews/listNews';
import Banner from '../../components/UI/Banner/banner';


class News extends Component{

    componentDidMount(){
        this.props.onSetPath(this.props.location.pathname);
        this.props.onFetchNews();
    }
    render(){
        return(
            <div className = {classes.newsStyle}>
                
                <ListNews
                    news = {this.props.news}
                />
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        news: state.news.news
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onSetPath: (path) => dispatch(actions.setPath(path)),
        onFetchNews: () => dispatch(actions.fetchNews())
    };  
};

export default connect(mapStateToProps,mapDispatchToProps)(News);