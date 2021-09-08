import React from 'react'
import '../homeStyle/header.scss'
import { Link } from 'react-router-dom'
function Header(props) {
  return (
    <div id="header-seller" className="header-seller">
      <div className="container d-flex justify-content-between">
        <div className="logo">

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
