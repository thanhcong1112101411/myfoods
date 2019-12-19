import React,{Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

import classes from './accountInfo.css';
import Button from '../../../components/UI/Button/button';
import Input from './Input/input';

class AccountInfo extends Component{
    state = {
        accountInfo:{
			name: {
                elementType: 'name',
                elementConfig: {
                    placeholder: 'Họ Tên'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5
                },
                valid: false,
                touched: false
            },
            phoneNumber: {
                elementType: 'phone',
                elementConfig: {
                    placeholder: 'Số Điện Thoại'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'email',
                elementConfig: {
                    placeholder: 'email'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10
                },
                valid: false,
                touched: false
            }
        },
        accountAddress:{
            country: {
                elementType: 'select',
                elementConfig: {
                    options: []
                },
                value: '',
                validation: {},
                valid: true
            },
            district: {
                elementType: 'select',
                elementConfig: {
                    options: []
                },
                value: '',
                validation: {},
                valid: true
            },
            ward: {
                elementType: 'select',
                elementConfig: {
                    options: []
                },
                value: '',
                validation: {},
                valid: true
            },
            address: {
                elementType: 'textarea',
                elementConfig: {
                    options: []
                },
                value: '',
                validation: {},
                valid: true
            }
        }
        
    }
    componentDidMount(){
        this.props.onFetchCumstomerInfo();
    }

    
    render(){
        const accountInfoElementsArray = [];
        for (let key in this.state.accountInfo) {
            accountInfoElementsArray.push({
                id: key,
                config: this.state.accountInfo[key]
            });
        }
        let form = (
            <div className = {classes.contentInfo}>
                {accountInfoElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={this.props.accountInfo}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                    />
                ))}
            </div>
        );

        return(
            <div className = {classes.account}>
                <div>
                    <div className = {classes.Heading}>
                        <h2>Thông Tin Tài Khoản</h2>
                    </div>
                    {form}
                    <div className = {classes.footer}>
                        <Button type = "update">Cập Nhật</Button>
                    </div>
                </div>
                <div>
                    <div className = {classes.Heading}>
                        <h2>Địa Chỉ</h2>
                    </div>
                    <div className = {classes.contentInfo}>
                        <div>
                            <span>Tỉnh/ Thành Phố: </span>
                            <select className = "form-control">
                                <option>Hồ Chí Minh</option>
                            </select>
                        </div>
                        <div>
                            <span>Quận/Huyện: </span>
                            <select className = "form-control">
                                <option>Hồ Chí Minh</option>
                            </select>
                        </div>
                        <div>
                            <span>Phường/Xã: </span>
                            <select className = "form-control">
                                <option>Hồ Chí Minh</option>
                            </select>
                        </div>
                        <div>
                            <span>Địa Chỉ: </span>
                            <textarea className = "form-control" ></textarea>
                        </div>
                    </div>
                    <div className = {classes.footer}>
                        <Button type = "update">Cập Nhật</Button>
                    </div>
                </div>
                <div>
                    <div className = {classes.Heading}>
                        <h2>Thay Đổi Mật Khẩu</h2>
                    </div>
                    <div className = {classes.contentInfo}>
                        <div>
                            <span>Mật Khẩu Cũ: </span>
                            <input className="form-control" type="text" />
                        </div>
                        <div>
                            <span>Mật Khẩu Mới: </span>
                            <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className = {classes.footer}>
                        <Button type = "update">Cập Nhật</Button>
                    </div>
                </div>
                
            </div>

        );
    }
}
const mapStateToProps = state =>{
    return{
        accountInfo: state.auth.customerInfo
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onFetchCumstomerInfo: () => dispatch(actions.fetchCustomerInfo())
    };  
};

export default connect(mapStateToProps,mapDispatchToProps)(AccountInfo);