import React, {Component} from 'react';
import { connect } from 'react-redux';

import {baseUrl} from '../../../shared/utility';
import {updateObject,checkValidity} from '../../../shared/utility';

import classes from './login.css';
import style from '../../../Styles/style.css';

import SignInput from '../../../components/Navigation/SignInput/signInput';
import * as actions from '../../../store/actions/index';

class Login extends Component{
    state = {
		controls:{
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
    loginClick = () =>{
        this.props.onLoginClick(this.state.controls.username.value, this.state.controls.password.value);
        
    }
    componentDidUpdate(){
        if(this.props.idCompany){
            this.props.history.replace("/companyadmin");
        }
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
                <div className = {[classes.bannerContent,"container",style.container].join(" ")}>
                    <div>
                        <h2>Tài Khoản Quản Trị</h2>
                        {form}
                        <p style={{color: "red"}}>{this.props.error}</p>
                        <button
                             disabled = {!this.state.formIsValid}
                             onClick = {this.loginClick}
                        >Đăng Nhập</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        path: state.home.path,
        idCompany: state.authCompany.idCompany,
        error: state.authCompany.error
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onSetPath: (path) => dispatch(actions.setPath(path)),
        onLoginClick: (username,password) =>dispatch(actions.authLoginCompany(username,password))
    };  
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);