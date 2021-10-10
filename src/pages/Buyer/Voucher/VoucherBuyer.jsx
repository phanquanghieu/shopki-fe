// import React, { useEffect } from 'react'
// import { useState } from 'react/cjs/react.development'
// import request from 'services/request'
// import './voucher.scss'

// function Voucher() {

//   const[vouchers, setVoucher] = useState([])
//   useEffect(() => {
//     const fetchVoucher = async () =>{
//       let res = await fetch('http://localhost:8080/api/voucher') 
//       res = await res.json()
//       setVoucher(res)
//       console.log(res)
//     }
//     fetchVoucher()
    
//   },[])





//   return <div className="voucher">
    
       
//      <ul className="voucher__list">
//       {vouchers.map((voucher)=> (
//          <li className="voucher__item">
//          <a href="" className="voucher__item-link">
           
//            <img src={voucher.img} alt="" className="voucher__item-img" />
//            <div className="voucher__item-info">
//                <p className="voucher__item-name">{voucher.name}</p>
//                <p className="voucher__item-description">{voucher.description}</p>
//            </div>
           
//          </a>
//          <div className="voucher__item-link-seen">
          
//          </div>
//     </li>
//       ))}
      
      
       
//        </ul>  
//   </div>
// }

// export default voucherBuyer
