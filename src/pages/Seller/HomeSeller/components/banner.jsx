import Slider from "react-slick";
import '../homeStyle/banner.scss'
import { useRef } from 'react'
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex",justifyContent:"center",alignItems:"center",
        background: "#00b14f",position:"absolute",color:"#FFFFFF",
        top:"50%",left:"230px",
        width:"40px",height:"40px",zIndex:100,borderRadius:'50%'}}
      onClick={onClick}
    ><i className="fas fa-angle-left"/></div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex",justifyContent:"center",alignItems:"center",
        background: "#00b14f",
        position:"absolute",color:"#FFFFFF",
        top:"50%",
        right:"230px",
      width:"40px",height:"40px",zIndex:100,borderRadius:'50%'}}
      onClick={onClick}
    ><i className="fas fa-angle-right"/></div>
  );
}


function Banner(props){
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return(
    <div id="banner-seller">
       <div className="w-100 overflow-hidden position-relative">
         <Slider {...settings}>
           <div className="items d-flex justify-content-center">
             <img src="/assets/images/banner-head.jpg"/>
           </div>
           <div className="items d-flex justify-content-center">
             <img src="/assets/images/banner-head2.jpg"/>
           </div>
           <div className="items d-flex justify-content-center">
             <img src="/assets/images/banner-head3.jpg"/>
           </div>
         </Slider>
      </div>
    </div>
  )
}

export default Banner;