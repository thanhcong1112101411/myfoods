import React, {Component} from 'react';

import { faCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CompanyWatingItem extends Component{
    onConfirmCompany = () =>{
        this.props.confirmCompany(this.props.id);
    }
    render(){
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.phone}</td>
                <td></td>
                <td>
                    <button style={{color: "green",backgroundColor: "#fff", border: "0"}}
                        onClick = {this.onConfirmCompany}
                    >
                        <FontAwesomeIcon icon = {faCheck} />
                    </button>
                </td>
            </tr>
        );
    }
}

export default CompanyWatingItem;