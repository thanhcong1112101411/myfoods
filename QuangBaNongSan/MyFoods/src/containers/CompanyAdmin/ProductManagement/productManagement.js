import React, {Component} from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


import classes from './productManagement.css';
import style from '../../../Styles/style.css';

import Title from '../../../components/CompanyAdmin/Title/title';
import SellingProduct from '../../../components/CompanyAdmin/Product/SellingProduct/sellingProduct';
import HiddenProduct from '../../../components/CompanyAdmin/Product/HiddenProduct/hiddenProduct';
import AddModel from '../../../components/CompanyAdmin/AddModel/addModel';
import UpdateModel from '../../../components/CompanyAdmin/UpdateModel/updateModel';
import * as actions from '../../../store/actions/index';

class ProductManagement extends Component{
    state = {
        showAddModel: false,
        showUpdateModel: false
    }
    componentDidMount(){
        this.props.onSetPath(this.props.location.pathname);
        this.props.onFetchProductSellingCompany(this.props.idCompany);
        this.props.onGetPublicInfoProduct();
        // this.props.onFetchProductHiddenCompany(this.props.idCompany);
        
    }

    onProductAddIconClick = () =>{
        this.setState({showAddModel: !this.state.showAddModel});
    }
    onProductUpdateIconClick = () =>{
        this.setState({showUpdateModel: !this.state.showUpdateModel});
    }



    render(){
        return(
            <div className = {["container", style.container,classes.productManagement].join(" ")}>
                <Title 
                    title = "Quản Lý Sản Phẩm"
                >
                    <button onClick = {this.onProductAddIconClick} className={classes.btnAdd}>Thêm</button>
                </Title>
                <Tabs id="controlled-tab-example" className= {classes.tabStyle}>
                    <Tab eventKey="home" title="Đang Bán">
                        <SellingProduct 
                            sellingProducts = {this.props.sellingProducts}
                            onDeleteProductClick = {this.props.onDeleteProductClick}

                            productUpdateIconClick = {this.props.onGetUpdateProductInf}
                            productUpdateIconClickShow = {this.onProductUpdateIconClick}
                        />
                    </Tab>
                    <Tab eventKey="profile" title="Không Hiển Thị" >
                        <HiddenProduct
                            hiddenProducts = {this.props.hiddenProducts}
                            onDeleteProductClick = {this.props.onDeleteProductClick}

                            productUpdateIconClick = {this.props.onGetUpdateProductInf}
                            productUpdateIconClickShow = {this.onProductUpdateIconClick}
                        />
                    </Tab>
                </Tabs>
                <AddModel 
                    show = {this.state.showAddModel}
                    productAddIconClick = {this.onProductAddIconClick}
                    brand = {this.props.brand}
                    unit = {this.props.unit}
                    catagory = {this.props.catagory}

                    addProductClick = {this.props.onAddProduct}
                />
                <UpdateModel 
                    show = {this.state.showUpdateModel}
                    productUpdateIconClick = {this.onProductUpdateIconClick}
                    brand = {this.props.brand}
                    unit = {this.props.unit}
                    catagory = {this.props.catagory}
                    updateProductInf = {this.props.updateProductInf}

                    productUpdateIconClick = {this.onProductUpdateIconClick}
                    updateProductClick = {this.props.onUpdateProduct}
                />
                
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return{
       idCompany: state.authCompany.idCompany,
       hiddenProducts: state.productCompany.hiddenProducts,
       sellingProducts: state.productCompany.sellingProducts,
       catagory: state.productCompany.catagory,
       unit: state.productCompany.unit,
       brand: state.productCompany.brand,
       updateProductInf: state.productCompany.updateProductInf
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onSetPath: (path) => dispatch(actions.setPath(path)),
        onFetchProductSellingCompany: (idCompany) => dispatch(actions.fetchProductSellingCompany(idCompany)),
        onGetPublicInfoProduct: ()=>dispatch(actions.getPublicInfoProducts()),
        onAddProduct: (formdata) => dispatch(actions.addProduct(formdata)),
        // onFetchProductHiddenCompany: (idCompany) => dispatch(actions.fetchProductHiddenCompany(idCompany))
        onDeleteProductClick: (id) => dispatch(actions.deleteProduct(id)),
        // lấy thông tin sản phẩm cần update
        onGetUpdateProductInf: (id) => dispatch(actions.getUpdateProductInf(id)),
        onUpdateProduct: (formdata, idProduct) => dispatch(actions.updateProduct(formdata,idProduct))
    };  
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductManagement);