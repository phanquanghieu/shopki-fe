import { Route } from 'react-router-dom'
import SignUpSeller from '../../SignUpSeller'
import React from 'react'
import ShopInformation from './router/ShopInformation'
import CreateProduct from './router/CreateProduct'
import Dashboard from './router/Dashboard'
import ProductList from './router/ProductList'

function HomeRouter(){
  return(
    <>
      <Route
        exact path='/seller/home-center'
        render={(props) => <Dashboard {...props} />}
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
      <Route
      exact path='/seller/home-center/products/state=All'
      render={(props) => <ProductList {...props} />}
    />
    </>
  )

}
export default HomeRouter;