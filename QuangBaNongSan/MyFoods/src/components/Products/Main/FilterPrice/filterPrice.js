import React from 'react';

import FilterSelectItem from '../../../UI/FilterSelectitem/filterSelectItem';

const filterPrice = (props) => {
    return(
        <FilterSelectItem
            elementType={props.priceForm.elementType}
            elementConfig={props.priceForm.elementConfig}
            value={props.priceForm.value}
            changed = {props.changed}
        />
    );
}

export default filterPrice;