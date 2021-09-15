import React, { useState } from 'react'
import './loginStyle.scss'
import { Link } from 'react-router-dom'

function LoginSeller() {
  const [isShowPass, setIsShowPass] = useState(false)
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [error,setError]=useState({userName:'',password:''})
  const handleLogin=async ()=>{
    if (userName===''){
      setError((prevState)=>({
        ...prevState,
      userName:"Vui lòng nhập tài khoản",
        password:""
      }));
      console.log(error.userName)
      return false;
    }
    if (password===""){
      setError((prevState)=>({
        ...prevState,
        password:"Vui lòng nhập mật khẩu",
        userName:""
      }));
      console.log(error.password)
      return false;
    }
    console.log(userName);
    console.log(password);
  }
  return (
    <div id='login-form' style={{backgroundColor:"#f28466"}}>
    <div className="header-login">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo d-flex">
          <Link to="/seller">ShopKi</Link>
          <div className="nav-login d-flex align-items-center">
            <h2>Đăng nhập</h2>/<Link to="/seller/register">Đăng ký</Link>
          </div>
        </div>
        <div className="help">
          <p>Cần trợ giúp?</p>
        </div>
      </div>
    </div>
      <div className='d-flex justify-content-end' style={{ backgroundImage: `url("/assets/images/shopki-seller.png")`,
        marginTop:"20px",padding:"16px 0",width:"100%",height:"550px",
        backgroundRepeat: "no-repeat",
        backgroundColor:"#f28466"
        // backgroundAttachment: "fixed",
        // backgroundPosition: "center"
      }}>
        {/*<div className='banner-img'>*/}
        {/*  <img src="/assets/images/shop-image.png"/>*/}
        {/*</div>*/}
        <div className='form-login'>
          <div className='title'>
            <p>Đăng nhập</p>
          </div>
          <div className='form-input'>
            <div className='user-name'>
              <p>Nhập email hoặc số điên thoại:</p>
              <input type='text' placeholder='Nhập SĐT hoặc email' onChange={(e)=>setUserName(e.currentTarget.value)}/>
            </div>
            <div className='password position-relative'>
              <p>Nhập password:</p>
              <input type={isShowPass ? 'text' : 'password'} placeholder='Nhập password' onChange={(e)=>setPassword(e.currentTarget.value)}/>
              {isShowPass ? <div className='show-pass position-absolute' onClick={() => setIsShowPass(false)}><i
                  className='far fa-eye' /></div> :
                <div className='show-pass position-absolute' onClick={() => setIsShowPass(true)}><i
                  className='far fa-eye-slash' /></div>}
            </div>
            <div className="forgot-pass d-flex justify-content-end">
              <Link to="#">Quên mật khẩu</Link>
            </div>
          </div>
          <div className='footer-form'>
            <div>
              <button onClick={()=>handleLogin()}>Đăng nhập</button>
              <Link to="/seller/register"><button>Đăng ký</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSeller
