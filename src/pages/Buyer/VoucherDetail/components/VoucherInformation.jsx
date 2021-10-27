import '../../VoucherDetail/style/VoucherInformation.scss';
import React, { useState } from 'react'
import local from 'services/local';
const user = local.get('user');
function VoucherInformation(props){
    // console.log(props);
    return (
        <div id = 'voucher-detail' className = 'voucher-item'>
        <div className="voucher-img">{props.voucher.name}</div>
        <div className="voucher-desc">{props.voucher.description}</div>
        <div className="voucher-date">{props.voucher.date}</div>
        <div className="voucher-device">{props.voucher.device}</div>
        <div className="voucher-product">{props.voucher.product}</div>
        <div className="voucher-payment">{props.voucher.type_of_payment}</div>
        <div className="voucher-ship">{props.voucher.shipment}</div>
        </div>
    )
 
}
export default VoucherInformation;