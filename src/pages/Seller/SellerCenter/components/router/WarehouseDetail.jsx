import { useEffect, useState } from 'react'
import request from '../../../../../services/request'
import '../../style/warehouseDetail.scss'
import { Link } from 'react-router-dom'
function WarehouseDetail(props) {
  useEffect(async () => {
    const res=await request.get(`/api/warehouse/detail?id=${props.match.params.id}`)
    setWarehouse(res.warehouse);
  }, [])
  const [warehouse,setWarehouse]=useState({});
  return (
    <div id={"warehouse-detail"} className="container">
      <div className=" d-flex justify-content-center">
        <h2>XIN CHÀO ĐẾN VỚI KHO {warehouse.name}!</h2>
      </div>
      <div>
        <div className="btn-nav">
          <Link to={`/seller/home-center/product/add/ware/${warehouse.id}`}>Nhập hàng</Link>
          <button>Xuất hàng</button>
        </div>
        <div>
         <p>Danh sách sản phẩm trong kho</p>
          {(warehouse.products&&warehouse.products.length!==0)?warehouse.products.map((value,i)=>{
            return(
              <div className="product d-flex align-items-center">
                <div className="img-product">
                  {value.imageUrl?<img src={value.imageUrl}/>:<div/>}
                </div>
                <div className="info">
                  <div className="name">
                    <p>{value.name}</p>
                  </div>
                  <div className="price">
                    <p>Giá:{value.price}</p>
                  </div>
                </div>
              </div>
            )
          }):<div>Chưa có sản phẩm nào!</div>}
        </div>

      </div>
    </div>
  )
}

export default WarehouseDetail