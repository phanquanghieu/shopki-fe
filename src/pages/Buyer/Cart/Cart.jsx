import React, { useEffect } from 'react'
import './cart.scss'
import { useState } from 'react'
function Cart() {
  const [carts, setCarts] = useState(
    [
      {
        id: 1,
        nameshop: 'VTTH',
        img: "https://cf.shopee.vn/file/6760bf2461f3f8a43aaa7089e0f5eaf5_tn",
        namepro: 'sp duong da',
        dongia: 93000,
        soluong: 1,
      },
      {
        id: 2,
        nameshop: 'VTTH1',
        img: "https://cf.shopee.vn/file/6760bf2461f3f8a43aaa7089e0f5eaf5_tn",
        namepro: 'sp duong da1',
        dongia: 930001,
        soluong: 1,


      }
    ]
  )
 
   const counter = (type,id) => {
     if(type==="add"){
       carts.map((value,i)=>{
         if(value.id===id){
        //  setCarts((prevState)=>({
        //    ...prevState,
        //    soluong:value.soluong+1
        //  }
        //  ))
         }
       })
     }else{
console.log("sub");
     }
   } 


  const deleteCart = (id) => {
    setCarts(carts.filter((Cart) => Cart.id !== id));
  }
  return <div className="cart_buyer">
    <div className="cart__header">
      <div className="cart__header-item1">Sản phẩm</div>
      <div className="cart__header-item2">Đơn Giá</div>
      <div className="cart__header-item3">Số Lượng</div>
      <div className="cart__header-item4">Số Tiền</div>
      <div className="cart__header-item5">Thao Tac</div>

    </div>

    {
      carts.map((Cart) => {

        const { id, nameshop, img, namepro, dongia, soluong } = Cart;
        // var giatien = ({dongia,soluong}) => {
        //   return dongia*soluong ;
        // }
        var a = parseInt(dongia);
        var b = parseInt(soluong);
        var giatien = () => {
          const num = Math.floor(a * b);
          return num;

        }

        return (
          <div className="cart__body">
            <ul className="cart__list">
              <li className="cart__item">
                <div className="cart__item-header">
                  <p className="cart__item-tenshop">
                    {nameshop}
                  </p>
                </div>
                <div className="cart__item-body">
                  <div className="cart__item-info">
                    <img src={img} alt={namepro} className="cart__item-img" />
                    <p className="Cart__item-name">{nameshop}</p>
                  </div>
                  <div className="cart__item-dongia">{dongia}</div>
                  <div className="cart__item-soluong">
                    <button className="cart__item-btn-sub " onClick={()=>counter("sub",id)}>
                    <i class="fas fa-minus"></i>
                    </button>
                    <p className="cart__item-soluong-text">{soluong}</p>
                    <button className="cart__item-btn-add" onClick={()=>counter("add",id)}>
                      
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                  <div className="cart__item-sotien">
                    {
                      giatien()
                    }
                  </div>
                  <div className="cart__item-thaotac">
                    <button type="button" onClick={
                      () => deleteCart(Cart.id)
                    }
                      className="cart__item-btn">Xóa</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        )
      })
    }



    {/* <div className="cart__body">
      <ul className="cart__list">
        <li className="cart__item">
          <div className="cart__item-header">
              <p className="cart__item-tenshop">
              Unilever International
              </p>

          </div>
          <div className="cart__item-body">
            <div className="cart__item-info">
              <img src="https://cf.shopee.vn/file/6760bf2461f3f8a43aaa7089e0f5eaf5_tn" alt="" className="cart__item-img" />
              <p className="Cart__item-name">Sáp dưỡng ẩm Vaseline 100ml</p>
            </div>
            <div className="cart__item-dongia">93.0000</div>
            <div className="cart__item-soluong">1</div>
            <div className="cart__item-sotien">93.000</div>
            <div className="cart__item-thaotac">
              <button type= "button" className="cart__item-btn">Xóa</button>
            </div>
          </div>
        </li>
      </ul>
    </div> */}
  </div>
}

export default Cart

