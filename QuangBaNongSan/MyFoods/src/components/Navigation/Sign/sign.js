import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import classes from './sign.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';

import siginImage from '../../../assets/images/banner/signin-3.png';

class Sign extends Component{
    render(){
        return(
            <div className = {classes.signin}>
                <div className = {classes.deleteBtn}>
                    <button id="delete" 
                        onClick={this.props.deleteClicked}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <div className={classes.scroll}>
                    <h1 className="h2 text-center">{this.props.heading}</h1>
                    <p className="text-center">{this.props.content}</p>
                    <p 
                        className = {classes.error}
                        style = {{display: this.props.error ? "block":"none"}}
                    >{this.props.error}</p>
                    <form className="mt-5">
                        {this.props.children}

                        <div className={classes.forget}>
                            <Link to="#">forget password</Link>
                        </div>
                        <input 
                            type="button"
                            className = {classes.login} 
                            value={this.props.buttonType === "login"? "Login": "Sign Up"}
                            disabled = {this.props.formIsValid}
                            onClick = {this.props.authclicked}
                        />
                    </form>
                    <p className="text-center mt-1" style={{fontSize: "14px"}}>Do not have an account?
                    <button 
                        onClick = {this.props.signShowButton} 
                        id="signup-btn" className={classes.signBtn}
                    >{this.props.buttonType === "login" ? "Sign Up":"Login"}</button></p>
                </div>
                <div className = {classes.signinImg}>
                    <img width="100%" src={siginImage} alt="background sign"/>
                </div>
            </div>
        );
    }
}

export default Sign;