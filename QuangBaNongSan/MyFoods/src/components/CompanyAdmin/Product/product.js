import React,{Component} from 'react';

class Product extends Component{
    render(){
        return(
            <table className="table table-bordered mt-5 text-center">
                <thead>
                    <tr style = {{backgroundColor: "green", color: "#fff"}}>
                        <th colSpan="2">Sản Phẩm</th>
                        <th>Giá</th>
                        <th>rrp</th>
                        <th>Khuyến Mãi</th>
                        <th>Giá Bán</th>
                        <th>Số Lượng</th>
                        <th>ĐVT</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
        );
    }
}

export default Product;