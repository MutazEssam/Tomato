import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae necessitatibus temporibus excepturi accusantium, reiciendis nesciunt harum aspernatur odio suscipit asperiores consequatur tempore vero, iste perferendis assumenda obcaecati debitis eum? Odit?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                     <img src={assets.twitter_icon} alt="" />
                      <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="foot-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery </li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+999999999</li>
                    <li>Mutaz.essam999@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2025 @ Tomato.com </p>
    </div>
  )
}

export default Footer