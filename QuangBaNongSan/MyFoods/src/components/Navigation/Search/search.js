import React,{Component} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import InputSearch from '../../UI/InputSearch/inputSearch';
import ProductSearch from './ProductSearch/productSearch';
import CatagorySearch from './CatagorySearch/catagorySearch';
import CompanySearch from './CompanySearch/companySearch';

import classes from './search.css';
import style from '../../../Styles/style.css';

class Search extends Component{
    render(){
        const formSearchArray = [];
        for(let key in this.props.searchForm){
            formSearchArray.push({
                id: key,
                config: this.props.searchForm[key]
            });
        }
        let form = (
            <div className = {classes.searchStyle}>
                {formSearchArray.map(formElement =>(
                    <InputSearch 
                        key = {formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value = {formElement.config.value}
                        clicked = {this.props.clicked}
                        changed = {this.props.changed}
                    />
                ))}
            </div>
        );
        return(
            <div 
                className = {[classes.search, "container",style.container].join(" ")}
                style = {{
                    display: this.props.show ? 'block' : 'none'
                }}
            >
                {form}
                <div className = {classes.searchBox}
                    style = {{
                        display: this.props.showSearchBox ? 'block' : 'none'
                    }}
                >
                    <Tabs id="controlled-tab-example" className= {classes.tabStyle}>
                        <Tab eventKey="product" title="Sản Phẩm">
                            <ProductSearch 
                                listProduct = {this.props.productSearch}
                                selectSearch = {this.props.selectSearch}
                            />
                        </Tab>
                        {/* <Tab eventKey="catagory" title="Danh Mục" >
                            <CatagorySearch
                                listCatagory = {this.props.catagorySearch}
                                selectCatagory = {this.props.selectCatagory}
                            />
                        </Tab> */}
                        <Tab eventKey="company" title="Công Ty" >
                            <CompanySearch
                                listCompany = {this.props.companySearch}
                                selectCompany = {this.props.selectCompany}
                            />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}
export default Search;