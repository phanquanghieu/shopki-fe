import './loader.scss'
function Loader() {
  return (
    <div className='h-loader-container'>
      <div class='h-loader'>
        <div class='inner one'></div>
        <div class='inner two'></div>
        <div class='inner three'></div>
      </div>
      <div className='h-loader-text'>Loading</div>
    </div>
  )
}

export default Loader
