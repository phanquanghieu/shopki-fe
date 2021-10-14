import '../style/profileShopStyle.scss'
function ProfileShop(){
  return(
    <div id="profile-shop" className="d-flex flex-column justify-content-center align-items-center">
      <div className="image-shop d-flex justify-content-center align-items-center">
        <i className="fas fa-user"/>
      </div>
      <div className="name w-100 text-center">
        <h2>Chinh</h2>
        <div className="rank">
          <p>Shop chua co rank</p>
        </div>
      </div>
    </div>
  )
}
export default ProfileShop;