import React, {Component} from 'react';
import { faTrashAlt, faLock} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './actionCompanyItem.css';

class ActionCompanyItem extends Component{
    onDeleteCompany = () =>{

    }
    render(){
        let productQuantum = this.props.productQuantum;
        if(productQuantum == null){
            productQuantum = 0;
        }
        let newsQuantum = this.props.newsQuantum;
        if(newsQuantum == null){
            newsQuantum = 0;
        }
        return(
            <tr className = {classes.itemStyle}>
                <td>{this.props.name}</td>
                <td>{this.props.link}</td>
                <td>{productQuantum}</td>
                <td>{newsQuantum}</td>
                {/* <td>
                    <button onClick = {this.onDeleteCompany} className = {classes.deletebtn}><FontAwesomeIcon icon = {faLock} /></button>
                </td> */}
            </tr>
        );
    }
}

export default ActionCompanyItem;