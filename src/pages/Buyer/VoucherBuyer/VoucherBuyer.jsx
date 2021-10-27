import React, { useEffect } from 'react'
import { useState } from 'react'
import request from 'services/request'
import local from 'services/local'
import './VoucherBuyer.scss'
import { Link } from 'react-router-dom'

function VoucherBuyer() {
  const user = local.get('user')
  const[vouchers, setVoucher] = useState([])
  useEffect(() => {
    const fetchVoucher = async () =>{
      let res = await request.post('/api/voucher',{id : user.id}) 
      
      setVoucher(res)
      console.log(res)
    }
    fetchVoucher()
    
  },[])





  return <div className="voucher">
    
       
     <ul className="voucher__list">
      {vouchers.map((voucher) => (
         <li className="voucher__item">
          <Link to = {`/voucher-detail/${voucher.id}`}>
          <div  className="voucher__item-link">
           
           <div className="voucher__item-img">
              <div className="voucher__item-img-name">{voucher.name}</div>
           </div>
           <div className="voucher__item-info">
               <p className="voucher__item-description">{voucher.description}</p>
               <p className="voucher__item-date">{voucher.date}</p>
           </div>
           <div className="voucher__item-button">
             <a className="voucher__item-apply">Dùng ngay</a>
             <div className="voucher__item-detail">Điều kiện</div>
           </div>
           
         </div>
         <div className="voucher__item-link-seen">
          
         </div>
          </Link>

        </li>
      ))}
      
      
       
       </ul>  
  </div>
}

export default VoucherBuyer