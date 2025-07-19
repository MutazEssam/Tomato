import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/frontend_assets/assets'
const LoginPopup = ({setShowLogin}) => {

    const [currentState,setCurrentState] = useState("Login")

  return (
    <div className='Login-Popup'>
        <form className='Login-Popup-Container'>
            <div className="Login-Popup-Title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="Login-Popup-Inputs">
                {currentState==="Login"?<></>:  <input type='text' placeholder='Your Name' required/>}
                <input type='email' placeholder='Your E-mail' required/>
                <input type='password' placeholder='Enter Your Password' required/>
            </div>
            <button>{currentState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="Login-Popup-Condition">
                <input type='checkbox' required/>
                <p>I agree</p>
            </div>
{currentState === "Login" ? (
  <p>
    Create New Account?{" "}
    <span onClick={() => setCurrentState("Sign Up")}>Click Here!</span>
  </p>
) : (
  <p>
    Already Have An Account?{" "}
    <span onClick={() => setCurrentState("Login")}>Click Here!</span>
  </p>
)}
        </form>
    </div>
  )
}

export default LoginPopup