import { useState } from 'react'
import { createProduct } from '../../../../../api/product/Product'
import helper from '../../../../../services/helper'
import local from '../../../../../services/local'
import '../../style/createProduct.scss'

function CreateProduct(props) {
  const [nameProduct, setNameProduct] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const handleCreateProduct = async () => {

    if (nameProduct === '') {
      helper.toast('danger', 'nhập tên sản phẩm')
      return false
    }
    if (price === 0) {
      helper.toast('danger', 'Nhập giá')
      return false
    }
    if (imageUrl===''){
      helper.toast('danger', 'Nhập link ảnh')
      return false
    }
    let shopId = ''
    if (local.get('user')) {
      shopId = local.get('user').shop_id
    }
    const result = await createProduct(shopId, nameProduct, price, description, imageUrl)
    if (result?.error) return helper.toast('danger', 'Create error')

    helper.toast('success', 'Create success')
    // resetValue()
  }
  const resetValue = () => {
    setNameProduct('')
    setImageUrl('')
    setPrice(0)
    setDescription('')
  }
  const inputPrice = (e) => {
    let value = e.currentTarget.value
    value = value.replace(/[^0-9]/g, '')
    value = parseInt(value)
    if (!isNaN(value)) {
      setPrice(value)
    } else setPrice(0)
  }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <div id='create-product'>
        <div className='form-create-product'>
          <h2>Thông tin cơ bản</h2>
          <div className='name-product'>
            <p className='title'>Tên sản phẩm<span>*</span></p>
            <input placeholder='nhập tên sản phẩm' value={nameProduct}
                   onChange={(e) => setNameProduct(e.currentTarget.value)} />
          </div>
          <div className='form-group'>
            <p className='title'>Tình trạng sản phẩm <span>*</span></p>
            <div className='condition'>
              <div>
                <input id='infomation-radio-1' className='magic-radio' type='radio'
                       value='NEW'
                       name='inline-form-radio-condition'
                  // onChange={e => this.props.EmitInputOnChange(e, "condition")}
                />
                <label
                  htmlFor='infomation-radio-1'>Mới</label>
              </div>
              <div className='mt-2'>
                <input id='infomation-radio-2'
                       value='USED'
                       className='magic-radio' type='radio'
                       name='inline-form-radio-condition'
                  // onChange={e => this.props.EmitInputOnChange(e, "condition")}
                /><label
                htmlFor='infomation-radio-2'>Đã sử dụng</label>
              </div>
            </div>
          </div>
          <div className='characteristics'>
            <p className='title'>Đặc điểm nổi bật</p>
            <textarea onChange={(e) => setDescription(e.currentTarget.value)} />
          </div>
          <div className='image'>
            <p className='title'>Ảnh sản phẩm</p>
            <input placeholder={'Nhập url ảnh sản phẩm'} value={imageUrl}
                   onChange={(e) => setImageUrl(e.currentTarget.value)} />
          </div>
          <div className='price'>
            <p className='title'>Nhập giá sản phẩm<span>*</span></p>
            <input placeholder='nhập giá sản phẩm' value={price} onChange={(e) => inputPrice(e)} />
          </div>
        </div>
        <div className='btn-create d-flex justify-content-center' onClick={() => handleCreateProduct()}>
          <button>Tạo sản phẩm</button>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct
