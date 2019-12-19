import React from 'react';

import style from '../../../../Styles/style.css';
const descriptionDetail = (props) =>{
    return(
        <div className = {["container", style.container, "mt-3"].join(" ")}>
            {props.description}
        </div>
    );
}
export default descriptionDetail;