// import NoticeBuyer from 'pages/Buyer/NoticeBuyer/NoticeBuyer'

import React from 'react'
import voucherBuyer from 'pages/Buyer/Voucher/VoucherBuyer'
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
    isProtected: true,
  },
  {
    path: '/cart',
    exact: true,
    component: Cart,
    isProtected: true,
  },
 
  {
    path: '/buyer',
    component: BuyerPage,
    isProtected: true,
    subRoutes: [
      {
        path: '/buyer/account/profile',
        exact: true,
        component: ProfileBuyer,
        isProtected: true ,
      },
      {
        path: '/buyer/account/address',
        exact: true,
        component: AddressBuyer,
        isProtected: true,
      },
      {
        path: '/buyer/account/password',
        exact: true,
        component: PasswordBuyer,
        isProtected: true,
      },
      {
        path: '/buyer/notice',
        exact: true,
        component: NoticeBuyer,
        isProtected: true,
      },
      // {
      //   path: '/buyer/voucher',
      //   exact: true,
      //   component: VsoucherBuyer,
      //   isProtected: true,
      // }
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
