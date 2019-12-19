import React, {Component} from 'react';

import classes from './listImageAdding.css';

import { faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class ListImageAdding extends Component{
    deleteImageAdding = (id) =>{
        this.props.onDeleteImageAdding(id);
    }
    render(){
        const list = this.props.listImage.map(ig=>{
            return(
                <div
                    className = {classes.listImageItem} 
                    key={ig.id}
                >
                    <div>
                        <p>{ig.fileName}</p>
                    </div>
                    {/* <div>
                        <span
                            onClick = {this.deleteImageAdding(ig.id)}
                        >
                            <FontAwesomeIcon icon = {faTimes} />
                        </span>
                    </div> */}
                </div>
            );
        })
        return(
            <div className = {classes.listImageStyle}>
                {list}
            </div>
        );
    }
}

export default ListImageAdding;