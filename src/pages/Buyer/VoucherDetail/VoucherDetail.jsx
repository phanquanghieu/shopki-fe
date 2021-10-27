import {useEffect, useState,} from 'react'
import VoucherInformation from './components/VoucherInformation';
import request from 'services/request';

function VoucherDetail(props) {
    const [voucher,setVoucher]=useState([]);
    useEffect(()=>{
      console.log(props.match.params)
      getVoucher()
    },[])


    const getVoucher=async ()=>{
      let res = await request.get(`/api/voucher/getVoucher?id=${props.match.params.id}`);
      if (res){
        setVoucher(res.voucher);
        
      }
    }
        return(
            <div>
                <VoucherInformation voucher = {voucher}/>
            </div>
        )
    }
export default VoucherDetail;

