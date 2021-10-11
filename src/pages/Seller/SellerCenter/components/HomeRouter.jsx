import { Route } from 'react-router-dom'
import SignUpSeller from '../../SignUpSeller'
import React from 'react'
import ShopInformation from './router/ShopInformation'
import CreateProduct from './router/CreateProduct'

function HomeRouter(){
  return(
    <>
      <Route
        exact path='/seller/home-center'
        render={(props) => <ShopInformation {...props} />}
      />
      <Route
        exact path='/seller/home-center/shop/address'
        render={(props) => <ShopInformation {...props} />}
      />
      <Route
        exact path='/seller/home-center/shop'
        render={(props) => <ShopInformation {...props} />}
      />
      <Route
      exact path='/seller/home-center/product/add'
      render={(props) => <CreateProduct {...props} />}
    />
    </>
  )

}
export default HomeRouter;