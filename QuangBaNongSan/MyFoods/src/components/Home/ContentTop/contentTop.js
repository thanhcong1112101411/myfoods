import React from 'react';

import classes from './contentTop.css';
import style from '../../../Styles/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faUndoAlt, faPhone, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const contentTop = (props) =>(
    <div className={classes.contentTop}>
    <div className = {["container",style.container, classes.contentTopBg].join(" ")}>
        <div className="row">
            <div className="col-md-3">
                <div className={classes.contentTopItem}>
                    <span className="d-block"><FontAwesomeIcon icon={faTruck} /></span>
                    <strong className="d-block">Miễn Phí Vận Chuyển</strong>
                    <p>Miễn Phí Vận Chuyến Mọi Đơn Hàng</p>
                </div>
            </div>
            <div className="col-md-3">
                <div className={classes.contentTopItem}>
                    <span className="d-block"><FontAwesomeIcon icon={faUndoAlt} /></span>
                    <strong className="d-block">Đảm Bảo An Toàn</strong>
                    <p>Sản Phẩm Chất Lượng, An Toàn</p>
                </div>
            </div>
            <div className="col-md-3">
                <div className={classes.contentTopItem}>
                    <span className="d-block"><FontAwesomeIcon icon={faPhone} /></span>
                    <strong className="d-block">Hỗ Trợ 24/7</strong>
                    <p>Chăm Sóc Khách Hàng Mọi Lúc</p>
                </div>
            </div>
            <div className="col-md-3">
                <div className={classes.contentTopItem}>
                    <span className="d-block"><FontAwesomeIcon icon={faShieldAlt} /></span>
                    <strong className="d-block">Thanh Toán Tiện Lợi</strong>
                    <p>Hỗ Trợ Nhiều Loại Thanh Toán</p>
                </div>
            </div>
        </div>
    </div>
</div>
);

export default contentTop;