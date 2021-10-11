import { useEffect } from 'react'

function ProductDetail(props){
  useEffect(()=>{
    console.log(props.match.params.id)
  })
  return(
    <div>
day la trang detail
    </div>
  )
}
export default ProductDetail;