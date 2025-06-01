import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo.jpg';
import instagram_icon from '../Assets/instagram_icon.png';
import facebook_icon from '../Assets/facebook_icon.png';

export const Footer = () => {
  return (
    <div className="footer">
      {/* Left Section: Logo and Description */}
      <div className="footer-left">
        <img src={footer_logo} alt="Logo" className="footer-logo" />
        <p className="footer-description">
          Swornim specializes in professional event management, delivering exceptional experiences for every occasion.
        </p>
      </div>

      {/* Middle Section: Navigation Links */}
      <div className="footer-middle">
        <ul className="footer-links">
          <li>About Us</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>

      {/* Right Section: Social Links */}
      <div className="footer-right">
        <div className="footer-social-section">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icons-container"
          >
            <img src={instagram_icon} alt="Instagram" />
            <span>Instagram</span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icons-container"
          >
            <img src={facebook_icon} alt="Facebook" />
            <span>Facebook</span>
          </a>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="footer-bottom">
        <hr />
        <p>Copyright © 2025 - All Rights Reserved.</p>
      </div>
    </div>
  );
};
