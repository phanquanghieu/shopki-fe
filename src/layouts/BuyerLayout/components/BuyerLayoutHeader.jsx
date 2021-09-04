import React from 'react'
import { Link } from 'react-router-dom'
import auth from 'services/auth'

function BuyerLayoutHeader() {
  const user = auth.getUser()
  console.log(user)

  return (
    <header className='h-header'>
      <div className='h-header-container'>
        <div className='h-header-top'>
          <div className='h-header-top__left'>
            <Link to='/seller' className='h-header-top__item'>
              <div className='h-header-top__link'>Kênh người bán</div>
            </Link>
            <div className='h-header-top__item'>
              <a
                className='h-header-top__link'
                href='https://www.facebook.com/phanhieu15/'
                target='_blank'
                rel='noreferrer'
              >
                Kết nối <i className='fab fa-facebook'></i>
              </a>
            </div>
          </div>
          <div className='h-header-top__right'>
            <div className='h-header-top__item h-dropdown h-dropdown--noti'>
              <div className='h-header-top__link h-dropdown__toggle'>
                <i className='fas fa-bell'></i> Thông báo
              </div>
              <div className='h-dropdown__menu'>
                <div className='h-menu__item'>sss</div>
              </div>
            </div>
            <Link to='/signup' className='h-header-top__item'>
              <div className='h-header-top__link'>Đăng ký</div>
            </Link>
            <Link to='/login' className='h-header-top__item'>
              <div className='h-header-top__link'>Đăng Nhập</div>
            </Link>
            <div className='h-header-top__item h-dropdown h-dropdown--profile'>
              <div className='h-header-top__link h-dropdown__toggle'>
                <i className='fas fa-user'></i> phanquangieu
              </div>
              <div className='h-dropdown__menu'>
                <div className='h-menu__item'>
                  <Link to='/buyer/account/profile'>Tài khoản của tôi</Link>
                </div>
                <div className='h-menu__item'>
                  <Link to='/buyer/purchase'>Đơn mua</Link>
                </div>
                <div className='h-menu__item'>
                  <Link to='/login'>Đăng xuất</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-header-main'>
          <Link to='/' className='h-header__brand'>
            ShopKi
          </Link>
          <div className='h-header__search'>
            <input className='h-search__input' type='text' placeholder='Tìm kiếm trên ShopKi' />
            <button className='h-search__btn'>
              <i className='fas fa-search'></i>
            </button>
          </div>
          <div className='h-header__cart'>
            <div className='h-dropdown h-dropdown--cart'>
              <Link to='/cart' className='h-cart__icon h-dropdown__toggle'>
                <i className='fas fa-cart-arrow-down'></i>
                <div className='h-cart__amount'>299</div>
              </Link>
              <div className='h-dropdown__menu'>
                <div className='h-menu__item opacity-50'>Sản phẩm mới thêm</div>
                <div className='h-menu__item'></div>
                <div className='h-menu__item'></div>
                <div className='h-menu__item'></div>
                <div className='h-menu__footer'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default BuyerLayoutHeader
