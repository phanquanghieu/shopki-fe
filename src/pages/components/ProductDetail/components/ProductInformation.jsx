import '../style/productInformationStyle.scss'

function ProductInformation(props){
  const handleAddToCart=(id)=>{
    console.log(id)
  }
  return(
    <div id="product-detail" className="container d-flex">
      <div className="image-product">

      </div>
      <div className="product-information">
        <div className="name-product">
          <h1>{props.product.name}</h1>
        </div>
        <div className="price">
          <p>{props.product.price} đ</p>
        </div>
        <div className="add-to-cart">
          <div className="position-absolute add-to-cart" onClick={()=>handleAddToCart(props.product.id)}>
            <i className="fas fa-cart-plus"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductInformation;