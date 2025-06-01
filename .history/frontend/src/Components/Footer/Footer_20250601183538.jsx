import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.jpg'
import instagram_icon from '../Assets/instagram_icon.png'
import facebook_icon from '../Assets/facebook_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>

      {/* Top Section with Logo, Links, Newsletter */}
      <div className='footer-top'>

        {/* Logo */}
        <div className="footer_logo">
          <img src={footer_logo} alt='logo' />
          <p>Swornim</p>
        </div>

        {/* Navigation Links */}
        <ul className='footer-links'>
          <li>About</li>
          <li>Contact</li>
          <li>Follow us</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>FAQ</li>
        </ul>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <p>Subscribe to our newsletter</p>
          <form onSubmit={(e) => e.preventDefault()} className="newsletter-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>

      {/* Bottom Section with Social Icons and Contact Info */}
      <div className="footer-bottom">

        {/* Social Icons */}
        <div className='footer-social-icon'>
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

        {/* Contact Info in one line */}
        <div className="footer-contact-info-inline">
          <p>Email: info@swornim.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Swornim Street, City, Country</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - All Rights Reserved.</p>
      </div>

    </div>
  )
}
