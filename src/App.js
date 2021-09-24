import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'libs/Toast/toast.scss'
import 'scss/style.scss'

import Loader from 'components/Loader'
import BuyerLayout from 'layouts/BuyerLayout'
import SellerLayout from 'layouts/SellerLayout'
import LoginBuyer from 'pages/Buyer/LoginBuyer'
import SignUpBuyer from 'pages/Buyer/SignUpBuyer'
import LoginSeller from 'pages/Seller/LoginSeller'
import SignUpSeller from 'pages/Seller/SignUpSeller'
import BuyerLayoutFooter from './common/footer/BuyerLayoutFooter'
import SellerCenter from './pages/Seller/SellerCenter'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route
              path='/login'
              exact
              name='Buyer Login '
              render={(props) => <LoginBuyer {...props} />}
            />
            <Route
              path='/signup'
              exact
              name='Buyer Signup '
              render={(props) => <SignUpBuyer {...props} />}
            />
            <Route
              path='/seller/login'
              exact
              name='Seller Login '
              render={(props) => <LoginSeller {...props} />}
            />
            <Route
               path='/seller/register'
              exact
              name='Seller Login '
              render={(props) => <SignUpSeller {...props} />}
            />
            <Route
              exact path='/seller'
              name='Seller Layout'
              render={(props) => <SellerLayout {...props} />}
            />
            <Route
              exact path='/seller/home-center'
              name='Seller Layout'
              render={(props) => <SellerCenter {...props} />}
            />
            <Route path='/' name='Buyer Layout' render={(props) => <BuyerLayout {...props} />} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}
export default App
