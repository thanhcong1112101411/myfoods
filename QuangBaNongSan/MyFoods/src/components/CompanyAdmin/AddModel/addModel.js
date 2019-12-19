import React, {Component} from 'react';

import classes from './addModel.css';

import BackDrop from '../../UI/backdrop/backdrop';
import Title from '../Title/title';
import {updateObject,checkValidity} from '../../../shared/utility';
import Input from '../Input/input';
import Button from '../../UI/Button/button';

class AddModel extends Component{
    state = {
        controls:{
			name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Tên Sản Phẩm',
                    note: ''
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 0,
                    note: ''
                },
                valid: false,
                touched: false
            },
            price: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Giá Sản Phẩm',
                    note: ''
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 0,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            rrp: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'rrp',
                    note: ''
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 0,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            quantity: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Số lượng Sản Phẩm',
                    note: ''
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 0,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            image: {
                elementType: 'inputFile',
                elementConfig: {
                    type: 'file',
                    placeholder: 'File Ảnh'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            hidden: {
                elementType: 'selectDefault',
                elementConfig: {
                    options: [
                        {value: '0', displayValue: 'Hiển Thị'},
                        {value: '1', displayValue: 'Không Hiển Thị'}
                    ],
                    placeholder: "Hiển Thị"
                },
                value: '0',
                validation: {},
                valid: true
            },
            brand: {
                elementType: 'select',
                elementConfig: {
                    options: [],
                    placeholder: "Thương Hiệu"
                },
                value: '1',
                validation: {},
                valid: true
            },
            catagory: {
                elementType: 'select',
                elementConfig: {
                    options: [],
                    placeholder: "Danh Mục"
                },
                value: '1',
                validation: {},
                valid: true
            },
            unit: {
                elementType: 'select',
                elementConfig: {
                    options: [],
                    placeholder: "Đơn Vị Tính"
                },
                value: '1',
                validation: {},
                valid: true
            }
            
        },
        formIsValid: false
    }
    inputChangedHandler = (event, controlName) => {
        event.preventDefault();
        var values = {file: '', fileName: ''};
        if(controlName === "image"){
            let files = event.target.files;
            values.fileName = files[0].name;
            let reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = (event) =>{
                values.file = event.target.result;
            }
        }else{
            values = event.target.value;
        }
    	const updatedElement = updateObject(this.state.controls[controlName],{
            value: values,
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
        this.props.addProductClick(formData);
        alert("Thêm Sản Phẩm Thành Công !");
        this.props.productAddIconClick();
    }

    render(){
        
        const formElementsArray = [];
        for (let key in this.state.controls) {
            if(key == 'brand'){
                formElementsArray.push({
                    id: key,
                    config: this.state.controls[key],
                    options: this.props.brand,
                });
            }
            else if(key == 'unit'){
                formElementsArray.push({
                    id: key,
                    config: this.state.controls[key],
                    options: this.props.unit,
                });
            }
            else if(key == 'catagory'){
                formElementsArray.push({
                    id: key,
                    config: this.state.controls[key],
                    options: this.props.catagory,
                });
            }else{
                formElementsArray.push({
                    id: key,
                    config: this.state.controls[key],
                    options: [],
                });
            }
            
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        options = {formElement.options}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <div style={{textAlign: "right"}}>
                    <button className = {classes.addBtn} disabled={!this.state.formIsValid}
                        onClick = {this.orderHandler}
                    >Thêm Sản Phẩm</button>
                </div>
            </form>
        );
        return(
            <div className = { this.props.show ? "": classes.visible}>
                <BackDrop 
                    show = {this.props.show} 
                    clicked = {this.props.productAddIconClick}
                />
                <div className = {classes.addModel}>
                    <Title title="Thêm Sản Phẩm" />
                    <hr/>
                    {form}
                </div>
            </div>
        );
    }
}
export default AddModel;