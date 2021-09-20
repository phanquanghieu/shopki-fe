// import NoticeBuyer from 'pages/Buyer/NoticeBuyer/NoticeBuyer'
import React from 'react'

const HomeBuyer = React.lazy(() => import('pages/Buyer/HomeBuyer'))
const Cart = React.lazy(() => import('pages/Buyer/Cart'))
const BuyerPage = React.lazy(() => import('pages/Buyer/BuyerPage'))
const ProfileBuyer = React.lazy(() => import('pages/Buyer/BuyerPage/Account/ProfileBuyer'))
const AddressBuyer = React.lazy(() => import('pages/Buyer/BuyerPage/Account/AddressBuyer'))
const PasswordBuyer = React.lazy(() => import('pages/Buyer/BuyerPage/Account/PasswordBuyer'))
const HomeSeller = React.lazy(() => import('pages/Seller/HomeSeller'))
const NoticeBuyer = React.lazy(() => import('pages/Buyer/NoticeBuyer'))
let routes = {}

routes.buyer = [
  {
    path: '/',
    exact: true,
    component: HomeBuyer,
    isProtected: false,
  },
  {
    path: '/cart',
    exact: true,
    component: Cart,
    isProtected: false,
  },
 
  {
    path: '/buyer',
    component: BuyerPage,
    isProtected: false,
    subRoutes: [
      {
        path: '/buyer/account/profile',
        exact: true,
        component: ProfileBuyer,
        isProtected: false,
      },
      {
        path: '/buyer/account/address',
        exact: true,
        component: AddressBuyer,
        isProtected: false,
      },
      {
        path: '/buyer/account/password',
        exact: true,
        component: PasswordBuyer,
        isProtected: false,
      },
      {
        path: '/buyer/notice',
        exact: true,
        component: NoticeBuyer,
        isProtected: false,
      },
    ],
  },
]

routes.seller = [
  {
    path: '/seller',
    exact: true,
    component: HomeSeller,
    isProtected: true,
  },
]

export default routes
