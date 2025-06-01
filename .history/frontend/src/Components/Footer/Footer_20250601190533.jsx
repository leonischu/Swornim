import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo.jpg';
import instagram_icon from '../Assets/instagram_icon.png';
import facebook_icon from '../Assets/facebook_icon.png';

export const Footer = () => {
  return (
    <div className='footer'>
      {/* Top Section: Logo and Description */}
      <div className="footer-top">
        <div className="footer_logo">
          <img src={footer_logo} alt='logo' />
          <p>Swornim</p>
          <p className="footer-description">
            We specialize in professional event management, delivering exceptional experiences for all occasions.
          </p>
        </div>
      </div>

      {/* Middle Section: Navigation Links */}
      <div className="footer-middle">
        <ul className='footer-links'>
          <li>About Us</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>

      {/* Bottom Section: Social Icons and Copyright */}
      <div className="footer-bottom">
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
        <hr />
        <p>Copyright © 2025 - All Rights Reserved.</p>
      </div>
    </div>
  );
};
