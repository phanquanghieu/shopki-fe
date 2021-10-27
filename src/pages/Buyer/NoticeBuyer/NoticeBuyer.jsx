import React, { useEffect } from 'react'
import { useState } from 'react'
import request from 'services/request'
import './NoticeBuyer.scss'
import local from 'services/local'
const user = local.get('user')

function NoticeBuyer() {

  useEffect(() => {
    fetchNotice()
  },[])

const[notices, setNotice] = useState([])
const fetchNotice = async () =>{
  let res = await request.post('/api/advertise' , {id : user.id})
  setNotice(res)
  console.log(res)
}
  const deleteNotice = (id) =>{
    setNotice(notices.filter((notice)=> notice.id !== id));
    let notice = request.post('/api/advertise/delete',{id:id})
    
  }
  const seenNotice = (id) =>{
    setNotice(notices.filter((notice)=> notice.seen=== 1));
   
    let notice = request.post('/api/advertise/update',{id : id});
  }
  const updateNotice = (id) =>{
    // let noticesNew  = [...notices];
    // let noticeItem = noticesNew.find((notice)=> notice.id === id)
    // noticeItem.seen = 0;
    // setNotice(noticesNew);
    let notice = request.post('/api/advertise/update',{id:id})
  }

  
  

  return <div className="notice">
 
    <div className="notice__header">
      <h3 className="notice-btn"> Đánh dấu đã đọc tất cả</h3>
    </div>
       
     <ul className="notice__list">
      {notices.map((notice)=> (
         <li className="notice__item" >
         <a href="" className={notice.seen===1 ? 'notice__item-link active' : 'notice__item-link'}onClick ={
           () => updateNotice(notice.id)
         }>
           
           <img src={notice.img} alt="" className="notice__item-img" />
           <div className="notice__item-info">
               <p className="notice__item-name">{notice.name}</p>
               <p className="notice__item-description">{notice.description}</p>
           </div>
           <div className="notice__btn">
         
           <button type="button"
                 onClick={
                   () => deleteNotice(notice.id)
                 }
                 className="btn2 btn-success">Xóa</button>
           
            
            
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
