import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Banner from '../../components/UI/Banner/banner';
import ListCart from '../../components/Cart/ListCart/listCart';
import Payment from '../../components/Cart/Payment/payment';
import Aux from '../../hoc/Auxx/auxx';

class Cart extends Component{
    render(){
        return(
            <Aux>
                <Banner 
                    pageFrom = "Cart" 
                    heading = "Giỏ Hàng"
                />
                <ListCart 
                    cartProducts = {this.props.cart}
                    changeQuantityProductClicked = {this.props.onChangeQuantityProduct}
                    deleteClicked = {this.props.onDeleteCartItem}
                    
                />
                <Payment 
                    totalMoney = {this.props.totalMoney}
                    putAlertCartShow = {this.props.onPutAlertLoginShow}
                    id = {this.props.id}
                />
            </Aux>
        );
    }
}

const mapStateToProps = state =>{
    return{
        id: state.auth.id,
        cart: state.cart.cart,
        totalMoney : state.cart.totalMoney
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onDeleteCartItem: (id)=>dispatch(actions.deleteCartItem(id)),
        onChangeQuantityProduct: (id,quantity) =>dispatch(actions.changeQuantityProduct(id,quantity)),
        onPutAlertLoginShow: () =>dispatch(actions.putAlertLoginShow())
    };  
};

export default connect(mapStateToProps,mapDispatchToProps)(Cart);

