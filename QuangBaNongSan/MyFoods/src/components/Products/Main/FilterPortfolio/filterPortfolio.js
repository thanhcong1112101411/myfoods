import React,{Component} from 'react';

import FilterSelectItem from '../../../UI/FilterSelectitem/filterSelectItem';

import classes from './filterPortfolio.css';

class filterPortfolio extends Component{
    render(){
        return(
            <div className={classes.filterStyle}>
                <h1 className = {["h2","text-center"].join(" ")}>{this.props.heading}</h1>
                <ul className = {classes.filterStyleUl}>
                    {this.props.portfolioForm.map(ctrl =>(
                        <FilterSelectItem
                            key = {ctrl.IdCatagory}
                            elementType = "input"
                            type = "checkbox"
                            clicked={() =>this.props.clicked(ctrl.IdCatagory)}
                            value = {ctrl.catagoryName}
                            checked = {ctrl.checked}
                        />
                    ))}
                </ul>
            </div>
        );
    }
    
}
export default filterPortfolio;