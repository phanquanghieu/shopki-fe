import React, { useState } from 'react'
import './signUpStyle.scss'
import { Link } from 'react-router-dom'

function SignUpSeller() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [isShowPass, setIsShowPass] = useState(false)
  const [isShowRePass, setIsShowRePass] = useState(false)
  const [error, setError] = useState({ userName: '', password: '', rePassword: '' })
  const [notify,setNotify]=useState("")
  const resetError = async () => {
    setError((prevState) => ({
        ...prevState,
        userName: '',
        password: '',
        rePassword: ''
      })
    )
  }
  const handleRegister = async () => {
    if (userName===''){
      setError((prevState)=>({
        ...prevState,
        userName:"Vui lòng nhập tài khoản",
        password:"",
        rePassword:""
      }));
      return false;
    }
    if (password===""){
      setError((prevState)=>({
        ...prevState,
        password:"Vui lòng nhập mật khẩu",
        userName:"",
        rePassword:""
      }));
      return false;
    }
    if (rePassword===""){
      setError((prevState)=>({
        ...prevState,
        password:"",
        userName:"",
        rePassword:"Vui lòng nhập lại mật khẩu"
      }));
      return false;
    }
    if (password!==rePassword){
     setNotify("Mật khẩu nhập lại không khớp")
      return false;
    }
    console.log(userName);
    console.log(password);
  }
  return (
    <div id='register-form' style={{ backgroundColor: '#FFFFFF' }}>
      <div className='header-login'>
        <div className='container d-flex justify-content-between align-content-center'>
          <div className='logo d-flex '>
            <Link to='/seller'>ShopKi</Link>
            <div className='nav d-flex align-items-center'>
              <h2>Đăng ký</h2>/<Link to='/seller/login'>Đăng nhập</Link>
            </div>
          </div>
          <div className='help'>
            <p>Cần trợ giúp?</p>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center'
           style={{ backgroundImage: `url("/assets/images/background-đăng kí nhà bán.png")`, padding: '16px 0' }}>
        <div className='banner-img'>
          <img src='/assets/images/register-shop.png' alt='banner' />
        </div>
        <div className='form-login'>
          <div className='title'>
            <p>Đăng ký</p>
          </div>
          <div className='form-input'>
            <div className='user-name'>
              <p>Nhập email hoặc số điên thoại:</p>
              <input type='text' placeholder='Nhập SĐT hoặc email' />
            </div>
            <div className='password position-relative'>
              <p>Nhập password:</p>
              <input type={isShowPass ? 'text' : 'password'} placeholder='Nhập password' />
              {isShowPass ? <div className='show-pass position-absolute' onClick={() => setIsShowPass(false)}><i
                  className='far fa-eye' /></div> :
                <div className='show-pass position-absolute' onClick={() => setIsShowPass(true)}><i
                  className='far fa-eye-slash' /></div>}
            </div>
            <div className='re-password position-relative'>
              <p>Nhập lại password:</p>
              <input type={isShowRePass ? 'text' : 'password'} placeholder='Nhập lại password' />
              {isShowRePass ? <div className='show-pass position-absolute' onClick={() => setIsShowRePass(false)}><i
                  className='far fa-eye' /></div> :
                <div className='show-pass position-absolute' onClick={() => setIsShowRePass(true)}><i
                  className='far fa-eye-slash' /></div>}
            </div>
          </div>
          <div className='footer-form'>
            <div>
              <button onClick={() => handleRegister()}>Đăng ký</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpSeller
