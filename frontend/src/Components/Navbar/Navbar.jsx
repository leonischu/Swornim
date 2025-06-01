import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.jpg'
import { Link } from 'react-router-dom';
export const Navbar = () => {
    const [menu, setMenu] = useState(""); // State for active menu item

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=""/>
        <p>Swornim</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("book venue")}}><Link style={{ textDecoration: 'none' }}to='/'>Book Venue</Link>{menu==="book venue"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("hire")}}><Link style={{ textDecoration: 'none' }}to='/hire'> Hire</Link>{menu==="hire"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("live events")}}><Link style={{ textDecoration: 'none' }} to='/liveevents'>Live Events</Link>{menu==="live events"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("contact")}}><Link style={{ textDecoration: 'none' }}  to='/contact'>Contact</Link >{menu==="contact"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        
      </div>
    </div>
  )
}
