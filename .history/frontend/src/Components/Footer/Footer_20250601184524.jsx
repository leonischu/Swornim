import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo.jpg';
import instagram_icon from '../Assets/instagram_icon.png';
import facebook_icon from '../Assets/facebook_icon.png';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src={footer_logo} alt="Logo" className="footer-logo-large" />
      </div>

      <div className="footer-middle">
        <h2 className="footer-heading">About Us</h2>
        <p>
          Swornim is a forward-thinking company dedicated to creating exceptional
          experiences and solutions. Our mission is to innovate and inspire through
          quality and service.
        </p>

        <h2 className="footer-heading">Contact</h2>
        <p>Email: info@swornim.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Swornim Street, City, Country</p>
      </div>

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

      <div className="footer-bottom">
        <hr />
        <p>Copyright © 2025 - All Rights Reserved.</p>
      </div>
    </div>
  );
};
