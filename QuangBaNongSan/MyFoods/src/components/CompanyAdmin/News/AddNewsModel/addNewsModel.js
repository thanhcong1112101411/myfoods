import React, {Component} from 'react';

import classes from './addNewsModel.css';

import BackDrop from '../../../UI/backdrop/backdrop';
import Title from '../../Title/title';
import {updateObject,checkValidity} from '../../../../shared/utility';
import Input from '../../Input/input';
import ListImageAdding from './ListImageAdding/listImageAdding';

class AddNewsModel extends Component{
    state = {
        controls:{
			title: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Tiêu Đề',
                    note: ''
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 0,
                    maxLength: 200,
                    note: ''
                },
                valid: false,
                touched: false
            },
            content: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Nội Dung',
                    note: ''
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 0,
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
            }
        },
        formIsValid: false,
        picture: []
    }
    inputChangedHandler = (event, controlName) => {
        event.preventDefault();

        var values = {id: '',file: '', fileName: ''};
        if(controlName === "image"){
            let files = event.target.files;
            values.fileName = files[0].name;
            let reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = (event) =>{
                values.file = event.target.result;
            }
            values.id = this.state.picture.length;
        
            this.setState({picture: this.state.picture.concat(values)});
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
        formData["image"] = this.state.picture;
        
        console.log(formData);
        this.props.addNewsClick(formData);
        // this.props.newsAddIconClick();

        this.setState({picture: []});
    }
    onDeleteImageAdding = (id) =>{
        console.log(id);
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
                <ListImageAdding
                    listImage = {this.state.picture}
                    onDeleteImageAdding = {this.onDeleteImageAdding}
                />
                <div style={{textAlign: "right"}}>
                    <button className = {classes.addBtn} disabled={!this.state.formIsValid}
                        onClick = {this.orderHandler}
                    >Thêm</button>
                </div>
                
            </form>
        );
        return(
            <div className = { this.props.show ? "": classes.visible}>
                <BackDrop 
                    show = {this.props.show} 
                    clicked = {this.props.toggleNewsModel}
                />
                <div className = {classes.addModel}>
                    <Title title="Thêm Tin Tức" />
                    <hr/>
                    {form}
                    
                </div>
            </div>
        );
    }
}
export default AddNewsModel;