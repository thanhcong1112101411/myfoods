import React,{Component} from 'react';

import SignForm from '../Sign/sign';
import SignInput from '../SignInput/signInput';
import {updateObject,checkValidity} from '../../../shared/utility';

class SignIn extends Component{
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
    submitHandler = (event) =>{
        event.preventDefault();
        this.props.authclicked(this.state.controls.username.value, this.state.controls.password.value);
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

        let signForm = null;

        if(this.props.show){
            signForm = (
                <SignForm
                    heading = "Welcome Back"
                    content = "Fill out the form to get started"
                    buttonType = "login"
                    error = {this.props.error}
                    show = {this.props.show}
                    formIsValid = {!this.state.formIsValid}
                    deleteClicked = {this.props.loginDeleteClicked}
                    signShowButton = {this.props.loginShowButton}
                    authclicked = {this.submitHandler}
                >
                    {form}
                </SignForm>
            );
        }
        

        return signForm;
    }
}

export default SignIn;