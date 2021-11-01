import '../../VoucherDetail/style/VoucherInformation.scss';
import React, { useState } from 'react'
import local from 'services/local';
const user = local.get('user');
function VoucherInformation(props) {
    // console.log(props);
    return (
        <div id='voucher-detail' className='voucher-item'>
            <div className="voucher-header">
                <div className="voucher-img">{props.voucher.name}</div>
            </div>
            <div className="voucher-body">

                <div className="voucher-desc"><b>Ưu đãi :</b>
                    <div className="voucher-desc-detail">{props.voucher.description}</div>
                </div>

                <div className="voucher-date"><b>Hạn sử dụng :</b>
                    <div className="voucher-date-detail">{props.voucher.date}</div>
                </div>
                <div className="voucher-device"><b>Thiết bị:</b>
                    <div className="voucher-device-detail">{props.voucher.device}</div>
                </div>
                <div className="voucher-product"><b>Các mặt hàng được áp dụng:</b>
                    <div className="voucher-product-detail">{props.voucher.product}</div>
                </div>
                <div className="voucher-payment"><b>Hình thức thanh toán :</b>
                    <div className="voucher-payment-detail">{props.voucher.type_of_payment}</div>
                </div>
                <div className="voucher-ship"><b>Hình thức vận chuyển :</b>
                    <div className="voucher-ship-detail">{props.voucher.shipment}</div>
                </div>
            </div>
        </div>
    )

}
export default VoucherInformation;