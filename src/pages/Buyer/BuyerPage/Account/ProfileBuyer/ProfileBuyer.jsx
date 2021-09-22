import React, { useState } from 'react'
import './style.scss'

function ProfileBuyer() {
  const [isChangeEmail, setIsChangeEmail] = useState(false)

  const handleChangeEmail = async () => {
    setIsChangeEmail(true)
  }
  const handleSaveEmail = () => {
    setIsChangeEmail(false)
  }
  return (
    <div className='form'>
      <div className='content'>
        {/* ho so cua toi */}
        <div className='profile-name'>
          <h5>Hồ Sơ Của Tôi</h5>
          <p className='profile-p'>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
        </div>

        {/* noi dung */}
        <div className='profile-content'>
          {/* label input */}
          <div className='profile-detail'>
            {/* ten dang nhap */}
            <div className='profile-label-text'>
              <label htmlFor='' className='profile-label'>
                Tên Đăng Nhập
              </label>
              <p className='profile-text'>thuthu021100</p>
            </div>
            {/* Ten */}
            <div className='profile-label-input'>
              <label htmlFor='' className='profile-label'>
                Tên
              </label>
              <input type='text' className='profile-input' placeholder='Thư Thư' />
            </div>

            {/* email */}
            <div className={`profile-label-email ${isChangeEmail}`}>
              <label htmlFor='' className='profile-label'>
                Email
              </label>
              {isChangeEmail ? (
                <div>
                  <input placeholder='nhap email' />
                  <span href='' className='profile-change' onClick={() => handleSaveEmail()}>
                    Lưu
                  </span>
                </div>
              ) : (
                <div>
                  <p className='profile-input'>th**********@gmail.com</p>
                  <span href='' className='profile-change' onClick={() => handleChangeEmail()}>
                    Thay đổi
                  </span>
                </div>
              )}
            </div>

            {/* SĐT */}
            <div className='profile-label-email'>
              <label htmlFor='' className='profile-label'>
                Số Điện Thoại
              </label>
              <p className='profile-input'>********98</p>
              <a href='' className='profile-change'>
                Thay đổi
              </a>
            </div>

            {/* Tên shop */}
            <div className='profile-label-input'>
              <label htmlFor='' className='profile-label'>
                Tên shop
              </label>
              <input type='text' className='profile-input' placeholder='thuthu021100' />
            </div>

            {/* giới tính */}
            <div className='profile-label-input'>
              <label htmlFor='' className='profile-label'>
                Giới tính
              </label>
              <form className='profile-gender'>
                <input className='gender' name='gioitinh' type='radio' value='Nam' />
                Nam
                <input className='gender' name='gioitinh' type='radio' value='Nữ' />
                Nữ
                <input className='gender' name='gioitinh' type='radio' value='Khác' />
                Khác
              </form>
            </div>

            {/* ngày sinh */}
            <div className='profile-birthday'>
              <label htmlFor='' className='profile-label'>
                Ngày sinh
              </label>
              <input type='date' className='day' placeholder='' />
            </div>

            <button type='button' class='btn btn-success'>
              Lưu
            </button>
          </div>
          {/* anh */}
          <div className='profile-img'></div>
        </div>
      </div>
    </div>
  )
}

export default ProfileBuyer
