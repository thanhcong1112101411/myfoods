import React, {Component} from 'react';
import { connect } from 'react-redux';

import {updateObject} from '../../shared/utility';

import classes from './header.css';
import HeaderTop from '../Navigation/HeaderTop/headerTop';
import LogoMenu from '../Navigation/LogoMenu/logoMenu';
import Search from '../Navigation/Search/search';
import LogIn from '../Navigation/LogIn/login';
import SignUp from '../Navigation/SignUp/signup';
import Alert from '../../components/UI/Alert2/alert2';
import * as actions from '../../store/actions/index';

class Header extends Component{
    state = {
        purchaseSearch: false,
        purchaseLogIn: false,
        purchaseSignUp: false,
        searchForm:{
            searchInput: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Nhập Tên Sản Phẩm'
                },
                value: ''
            },
            searchButton:{
                elementType: 'button',
                elementConfig: {
                    type: 'button',
                    placeholder: 'Search'
                },
                value: ''
            }
        },
        showMenuMin : false,
        showSearchBox: false
    }
    componentDidMount(){
        this.props.onPutInputSearchStorage(this.state.searchForm.searchInput.value);
        // this.props.onAuthCheckTimeOut();
        //this.props.onUpdateCart();
    }
    

    searchClickedHandler =() => {
        this.setState({purchaseSearch: !this.state.purchaseSearch});
    }
    userClickedHandler = () =>{
        this.setState({purchaseLogIn: !this.state.purchaseLogIn});
    }
    deleteClickedHandler = () =>{
        this.setState({purchaseLogIn: false, purchaseSignUp: false});
    }
    showButtonHandler = () =>{
        this.setState({purchaseLogIn: !this.state.purchaseLogIn, purchaseSignUp: !this.state.purchaseSignUp});
        
    }
    showMenuMinHandler = () =>{
        this.setState({showMenuMin: !this.state.showMenuMin});
    }

    inputSearchChangeHandler = (event) =>{
        const updateSearchInput = updateObject(this.state.searchForm.searchInput,{
            value : event.target.value
        });

        const updateSearchForm = updateObject(this.state.searchForm,{
            searchInput: updateSearchInput
        });

        this.setState({searchForm: updateSearchForm});
        
        this.props.onPutInputSearchStorage(this.state.searchForm.searchInput.value);

        this.props.onGetInfoSearch();
        this.props.onFetchProducts();
        this.setState({showSearchBox: true});
    }
    buttonSearchClickHandler = () =>{
        this.props.onPutInputSearchStorage(this.state.searchForm.searchInput.value);
        this.props.onFetchProducts();

        this.setState({purchaseSearch: false});
        this.setState({showSearchBox: false});
    }
    selectSearchItem = (searchValue) =>{
        this.props.onPutInputSearchStorage(searchValue);
        this.props.onFetchProducts();

        this.setState({purchaseSearch: false});
        this.setState({showSearchBox: false});
    }
    selectCatagorySearchItem = (catagoryId) =>{
        this.props.onPutInputSearchStorage("");
        this.props.onPutPortfoliosStorage(catagoryId);
        this.props.onFetchProducts();

        this.setState({purchaseSearch: false});
        this.setState({showSearchBox: false});
    }
    selectCompanySearchItem = (companyLink) =>{
        this.props.onPutInputSearchStorage("");
        this.setState({purchaseSearch: false});
        this.setState({showSearchBox: false});
        // this.props.onFetchCompany("/seasonalFoods/company/"+companyLink);
    }



    render(){
        return(
            <header className = {this.props.path !== "/seasonalFoods" ? classes.headerFix: ""} >
                <Search 
                    show = {this.state.purchaseSearch}
                    searchForm = {this.state.searchForm}
                    changed = {this.inputSearchChangeHandler}
                    clicked = {this.buttonSearchClickHandler}
                    companySearch = {this.props.companySearch}
                    catagorySearch = {this.props.catagorySearch}
                    productSearch = {this.props.productSearch}
                    showSearchBox = {this.state.showSearchBox}
                    selectSearch = {this.selectSearchItem}
                    selectCatagory = {this.selectCatagorySearchItem}
                    selectCompany = {this.selectCompanySearchItem}
                />
                <HeaderTop
                    isAuthentiacted = {this.props.username}
                    quantityProducts = {this.props.quantityProducts}
                    searchClicked = {this.searchClickedHandler} 
                    userClicked = {this.userClickedHandler}
                    logoutClicked = {this.props.onAuthLogout}
                    showAlertCart = {this.props.alertCart}
                    putAlertCartHide = {this.props.onPutAlertCartHide}
                    showAlertLogin = {this.props.alertLogin}
                    putAlertLoginHide = {this.props.onPutAlertLoginHide}
                />
                <LogoMenu 
                    showMenuMin = {this.state.showMenuMin}
                    showMenuMinHandler = {this.showMenuMinHandler}
                />
                <LogIn
                    show= {this.state.purchaseLogIn} 
                    loginDeleteClicked = {this.deleteClickedHandler}
                    loginShowButton = {this.showButtonHandler}
                    authclicked = {this.props.onAuthLogin}
                    error = {this.props.error}
                />
                <SignUp 
                    show={this.state.purchaseSignUp} 
                    signupDeleteClicked = {this.deleteClickedHandler}
                    signupShowButton = {this.showButtonHandler}
                />
                {/* <Alert /> */}
            </header>
        );
    }
}
const mapStateToProps = state =>{
    return{
        id: state.auth.id,
        username: state.auth.username,
        error: state.auth.error,
        path: state.home.path,
        quantityProducts: state.cart.quantityProducts,
        alertCart: state.alert.alertCart,
        alertLogin: state.alert.alertLogin,
        companySearch: state.search.companySearch,
        catagorySearch: state.search.catagorySearch,
        productSearch: state.search.productSearch
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onPutInputSearchStorage : (searchValue) => dispatch(actions.putInputSearchStorage(searchValue)),
        onFetchProducts : () => dispatch(actions.fetchProducts()),
        onAuthLogin: (username, password) => dispatch(actions.authLogin(username, password)),
        onAuthLogout: () => dispatch(actions.authLogout()),
        onAuthCheckTimeOut: () =>dispatch(actions.authCheckTimeOut()),
        onPutAlertCartHide: () => dispatch(actions.putAlertCartHide()),
        onUpdateCart: ()=> dispatch(actions.updateCart()),
        onPutAlertLoginHide: () =>dispatch(actions.putAlertLoginHide()),
        onGetInfoSearch: () => dispatch(actions.getInfoSearch()),
        onPutPortfoliosStorage: (portfolios) => dispatch(actions.putPortfoliosStorage(portfolios)),
        onFetchCompany : (companyLink) => dispatch(actions.fetchCompany(companyLink))
    };  
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);