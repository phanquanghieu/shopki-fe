import { useEffect, useState } from 'react'
import BuyerLayoutHeader from '../../../layouts/BuyerLayout/components/BuyerLayoutHeader'
import ProductInformation from './components/ProductInformation'
import request from '../../../services/request'

function ProductDetail(props) {
  useEffect(async () => {
   if (product.length===0){
     await getProduct();
   }

  },[])
  const [product,setProduct]=useState([]);
  const getProduct=async ()=>{
    let res = await request.post('/api/product/getById',{
      id:props.match.params.id
    });
    if (res){
      setProduct(res.product);
    }
  }
  return (
    <div>
      <BuyerLayoutHeader />
      <ProductInformation product={product}/>
    </div>
  )
}

export default ProductDetail