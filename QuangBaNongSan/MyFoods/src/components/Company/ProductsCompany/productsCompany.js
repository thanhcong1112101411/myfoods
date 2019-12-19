import React,{Component} from 'react';

import classes from './productsCompany.css';
import style from '../../../Styles/style.css';

import Heading from '../../Home/Heading/heading';
import Product from '../../Product/product';

class ProductsCompany extends Component{
    render(){
        const productList = this.props.ProductCompany.map(ig =>{
            return <div
                        key = {ig.productId}
                        className = {["col-lg-3 col-md-4 col-sm-6",classes.productNewItem].join(" ")}>
                        <Product 
                            pageFrom = {this.props.pageFrom}
                            id = {ig.productId}
                            price = {ig.Price}
                            rrp = {ig.rrp}
                            name = {ig.Name}
                            image = {ig.Images}
                            quantumDiscount = {ig.Quantum}
                        />
                    </div>
        });
        return(
            <div className = {["container", style.container, "mt-5"].join(" ")}>
                <Heading>Danh Sách Sản Phẩm</Heading>
                <div className="row">
                    {productList}
                </div>
            </div>
        );
    }
}
export default ProductsCompany;