import React, { useState } from 'react'
import './loginStyle.scss'

function LoginSeller() {
  const [isShowPass, setIsShowPass] = useState(false)
  return (
    <div id='login-form' className='container d-flex'>
      <div className='banner-img'>

      </div>
      <div className='form-login'>
        <div className='title'>
          <p>Đăng nhập</p>
        </div>
        <div className='form-input'>
          <div className='user-name'>
            <input type='text' placeholder='Nhập SĐT hoặc email' />
          </div>
          <div className='password position-relative'>
            <input type={isShowPass?'text':'password'} placeholder='Nhập password' />
            {isShowPass?<div className="show-pass position-absolute" onClick={()=>setIsShowPass(false)}><i className='far fa-eye'/></div>:
              <div className="show-pass position-absolute" onClick={()=>setIsShowPass(true)}><i className="far fa-eye-slash"/></div>}
          </div>
        </div>
        <div className='footer-form'>
          <div>
            <button>Đăng nhập</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSeller
