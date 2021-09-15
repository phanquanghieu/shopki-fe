import React, { useEffect } from 'react'
import '../homeStyle/header.scss'
import { Link } from 'react-router-dom'
function Header(props) {
  useEffect(()=>{
    console.log(props)
  })
  return (
    <div id="header-seller" className="header-seller">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src="/assets/images/logo-shopki.png" alt="banner"/>
        </div>
        <div className="login-register">
            <Link to="/seller/login"><button className="btn-login">Đăng nhập</button></Link>
            <button className="btn-register">Đăng kí</button>
        </div>
      </div>
    </div>
  )
}

export default Header
