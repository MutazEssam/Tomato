import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/frontend_assets/assets';
const AppDownload = () => {
  return (
    <div className='appDownload' id='appDownload'>
        <p>For Better Experience Download <br/> Tomato App</p>
        <div className="app-download-platforms">
          <img src={assets.play_store} alt="Play Store Icon"/>
          <img src={assets.app_store} alt="App Store Icon" />
        </div>
    </div>
  )
}

export default AppDownload