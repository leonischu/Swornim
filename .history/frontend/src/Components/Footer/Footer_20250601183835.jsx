import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.jpg'
import instagram_icon from '../Assets/instagram_icon.png'
import facebook_icon from '../Assets/facebook_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>

      {/* Logo and Navigation Links */}
      <div className='footer-top'>
        <div className="footer_logo">
          <img src={footer_logo} alt='logo' />
          <p>Swornim</p>
        </div>

        <ul className='footer-links'>
          <li>About Us</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className="footer-social-section">
        <div className="footer-social-icon">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className='footer-icons-container'
          >
            <img src={instagram_icon} alt="Instagram" />
            <span>Instagram</span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className='footer-icons-container'
          >
            <img src={facebook_icon} alt="Facebook" />
            <span>Facebook</span>
          </a>
        </div>
      </div>

      {/* Contact Info */}
      <div className="footer-co
