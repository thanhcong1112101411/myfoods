import React from 'react';

import {ImageBannerCompanyLink} from '../../../shared/utility';
const bannerCompany = (props) =>{
    return(
        <div>
            <img width="100%" src= {ImageBannerCompanyLink + props.companyInf.companyBanner} />
        </div>
    );
}

export default bannerCompany;