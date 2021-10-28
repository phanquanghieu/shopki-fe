import { useEffect, useState } from 'react'
import request from '../../../../../services/request'
import '../../style/warehouse.scss'
import { Link } from 'react-router-dom'
import helper from '../../../../../services/helper'
function WareHouse(){
  useEffect(async ()=>{
    const res=await request.get("/api/warehouse");
    setWarehouses(res.wareHouses);
  },[])

  const [warehouses,setWarehouses]=useState([]);
  const handleDeleteWarehouse = async (id) => {
    const res=await request.delete("/api/warehouse",{
      id
    })
   if (res){
     if (res.error===0){
       helper.toast('success', 'Delete warehouse success!')
       let arr=[...warehouses];
       arr.map((value,i)=>{
         if (value.id===id)
         {
           arr.splice(i,1);
         }
       })
       setWarehouses(arr);
     }else {
       helper.toast('danger', 'Delete warehouse fail!')
     }
   }
  }
if (warehouses.length!==0){
  return(
    <div className="list-warehouse container justify-content-center">
      {warehouses.map((value,i)=>{
        return(
          <div className="warehouse d-flex justify-content-between align-items-center">
           <Link to={`/seller/home-center/warehouse/${value.id}`} className="d-flex">
             <div className="image">
             </div>
             <div className="infor">
               <div className="name">
                 {value.name}
               </div>
               <div className="address">
                 {value.address}
               </div>
             </div>
           </Link>
            <div className="btn-nav">
              <button onClick={()=>handleDeleteWarehouse(value.id)}>Xóa</button>
              <button>Sửa</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}else{
  return (
    <div>
      Vui lòng đăng ký kho tại đây!
    </div>
  )
}
}

export default WareHouse;