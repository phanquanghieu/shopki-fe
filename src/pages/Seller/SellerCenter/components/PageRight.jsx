import HomeRouter from './HomeRouter'

function PageRight(props){
  return(
    <div>
      <div className="title-page">
       <div>
         {props.choseMenu.parentTitle}
       </div>
        <divv>
          {props.choseMenu.childrenTitle}
        </divv>
      </div>
      <div>
        <HomeRouter/>
      </div>
    </div>
  )
}
export default PageRight;