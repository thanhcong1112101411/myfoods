import React, {Component} from 'react';

import classes from './updateModel.css';

import BackDrop from '../../UI/backdrop/backdrop';
import Title from '../Title/title';
import {updateObject,checkValidity} from '../../../shared/utility';
import Input from '../Input/input';

class UpdateModel extends Component{
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
                    note: '( ví dụ )'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 0,
                    isNumeric: true
                },
                valid: false,
                touched: false,
                
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
                valid: true,
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
        console.log(formData);
        this.props.updateProductClick(formData, this.props.updateProductInf.IdProduct);
        this.props.productUpdateIconClick();
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(this.props.updateProductInf);
    //     if(this.props.updateProductinf != []){
    //         console.log(this.props.updateProductInf);
    //     const updatedElement = updateObject(this.state.controls.name,{
    //         value: this.props.updateProductInf.Name
    // 	});
    // 	const updatedControls = updateObject(this.state.controls, {
    // 		name: updatedElement
    // 	});

    //     this.setState({controls: updatedControls});

    //     console.log(this.state.controls);
    //     }
        
    //     return true;
    // }

    render(){
        const formElementsArray = [];
        for (let key in this.state.controls) {
            if(key == 'brand'){
                formElementsArray.push({
                    id: key,
                    config: this.state.controls[key],
                    options: this.props.brand
                });
            }
            else if(key == 'unit'){
                formElementsArray.push({
                    id: key,
                    config: this.state.controls[key],
                    options: this.props.unit
                });
            }
            else if(key == 'catagory'){
                formElementsArray.push({
                    id: key,
                    config: this.state.controls[key],
                    options: this.props.catagory
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
                    >Lưu</button>
                </div>
                
            </form>
        );
        return(
            <div className = { this.props.show ? "": classes.visible}>
                <BackDrop 
                    show = {this.props.show} 
                    clicked = {this.props.productUpdateIconClick}
                />
                <div className = {classes.addModel}>
                    <Title title="Chỉnh Sửa Thông Tin" />
                    <hr/>
                    {form}
                </div>
            </div>
        );
    }
}
export default UpdateModel;