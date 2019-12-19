import React from 'react';

import {ImageNewsCompanyLink} from '../../../../shared/utility';
const newsItemImages = (props) =>{
    const image = props.images.map((ig,index) =>{
        return <div
                    key = {index}
                    className = {["col-lg-3 col-md-4 col-sm-6"].join(" ")}>
                    <img width="100%" src={ImageNewsCompanyLink + props.linkImage + ig}/>
                </div>
    });
    return(
        <div className="row">
            {image}
        </div>
    )
}

export default newsItemImages;