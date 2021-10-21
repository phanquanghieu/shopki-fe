import React, {useState} from 'react'
import './productItem.scss'
import request from 'services/request'
import local from 'services/local'
import helper from 'services/helper'
import { Link } from 'react-router-dom'

const user = local.get('user')
function ProductItem(props) {
  const discount = 100 - Math.round((100 * props.product.promoPrice) / props.product.price)
  const handleAddToCart=async(id)=>{

 await setProductItem(props.product);

  if(user){
    const cart = await request.post('/api/cart/create', {shop:props.product.shop.name, img : props.product.img , product: props.product.name, price:props.product.price,quantity: 1 , user_id: user.id});
  
    if(cart){
      helper.toast('success', 'them gio hang thanh cong')
      console.log("them gio hang thanh cong");//viet thong bao o day0
    }else console.log("da co loi xay ra") //thong bao loi cho nguoi dung
  }else console.log("khong co user")
  } 

  const[productItem,setProductItem] = useState()

  return (
    <div className='h-product-item'>
      <Link to={`/product-detail/${props.product.id}`}>
        <div className='h-p-item-container'>
          <div className='h-p__img'>
            <img src={props.product.img} alt='' />
            <div className='h-p__discount'>
              <div className='h-discount__num'>{discount + '%'}</div>
              <div className='h-discount__label'>Gỉam</div>
            </div>
          </div>
          <div className='h-p__content'>
            <div className='h-content__top'>
              <div className='h-p__name'>{props.product.name}</div>
            </div>

            <div className='h-content__bottom'>
              <div className='h-p__voucher'>
                <div className='h-voucher__item'>
                  <svg viewBox='-0.5 -0.5 4 16'>
                    <path
                      d='M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3'
                      stroke-width='1'
                    ></path>
                  </svg>
                  <div className='h-voucher__item--text'>{props.product.voucher}</div>
                  <svg viewBox='-0.5 -0.5 4 16'>
                    <path
                      d='M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3'
                      stroke-width='1'
                      transform='rotate(180) translate(-3 -15)'
                    ></path>
                  </svg>
                </div>
              </div>
              <div className='h-p__info'>
                <div className='h-p__price'>
                  {props.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </div>
                <div className='h-p__sold'>Đã bán {props.product.historicalSold}</div>
              </div>
            </div>
          </div>
          <div className="position-absolute add-to-cart" onClick={()=>handleAddToCart(props.product.id)}>
           <i className="fas fa-cart-plus"></i>
          </div>
        </div>
      </Link>

    </div>

  )
}

export default ProductItem
