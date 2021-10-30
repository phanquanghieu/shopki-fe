import React, { useState, useEffect } from 'react'

import { useHistory } from 'react-router-dom'
import helper from 'services/helper'
import local from 'services/local'
import request from 'services/request'
import './style.scss'
const user = local.get('user')
function ProfileBuyer() {
  const history = useHistory()
  const [file, setFile] = useState(null)
  const [profile, setProfile] = useState({})
  useEffect(() => {
    const fetchProfile = async () => {
      let res = await request.post('/api/user/profile', { id: user.id })
      setProfile(res || {})
    }
    fetchProfile()
  }, [])

  const handleChangeProfile = (key, value) => {
    let profileNew = { ...profile }
    profileNew[key] = value
    setProfile(profileNew)
  }

  const handleClickSave = async () => {
    if (!file) return
    let res = await request.post('/api/user/profile/update', { id: user.id, img: file })

    local.set('user', res)
    setFile('')
    history.push('/buyer')
    return helper.toast('success', 'Successfully updated')
    // let res = await request.post('/user/update', {
    //   id: user.id,
    //   name: profile.name,
    //   gender: profile.gender,
    //   birthday: profile.birthday,
    // })
    // if (res?.error == 0) {
    //   helper.toast('success', 'change profile success')
    // } else {
    //   helper.toast('danger', 'error')
    // }
  }

  const handleUploadFile = async (files) => {
    let formData = new FormData()
    formData.append('file', files[0])

    let res = await fetch(process.env.REACT_APP_BE_URL + '/api/upload', {
      method: 'POST',
      body: formData,
    })
    res = await res.json()
    setFile(res.msg)
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
                Ảnh đại điện
              </label>
              <input
                type='file'
                className='profile-input'
                onChange={(e) => handleUploadFile(e.target.files)}
              />
            </div>
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
              <input
                type='text'
                className='profile-input'
                placeholder='Thư Thư'
                value={profile?.name || ''}
                onChange={(e) => handleChangeProfile('name', e.target.value)}
              />
            </div>

            {/* email */}
            <div className='profile-label-email'>
              <label htmlFor='' className='profile-label'>
                Email
              </label>
              <p className='profile-input'>{profile.email}</p>
            </div>

            {/* SĐT */}
            <div className='profile-label-email'>
              <label htmlFor='' className='profile-label'>
                Số Điện Thoại
              </label>
              <p className='profile-input'>{profile.phone}</p>
            </div>

            {/* giới tính */}
            <div className='profile-label-input'>
              <label htmlFor='' className='profile-label'>
                Giới tính
              </label>
              <form className='profile-gender'>
                <input
                  checked={profile.gender === 'nam' ? true : false}
                  className='gender'
                  name='gioitinh'
                  type='radio'
                  value='Nam'
                  onChange={(e) => handleChangeProfile('gender', 'nam')}
                />
                Nam
                <input
                  checked={profile.gender === 'nu' ? true : false}
                  className='gender'
                  name='gioitinh'
                  type='radio'
                  value='Nữ'
                  onChange={(e) => handleChangeProfile('gender', 'nu')}
                />
                Nữ
                <input
                  checked={profile.gender === 'khac' ? true : false}
                  className='gender'
                  name='gioitinh'
                  type='radio'
                  value='Khác'
                  onChange={(e) => handleChangeProfile('gender', 'khac')}
                />
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

            <button type='button' class='btn btn-success' onClick={handleClickSave}>
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
