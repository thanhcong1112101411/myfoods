import React, {Component} from 'react';

import classes from '../ProductSearch/productSearch.css';

import CatagorySearchItem from './CatagorySearchItem/catagorySearchItem';

class CatagorySearch extends Component{
    render(){
        const ListCatagorySearch = this.props.listCatagory.map(ig=>{
            return(
                <CatagorySearchItem
                    key = {ig.IdCatagory}
                    catagoryName = {ig.catagoryName}
                    IdCatagory = {ig.IdCatagory}
                />
            )
        })
        return(
            <div className = {classes.itemSearch}>
                {ListCatagorySearch}
            </div>
        );
    }
}
export default CatagorySearch;