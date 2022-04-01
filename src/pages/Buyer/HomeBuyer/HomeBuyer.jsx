import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import CategoryCarousel from './components/CategoryCarousel'
import ProductItem from 'pages/components/ProductItem'

import './homeBuyer.scss'
import request from '../../../services/request'
import Loader from 'components/Loader'

function HomeBuyer() {
  const location = useLocation()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      let res = await request.get('/api/product' + location.search)
      if (res) {
        setProduct(res)
      }
      await new Promise((resolve) => setTimeout(resolve, 500))
      setLoading(false)
    }
    getProduct()
  }, [location])

  return (
    <div className='h-home-buyer'>
      <div className='h-banner'>
        <div className='h-banner__left'>
          <img src='https://cf.shopee.vn/file/4432d25e163a938681690362507c39ad_xxhdpi' alt='' />
        </div>
        <div className='h-banner__right'>
          <img src='https://cf.shopee.vn/file/4432d25e163a938681690362507c39ad_xxhdpi' alt='' />
          <img src='https://cf.shopee.vn/file/4432d25e163a938681690362507c39ad_xxhdpi' alt='' />
        </div>
      </div>
      <CategoryCarousel />
      <div className='h-product'>
        <div className='h-product__header'>GỢI Ý HÔM NAY</div>

        {loading && (
          <div style={{ height: '30rem' }}>
            <Loader />
          </div>
        )}
        {!loading && (
          <>
            {product.length === 0 && (
              <div
                className='d-flex align-items-center justify-content-center'
                style={{ height: '30rem', fontSize: '1.5rem', color: '#aaa' }}
              >
                Không tìm thấy sản phẩm!!!
              </div>
            )}
            <div className='h-product__list'>
              {product?.map((value, index) => (
                <ProductItem key={index} product={value} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default HomeBuyer

const PRODUCTS = [
  {
    id: '1',
    name: 'Bán sỉ - Giày Swat PUBG, dã ngoại, đi phượt, giày motor, xe máy, bảo vệ cổ chân, mắt cá chân',
    img: 'https://cf.shopee.vn/file/570cf67f80a87870ebb065c330e344ca_tn',
    price: 300000,
    promoPrice: 250000,
    voucher: '10% giảm',
    historicalSold: '199',
  },
]
