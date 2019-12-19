import React,{Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import classes from './newsDetail.css';
import style from '../../Styles/style.css';
import Banner from '../../components/UI/Banner/banner';
import {ImageNewsCompanyLink} from '../../shared/utility';
import ProductFromDetail from '../../components/ProductDetail/Main/ProductFromDetail/productFromDetail';

class NewsDetail extends Component{

    componentDidMount(){
        this.props.onSetPath(this.props.location.pathname);
        this.props.onFetchNewsDetail("/"+this.props.location.pathname.split("/").splice(2,2).join("/"));
    }
    render(){
        const image = this.props.newsDetail.images;
        let listImage = "";
        if(image){
            listImage = this.props.newsDetail.images.map((ig,index)=>{
                return(
                    <div className = "col-md-4"
                        key = {index}
                    >
                        <img width="100%" src={ImageNewsCompanyLink + ig} />
                    </div>
                    
                );
            })
        }
        return(
            <div className = {["Container",style.container,classes.newsDetailStyle].join(" ")}>
                <h2>{this.props.newsDetail.newsTitle}</h2>
                <p>{this.props.newsDetail.newsContent}</p>
                
                <div className = "row">
                    {listImage}
                </div>
                <ProductFromDetail
                    productDetail = {this.props.newsDetail}
                />
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        newsDetail: state.news.newsDetail
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onSetPath: (path) => dispatch(actions.setPath(path)),
        onFetchNewsDetail: (linkNews) => dispatch(actions.fetchNewsDetail(linkNews))
    };  
};

export default connect(mapStateToProps,mapDispatchToProps)(NewsDetail);