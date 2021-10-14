import { useEffect, useState } from 'react'
import request from '../../../../../services/request'
import '../../style/productList.scss'
import toast from '../../../../../libs/Toast/Toast'

function ProductList() {
  useEffect(async () => {
   if (products.length===0){
     const res = await request.get('/api/product')
     setProducts(res.products)
   }
  })
  const [products, setProducts] = useState([])
  const [isDelete, setIsDelete] = useState(false)
  const [idDelete,setIdDelete]=useState(0)
  const handleDelete = (id) => {
    setIdDelete(id)
    setIsDelete(true)
  }
  const handleDeleteProduct=async ()=>{
    const res = await request.delete('/api/product',{id:idDelete});
    if (res.error===0){
      toast.show("success","Xóa sp thành công")
      setIsDelete(false);
      let productClone=[...products];
      productClone.map((value,i)=>{
        if (value.id===idDelete){
          productClone.splice(i,1)
        }
      })
      setProducts(productClone);

    }
  }
  if (products.length !== 0) {
    return (
      <div className='d-flex justify-content-center'>
        <div id='product-list' className='position-relative'>
          <div className='title d-flex justify-content-between'>
            <div className='name-price d-flex'>
              <p style={{ marginRight: '240px' }}>Sản phẩm</p>
              <p>Giá</p>
            </div>
            <div className='navigator'>
              <p>Chức năng</p>
            </div>
          </div>
          {products.map((value, i) => {
            return (
              <div className='product d-flex justify-content-between'>
                <div className='d-flex'>
                  <div className='image-product'>

                  </div>
                  <div className='name-product'>
                    {value.name}
                  </div>
                  <div className='price'>
                    {value.price}đ
                  </div>
                </div>
                <div className='btn-nav d-flex'>
                  <button>Chỉnh sửa</button>
                  <button onClick={() => handleDelete(value.id)}>Xóa</button>
                </div>
              </div>
            )
          })}
          {isDelete &&
          <div>
            <div className='nen' onClick={()=>setIsDelete(false)}/>
            <div className='confirm-delete position-absolute'>
              <h2>Bạn có chắc muốn xóa sản phẩm này?</h2>
              <div className='btn-confirm d-flex justify-content-center'>
                <button onClick={()=>handleDeleteProduct()}>Có</button>
                <button onClick={()=>setIsDelete(false)}>Không</button>
              </div>
            </div>
          </div>}
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <p>Vui lòng thêm sản phẩm</p>
      </div>
    )
  }

}

export default ProductList