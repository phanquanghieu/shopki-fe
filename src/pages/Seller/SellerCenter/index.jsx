import Menu from './components/Menu'
import PageRight from './components/PageRight'
import { useState } from 'react'
import HomeRouter from './components/HomeRouter'
import ProfileShop from './components/ProfileShop'

function SellerCenter(props){
  const [choseMenu,setChoseMenu]=useState({
    parentTitle:"",
    childrenTitle:"",
    path:""})
  const handleOnClick=()=>{

  }
  const handleChangeMenu=(chose)=>{
    setChoseMenu(chose);
  }
  return(
    <div className="w-100 d-flex">
    <div style={{width:"20%"}}>
      <ProfileShop/>
      <Menu handleChangeMenu={(chose)=>handleChangeMenu(chose)}/>
    </div>
      <div style={{width:"80%"}}>
        <PageRight choseMenu={choseMenu}/>

      </div>

    </div>
  )
}
export default SellerCenter;