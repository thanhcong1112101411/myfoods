import React, {Component} from 'react';

import classes from './sellingProduct.css';
import style from '../../../Styles/style.css';
import Product from '../../Product/product';
import Heading from '../Heading/heading';

class SellingProduct extends Component{
    render(){
        const productList = this.props.products.map(ig =>{
            return <div
                        key = {ig.id}
                        className = {["col-md-4 col-sm-8 col-10 offset-1 offset-sm-2 offset-md-0",classes.productItem].join(" ")}>
                        <Product 
                            pageFrom = {this.props.pageFrom}
                            id = {ig.id}
                            price = {ig.price}
                            rrp = {ig.rrp}
                            name = {ig.name}
                            image = {ig.image}
                        />
                    </div>
        });

        return(
            <div className = {[classes.product, classes.pdTop].join(" ")}>
                <Heading>Sản Phẩm Bán Chạy Của Seasonal Foods</Heading>
                <div className={["container",style.container].join(" ")}>
                    <div className="row">
                        {productList}
                    </div>
                </div>
            </div>
        );
    }
}

export default SellingProduct;