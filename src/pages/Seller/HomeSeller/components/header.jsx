import React from 'react'
import '../homeStyle/header.scss'
function Header(props) {
  return (
    <div id="header-seller" className="header-seller">
      <div className="container d-flex justify-content-between">
        <div className="logo">

        </div>
        <div className="login-register">
            <button className="btn-login">Đăng nhập</button>
            <button className="btn-register">Đăng kí</button>
        </div>
      </div>
    </div>
  )
}

export default Header
