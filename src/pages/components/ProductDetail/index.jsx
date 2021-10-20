import { useEffect, useState } from 'react'
import Header from '../../Seller/HomeSeller/components/header'
import BuyerLayoutHeader from '../../../layouts/BuyerLayout/components/BuyerLayoutHeader'
import ProductInformation from './components/ProductInformation'
import request from '../../../services/request'

function ProductDetail(props) {
  useEffect(() => {
    console.log(props.match.params.id)

  })
  const [product,setProduct]=useState([]);
  const getProduct=async ()=>{
    let res = await request.get('/api/product');
    if (res){
      console.log(res)
      setProduct(res.products);
    }
  }
  return (
    <div>
      <BuyerLayoutHeader />
      <ProductInformation />
    </div>
  )
}

export default ProductDetail