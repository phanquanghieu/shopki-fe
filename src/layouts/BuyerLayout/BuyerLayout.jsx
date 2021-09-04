import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom'

import ProtectedRoute from 'components/ProtectedRoute'
import BuyerLayoutHeader from './components/BuyerLayoutHeader'
import BuyerLayoutFooter from './components/BuyerLayoutFooter'
import routes from 'routes'

import './buyerLayout.scss'

function BuyerLayout() {
  return (
    <>
      <BuyerLayoutHeader />
      <div className='h-main'>
        <div className='h-main-container'>
          <Suspense>
            <Switch>
              {routes.buyer.map((route, index) => (
                <ProtectedRoute key={index} redirectUrl={'/login'} {...route} />
              ))}
            </Switch>
          </Suspense>
        </div>
      </div>
      <BuyerLayoutFooter />
    </>
  )
}

export default BuyerLayout
