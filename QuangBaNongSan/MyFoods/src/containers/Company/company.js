import React, {Component} from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

import classes from './company.css';
import style from '../../Styles/style.css';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import BannerCompany from '../../components/Company/BannerCompany/bannerCompany';
import NewProductCompany from '../../components/Company/NewProductCompany/newProductCompany';
import ProductCompany from '../../components/Company/ProductsCompany/productsCompany';
import NewsList from '../../components/Company/NewsList/newsList';
class Company extends Component{
    componentDidMount(){
        this.props.onFetchCompany("/"+this.props.location.pathname.split("/").splice(2,2).join("/"));
    }
    render(){
        return(
            <div>
                <BannerCompany
                    companyInf = {this.props.companyInf}
                />
                <div>
                    <Tabs className={classes.tabStyle} defaultActiveKey="profile" id="uncontrolled-tab-example">
                        {/* <Tab eventKey="home" title="Trang Chủ">
                            <p>aaaaaaaaaaaaaaaaaa</p>
                        </Tab> */}
                        <Tab eventKey="profile" title="Trang Chủ">
                            <NewProductCompany 
                                newProductCompany = {this.props.newProductCompany}
                            />
                            <ProductCompany
                                ProductCompany = {this.props.ProductCompany}
                            />

                        </Tab>
                        <Tab eventKey="contact" title="Tin Tức">
                            <NewsList 
                                news = {this.props.newsList}
                                companyLink = {this.props.companyInf.companyLink}
                            />
                        </Tab>
                    </Tabs>
                </div>
            </div>
           
        );
    }
}
const mapStateToProps = state =>{
    return{
        companyInf: state.company.companyInf,
        newProductCompany: state.company.newProductCompany,
        ProductCompany: state.company.productCompany,
        newsList: state.company.newsList
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        onFetchCompany : (companyLink) => dispatch(actions.fetchCompany(companyLink)),
    };  
};
export default connect(mapStateToProps,mapDispatchToProps)(Company);