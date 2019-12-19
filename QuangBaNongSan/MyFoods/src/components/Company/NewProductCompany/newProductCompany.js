import React,{Component} from 'react';

import classes from './newProductCompany.css';
import style from '../../../Styles/style.css';

import Heading from '../../Home/Heading/heading';
import Carousel from 'react-bootstrap/Carousel';
import Product from '../../Product/product';

class NewProductCompany extends Component{
    render(){
        const productList = this.props.newProductCompany.map((ig,index) =>{
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
            <Heading>Sản Phẩm Mới</Heading>
            <Carousel>
                <Carousel.Item>
                    <div className="row">
                        {productList}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        {productList}
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
        );
    }
}
export default NewProductCompany;