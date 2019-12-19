import React, {Component} from 'react';

import classes from './listNewsItem.css';

import { faTrashAlt, faPenAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ImageNewsCompanyLink} from '../../../../shared/utility';

class ListNewsItem extends Component{

    deleteBtnClick = () =>{
        this.props.deleteCompanyNews(this.props.id);
    }
    render(){
        const listImage = this.props.listImages.map((ig,index)=>{
            return(
                <img
                    style={{border: "1px solid #eee",boxShadow: "2px 2px 5px #eee"}}
                    key = {index}
                    width="100px" 
                    src={ImageNewsCompanyLink + ig} 
                />
            );
        })
        return(
            <tr className = {classes.itemStyle}>
                <td>{this.props.title}</td>
                <td>{this.props.content}</td>
                <td>{listImage}</td>
                <td>{this.props.quantumClick}</td>
                <td>
                    <button onClick = {this.deleteBtnClick} className = {classes.deletebtn}><FontAwesomeIcon icon = {faTrashAlt} /></button>
                    {/* <button className = {classes.updatebtn}><FontAwesomeIcon icon = {faPenAlt} /></button> */}
                </td>
            </tr>
        );
    }
}

export default ListNewsItem;