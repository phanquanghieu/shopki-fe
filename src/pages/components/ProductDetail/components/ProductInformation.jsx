import '../style/productInformationStyle.scss'
import request from '../../../../services/request'
import helper from '../../../../services/helper'
import { useState } from 'react'
import local from '../../../../services/local'

function ProductInformation(props){

  const user = local.get('user')
  const [productItem, setProductItem] = useState()
  const handleAddToCart = async (id) => {

    await setProductItem(props.product)

    if (user) {
      const cart = await request.post('/api/cart/create', {
        shop: props.product.shop.name,
        img: props.product.img,
        product: props.product.name,
        price: props.product.price,
        quantity: 1,
        user_id: user.id
      })

      if (cart) {
        helper.toast('success', 'them gio hang thanh cong')
        console.log('them gio hang thanh cong')//viet thong bao o day0
      } else console.log('da co loi xay ra') //thong bao loi cho nguoi dung
    } else console.log('khong co user')
  }
  return(
    <div id="product-detail" className="container d-flex">
      <div className="image-product">

      </div>
      <div className="product-information">
        <div className="name-product">
          <h1>{props.product.name}</h1>
        </div>
        <div className="price">
          <p>{props.product.price} đ</p>
        </div>
        <div className="add-to-cart">
          <div className="position-absolute add-to-cart" onClick={()=>handleAddToCart(props.product.id)}>
            <i className="fas fa-cart-plus"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductInformation;