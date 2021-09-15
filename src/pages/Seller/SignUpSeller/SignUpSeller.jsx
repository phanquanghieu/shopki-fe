import React, { useState } from 'react'
import './signUpStyle.scss'
import Header from '../HomeSeller/components/header'
import { Link } from 'react-router-dom'

function SignUpSeller() {
  const [isShowPass, setIsShowPass] = useState(false)
  const [isShowRePass, setIsShowRePass] = useState(false)
  return (
    <div id='register-form' style={{backgroundColor:"#FFFFFF"}}>
      <div className="header-login container d-flex justify-content-between align-content-center">
        <div className="logo d-flex">
          <Link to="/seller"><img src="/assets/images/background-đăng kí nhà bán.png"/></Link>
          <h2>Đăng ký</h2>
        </div>
        <div className="help">
          <p>Cần trợ giúp?</p>
        </div>
      </div>
      <div className='d-flex justify-content-center' style={{ backgroundImage: `url("/assets/images/background-đăng kí nhà bán.png")`,marginTop:"20px",padding:"16px 0"}}>
        <div className='banner-img'>

        </div>
        <div className='form-login'>
          <div className='title'>
            <p>Đăng ký</p>
          </div>
          <div className='form-input'>
            <div className='user-name'>
              <input type='text' placeholder='Nhập SĐT hoặc email' />
            </div>
            <div className='password position-relative'>
              <input type={isShowPass ? 'text' : 'password'} placeholder='Nhập password' />
              {isShowPass ? <div className='show-pass position-absolute' onClick={() => setIsShowPass(false)}><i
                  className='far fa-eye' /></div> :
                <div className='show-pass position-absolute' onClick={() => setIsShowPass(true)}><i
                  className='far fa-eye-slash' /></div>}
            </div>
            <div className='re-password position-relative'>
              <input type={isShowRePass ? 'text' : 'password'} placeholder='Nhập lại password' />
              {isShowRePass ? <div className='show-pass position-absolute' onClick={() => setIsShowRePass(false)}><i
                  className='far fa-eye' /></div> :
                <div className='show-pass position-absolute' onClick={() => setIsShowRePass(true)}><i
                  className='far fa-eye-slash' /></div>}
            </div>
          </div>
          <div className='footer-form'>
            <div>
              <button>Đăng ký</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpSeller
