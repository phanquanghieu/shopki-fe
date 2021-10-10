import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import request from 'services/request'
import './NoticeBuyer.scss'

function NoticeBuyer() {

  const[notices, setNotice] = useState([])
  useEffect(() => {
    const fetchNotice = async () =>{
      let res = await fetch('http://localhost:8080/api/advertise') 
      res = await res.json()
      setNotice(res)
      console.log(res)
    }
    fetchNotice()
    
  },[])





  return <div className="notice">
    <div className="notice__header">
      <h3 className="notice-btn"> Đánh dấu đã đọc tất cả</h3>
    </div>
       
     <ul className="notice__list">
      {notices.map((notice)=> (
         <li className="notice__item">
         <a href="" className="notice__item-link">
           
           <img src={notice.img} alt="" className="notice__item-img" />
           <div className="notice__item-info">
               <p className="notice__item-name">{notice.name}</p>
               <p className="notice__item-description">{notice.description}</p>
           </div>
           
         </a>
         <div className="notice__item-link-seen">
          
         </div>
    </li>
      ))}
      
      
       
       </ul>  
  </div>
}

export default NoticeBuyer
