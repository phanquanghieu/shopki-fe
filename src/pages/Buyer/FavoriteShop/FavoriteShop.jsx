import React, { useEffect } from 'react'
import './FavoriteShop.scss'
import { useState } from 'react'
import request from 'services/request'
import local from 'services/local'
const user = local.get('user')
function FavoriteShop() {
  
  useEffect(()=>{
        fetchFavorite()
  },[])
  const[favorites,setFavorite] = useState([])


  const fetchFavorite= async() =>{
    
    let res = await request.post('/api/favorite' , {id : user.id})
    setFavorite(res)
    console.log(res)
      }


  const deleteFavorite = (id) => {
    setFavorite(favorites.filter((favorite) => favorite.id !== id));
    let favorite = request.post('/api/favorite/delete',{id:id})
  }

  

  return(

   <div className="shop-body">
     <ul className="shop-list">
       {favorites.map((favorite) => (
         <li className="shop-item">
           <div className="shop-img">
             <img src={favorite.img_shop} alt={favorite.name_shop} className="img"/>
           </div>
           
            <div className="shop-info">
                <div className="shop-name">{favorite.name_shop}</div>
                <div className="shop-address">{favorite.description_shop}</div>
           </div>
           
           <div className="shop-thaotac">
                <i class="fas fa-heart-broken" onClick={() =>deleteFavorite(favorite.id)}></i>
           </div>
         </li>
       ))
       }
      
     </ul>
   </div>

 )

 
}

export default FavoriteShop

