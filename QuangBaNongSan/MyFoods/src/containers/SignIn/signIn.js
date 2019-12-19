import React, {Component} from 'react';
import { connect } from 'react-redux';

import {updateObject,checkValidity,baseUrl} from '../../shared/utility';

import classes from './signIn.css';
import style from '../../Styles/style.css';

import * as actions from '../../store/actions/index';
import SignInput from '../../components/Navigation/SignInput/signInput';

class SignIn extends Component{
    state = {
		controls:{
            companyName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Tên Công ty',
                    icon : 'user',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5
                },
                valid: false,
                touched: false
            },
            link: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Link',
                    icon : 'user',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email',
                    icon : 'email',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Số Điện Thoại',
                    icon : 'phone',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
			username: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'username',
                    icon : 'user',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password',
                    icon : 'password',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 3
                },
                valid: false,
                touched: false
            }
		},
		formIsValid: false,
		isSignup: true
    }
    componentDidMount(){
        this.props.onSetPath(this.props.location.pathname);
    }
    inputChangedHandler = (event, controlName) => {
        event.preventDefault();
    	const updatedElement = updateObject(this.state.controls[controlName],{
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
            touched: true
    	});
    	const updatedControls = updateObject(this.state.controls, {
    		[controlName]: updatedElement
    	});

        this.setState({controls: updatedControls});

        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }
        this.setState({controls: updatedControls, formIsValid: formIsValid});
    }
    orderHandler = ( event ) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.controls) {
            formData[formElementIdentifier] = this.state.controls[formElementIdentifier].value;
        }
        console.log(formData);
        this.props.onSignInCompany(formData);

    }
    render(){
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }
        let form = "";
        form = formElementsArray.map(formElement => (
        	<SignInput
                key = {formElement.id}
                icon = {formElement.config.elementConfig.icon}
        		elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}
        	/>
        ));
        return(
            <div className = {classes.slider}>
                <div className = {classes.images}>
                    <div>
                        <img width="100%" src = {baseUrl+"public/images/slider/7.png"}/>
                    </div>
                    <div>
                        <img width="100%" src = {baseUrl+"public/images/slider/12.png"}/>
                    </div>
                    <div>
                        <img width="100%" src = {baseUrl+"public/images/slider/2.png"}/>
                    </div>
                    <div>
                        <img width="100%" src = {baseUrl+"public/images/slider/3.png"}/>
                    </div>
                    <div style = {{width: "20%"}}>
                        <img width="100%" src = {baseUrl+"public/images/slider/4.png"}/>
                    </div>
                    <div>
                        <img width="100%" src = {baseUrl+"public/images/slider/5.png"}/>
                    </div>
                    <div>
                        <img width="100%" src = {baseUrl+"public/images/slider/9.png"}/>
                    </div>
                    <div>
                        <img width="100%" src = {baseUrl+"public/images/slider/11.png"}/>
                    </div>
                    <div>
                        <img width="100%" src = {baseUrl+"public/images/slider/8.png"}/>
                    </div>
                    <div style= {{width: "30%"}} >
                        <img width="100%" src = {baseUrl+"public/images/slider/7.png"}/>
                    </div>
                    <div>
                        <img width="100%" src = {baseUrl+"public/images/slider/8.png"}/>
                    </div>
                    <div style= {{width: "20%"}}>
                        <img width="100%" src = {baseUrl+"public/images/slider/6.png"}/>
                    </div>
                    <div style= {{width: "20%"}}>
                        <img width="100%" src = {baseUrl+"public/images/slider/5.png"}/>
                    </div>
                    <div style = {{width: "20%"}}>
                        <img width="100%" src = {baseUrl+"public/images/slider/12.png"}/>
                    </div>
                    <div>
                        <img width="100%" src = {baseUrl+"public/images/slider/2_01.png"}/>
                    </div>
                    <div style = {{width: "20%"}}>
                        <img width="100%" src = {baseUrl+"public/images/slider/11.png"}/>
                    </div>
                    
                </div>
                <img width="100%" src = {baseUrl+"public/images/banner/white.png"}/>
                <div className = {[classes.bannerContentSignIn,"container",style.container].join(" ")}>
                    <div>
                        <h2>Đăng Ký Tài Khoản Đối Tác</h2>
                        {form}
                        <p style={{color: "red"}}>{this.props.error}</p>
                        <button
                             disabled = {!this.state.formIsValid}
                             onClick = {this.orderHandler}
                        >Đăng Ký</button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        path: state.home.path,
        error: state.authCompany.error,
        alertSignIn: state.authCompany.alertSignIn
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onSetPath: (path) => dispatch(actions.setPath(path)),
        onSignInCompany: (formdata) => dispatch(actions.signInCompany(formdata))
    };  
};

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);