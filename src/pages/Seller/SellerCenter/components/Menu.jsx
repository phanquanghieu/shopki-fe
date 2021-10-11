import '../style/menuStyle.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Menu(props){
  const menuData=[
    {
      id: 0,
      sort: 0,
      title: 'Dashboard',
      path: '/seller/home-center',
      icon: <i className="fa fa-tachometer"/>
    },
    {
      id: 1,
      sort: 1,
      title: 'Quản lý cửa hàng',
      icon: <i className="fa fa-shopping-cart" aria-hidden="true"/>,
      children: [
        {
          id: 0,
          sort: 1,
          name: 'Quản lý thông tin',
          path: '/seller/home-center/shop'
        },
        {
          id: 1,
          sort: 2,
          name: 'Quản lý địa chỉ',
          path: '/seller/home-center/shop/address'
        },
        {
          id: 2,
          sort: 3,
          name: 'Cài đặt vận chuyển',
          path: '/seller/home-center/profile/setting-shipping'
        },
        {
          id: 3,
          sort: 5,
          name: 'Quản lý thẻ',
          path: '/seller/home-center/shop/card'
        },
        {
          id: 4,
          sort: 6,
          name: 'Đánh giá shop',
          path: '/seller/home-center/shop/review?page=0&size=5'
        },
        {
          id: 5,
          sort: 7,
          name: 'Hỏi đáp',
          path: '/seller/home-center/shop/qa/all'
        },
        {
          id: 6,
          sort: 8,
          name: 'Thông báo',
          path: '/seller/home-center/notifications/type=all'
        },
        {
          id: 7,
          sort: 0,
          name: 'Quản lý mẫu store',
          path: '/seller/home-center/shop/official-store'
        },
        {
          id: 8,
          sort: 4,
          name: 'Cài đặt khu vực vận chuyển',
          path: '/seller/home-center/shop/shipping?type=all&page=0'
        },
      ]
    },
    {
      id: 2,
      sort: 2,
      title: 'Đơn hàng',
      icon: <i className="fas fa-file-alt"/>,
      children: [
        {
          id: 0,
          sort: 0,
          name: 'Quản lý đơn hàng',
          path: '/seller/home-center/orders/state=all'
        },
        {
          id: 1,
          sort: 1,
          name: 'Đơn hàng hoàn trả',
          path: '/seller/home-center/order-return/state=request'
        }
      ]
    },
    {
      id: 3,
      sort: 3,
      title: 'Sản phẩm',
      icon: <i className="fa fa-shopping-bag" aria-hidden="true"/>,
      children: [
        {
          id: 0,
          sort: 0,
          name: 'Danh sách sản phẩm',
          path: '/seller/home-center/products/state=ALL',
        },
        {
          id: 1,
          sort: 1,
          name: 'Danh sách đấu giá',
          path: '/seller/home-center/auctions?page=0&size=10',
        },
        {
          id: 2,
          sort: 2,
          name: 'Đăng bán sản phẩm',
          path: '/seller/home-center/product/add',
        },
        {
          id: 3,
          sort: 3,
          name: 'Đăng đấu giá',
          path: '/seller/home-center/auction/add',
        }
      ]
    },
    {
      id: 4,
      sort: 4,
      title: 'Doanh thu',
      icon: <i className="fa fa-money" aria-hidden="true"/>,
      children: [
        {
          id: 0,
          sort: 0,
          name: 'Sao kê doanh thu',
          path: '/seller/home-center/revenue'
        },
        {
          id: 1,
          sort: 1,
          name: 'Lịch sử giao dịch',
          path: '/seller/home-center/revenue/history/type=all'
        },
      ]
    },
    {
      id: 5,
      sort: 5,
      title: 'Thống kê',
      icon: <i className="fa fa-line-chart"/>,
      children: [
        {
          id: 0,
          sort: 0,
          name: 'Hiệu quả cửa hàng',
          path: ``
        },
        {
          id: 1,
          sort: 1,
          name: 'Hiệu quả sản phẩm',
          path: ``
        }
      ]
    },
    {
      id: 6,
      sort: 6,
      title: 'Khuyến mại',
      icon: <i className="fas fa-ad"/>,
      children: [
        {
          id: 0,
          sort: 0,
          name: 'Mã giảm giá',
          path: '/seller/home-center/coupon?type=all&page=0'
        },
        {
          id: 1,
          sort: 1,
          name: 'Chương trình Chozoi',
          path: '/seller/home-center/campaign?page=0&size=5'
        }
      ]
    }
  ]
  const [menuActive,setMenuActive]=useState([0,0])
  const handleChangeMenu=async (parent,children)=>{
    let chose={};
    if (parent.path){
      chose= {
        parentTitle:parent.title,
        childrenTitle:children.name,
        path:parent.path
      }
    }else {
       chose= {
        parentTitle:parent.title,
        childrenTitle:children.name,
        path:children.path
      }
    }

    props.handleChangeMenu(chose);
  }
  return(
    <div id="menu-center">
      <ul>
        {menuData.map((value,i)=>{
          if (!value.hidden){
            return(
              <li key={i}
                  className={`${menuActive[0] === value.id ? "active-sub active" : ""}`}>
                <Link to={value.path ? value.path : '#'}
                      onClick={() => setMenuActive ([value.id, -1]) }>
                  {value.icon}
                  <span className="menu-title">{value.title}</span>
                  {value.children && <i className="arrow"/>}
                </Link>
                {value.children &&
                <ul className={`collapse ${menuActive[0] === value.id ? "in h-100" : ""}`}>
                  {value.children.map((children, index1) => {
                    let render = !children.hidden;

                    return render && <li key={index1}
                                         className={(menuActive[0] === value.id) && (menuActive[1] === children.id) ? "active-link" : ""}>
                      <Link to={children.path} className={"children"}  onClick={() => {handleChangeMenu(value,children)}}>{children.name}</Link>
                    </li>
                  })}
                </ul>}
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}
export default Menu;