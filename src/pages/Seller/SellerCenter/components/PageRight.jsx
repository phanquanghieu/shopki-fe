import HomeRouter from './HomeRouter'
import '../style/pageRight.scss'
function PageRight(props){
  return(
    <div id="page-right">
      <div className="title-page">
       <div className="parent">
        <p> {props.choseMenu.parentTitle?props.choseMenu.parentTitle:"Tổng quan cửa hàng"}</p>
       </div>
        <div className="children d-flex align-items-center">
          <i className="fas fa-chevron-right"/>
          {props.choseMenu.childrenTitle}
        </div>
      </div>
      <div>
        <HomeRouter/>
      </div>
    </div>
  )
}
export default PageRight;