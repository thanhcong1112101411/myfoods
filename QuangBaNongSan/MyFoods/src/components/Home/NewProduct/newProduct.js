import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import classes from '../SellingProduct/sellingProduct.css';
import style from '../../../Styles/style.css';
import Product from '../../Product/product';
import Heading from '../Heading/heading';

class SellingProduct extends Component{
    render(){
        const productList = this.props.products.map(ig =>{
            return <div
                        key = {ig.IdProduct}
                        className = {["col-lg-3 col-md-4 col-sm-6",classes.productNewItem].join(" ")}>
                        <Product 
                            pageFrom = {this.props.pageFrom}
                            id = {ig.IdProduct}
                            price = {ig.Price}
                            rrp = {ig.rrp}
                            name = {ig.Name}
                            image = {ig.Images}
                            quantumDiscount = {ig.Quantum}
                        />
                    </div>
        });
        return(
            <div className = {[classes.product, classes.pdTop].join(" ")}>
                <Heading>Sản Phẩm Mới Của Seasonal Foods</Heading>
                <div className={["container",style.container].join(" ")}>
                    <div className="row">
                        {productList}
                    </div>
                </div>
                <div className = {[classes.loadMore, "text-center", "pd-top"].join(" ")}>
                    <Link to = "/seasonalFoods/products">Xem Thêm</Link>
                </div>
            </div>
        );
    }
}

export default SellingProduct;