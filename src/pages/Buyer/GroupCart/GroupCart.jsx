import React, { useEffect } from 'react'
import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import './groupCart.scss'
import request from 'services/request'
import local from 'services/local'
import { Card } from 'reactstrap'
import helper from 'services/helper'
import Loader from 'components/Loader'

function GroupCart() {
  const history = useHistory()
  const location = useLocation()
  const [carts, setCart] = useState({})
  const [url, setUrl] = useState(null)
  const [loading, setLoading] = useState(true)

  const user = local.get('user')

  const guest = local.getS('guest')
  useEffect(() => {
    const fetchCart = async () => {
      let search = new URLSearchParams(location.search)
      console.log(location.search)
      let res
      const groupCartId = local.getS('groupCartId')

      if (!guest && !search.get('id') && !user) {
        helper.toast('warning', 'Hãy đăng nhập!!!')
        return history.push('/login')
      }

      if (guest || search.get('id')) {
        local.setS('guest', search.get('id') || guest)
        res = await request.post('/api/groupcart/getbyid', { id: search.get('id') || guest })
      } else {
        res = await request.post('/api/groupcart/get', { id: user.id, phone: user.phone })
        local.setS('groupCartId', res.id)
        setUrl(window.location.href + '?id=' + res.id)
      }
      setCart(res || {})
      setLoading(false)
    }

    fetchCart()
  }, [])

  const changeCart = async (groupCartId, productId, amount) => {
    let _carts = { ...carts }
    let cartChange = _carts.groupCartDetails.find(
      (c) => c.groupCartId === groupCartId && c.productId === productId
    )
    if (cartChange.quantity + amount === 0) return
    cartChange.quantity += amount
    setCart(_carts)

    await request.post('/api/groupcart/update', {
      groupCartId,
      productId,
      quantity: _carts.quantity,
    })
  }

  const deleteCart = async (id, groupCartId, productId) => {
    let _carts = { ...carts }
    _carts.groupCartDetails = _carts.groupCartDetails.filter((g) => g.id !== id)
    setCart(_carts)

    await request.post('/api/groupcart/delete', { groupCartId, productId })
  }

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(url)
    return helper.toast('info', 'Đã lưu vào bộ nhớ tạm. Hãy gửi link cho bạn bè của bạn')
  }
  const handleOut = () => {
    local.clearS()

    return history.push('/')
  }

  if (loading)
    return (
      <div style={{ height: '90vh' }}>
        <Loader />
      </div>
    )

  return (
    <div className='cart_buyer pt-1'>
      <Card className='my-3 px-3 elevation-2'>
        <div className='card-body'>
          <h5 className='mb-4'>Giỏ hàng nhóm của: {carts.ownerName}</h5>

          {url && (
            <div className='d-flex align-items-center'>
              <div
                className='pf-panel-row pf-panel-label pf-header'
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                Link giỏ hàng nhóm
              </div>
              <div className='pf-panel-row'>
                <div className='pf-panel-url-value' id='url-value'>
                  {url}
                </div>
                <button className='pf-panel-url-btn' onClick={handleCopyUrl}>
                  Copy
                </button>
              </div>
            </div>
          )}
          {guest && (
            <div className='d-flex align-items-center'>
              <div
                className='pf-panel-row pf-panel-label pf-header'
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                Bạn đang trong giỏ hàng nhóm, bạn có muốn thoát không?
              </div>
              <div className='pf-panel-row ps-3'>
                <button className='btn btn-danger ' onClick={handleOut}>
                  Thoát
                </button>
              </div>
            </div>
          )}
        </div>
      </Card>
      <div className='cart__header elevation-2'>
        <div className='cart__header-item1'>Sản phẩm</div>
        <div className='cart__header-item2'>Đơn Giá</div>
        <div className='cart__header-item3'>Số Lượng</div>
        <div className='cart__header-item4'>Số Tiền</div>
        <div className='cart__header-item5'>Thao Tac</div>
      </div>

      <div className='cart__body'>
        <ul className='cart__list'>
          {carts.groupCartDetails?.map?.((cart) => (
            <li key={cart.id} className='cart__item elevation-2'>
              <div className='cart__item-body'>
                <div className='cart__item-info'>
                  <input type='checkbox' className='cart__item-checkbox'></input>
                  <img
                    src={
                      cart.img || 'https://cf.shopee.vn/file/570cf67f80a87870ebb065c330e344ca_tn'
                    }
                    alt={cart.img}
                    className='cart__item-img'
                  />
                  <p className='Cart__item-name'>{cart.name}</p>
                </div>
                <div className='cart__item-dongia'>{cart.price}</div>
                <div className='cart__item-soluong'>
                  <button
                    className='btn btn-sm btn-primary '
                    onClick={() => changeCart(cart.groupCartId, cart.productId, -1)}
                  >
                    <i class='fas fa-minus'></i>
                  </button>
                  <p className='cart__item-soluong-text'>{cart.quantity}</p>
                  <button
                    className='btn btn-sm btn-primary'
                    onClick={() => changeCart(cart.groupCartId, cart.productId, +1)}
                  >
                    <i class='fas fa-plus'></i>
                  </button>
                </div>
                <div className='cart__item-sotien'>{cart.quantity * cart.price}</div>
                <div className='cart__item-thaotac'>
                  <button
                    type='button'
                    onClick={() => deleteCart(cart.id, cart.groupCartId, cart.productId)}
                    className='btn btn-danger'
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default GroupCart
