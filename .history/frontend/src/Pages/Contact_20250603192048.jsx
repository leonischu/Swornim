import React from "react";
import "./CSS/Contact.css";

export function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-description">
        We're here to assist you. Feel free to connect with us!
      </p>
      <div className="contact-content">
        {/* Contact Information Section */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> Kathmandu, Nepal</p>
          <p><strong>Phone:</strong> +977 9860125698</p>
          <p><strong>Email:</strong> info@swornim.com</p>
          <p><strong>Business Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM</p>
        </div>

        {/* Form Section */}
        <div className="contact-form">
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="contact-input"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="contact-input"
            />
            <textarea
              placeholder="Your Message"
              className="contact-textarea"
            ></textarea>
            <button type="submit" className="contact-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="wow-section">
        <h2 className="wow-title">What Makes Us Special?</h2>
        <div className="carousel">
          <div className="carousel-item">
            <h3>🚀 Innovation</h3>
            <p>We bring unique ideas and creative solutions to match your vision and requirements.</p>
          </div>
          <div className="carousel-item">
            <h3>💼 Professionalism</h3>
            <p>Our team is dedicated to delivering excellence with attention to every detail, so you can relax and enjoy.</p>
          </div>
          <div className="carousel-item">
            <h3>🌟 Client Focus</h3>
            <p>Your satisfaction is our priority and we go the extra mile to make your event unforgettable.</p>
          </div>
        </div>
      </div>
    </div>
  );
};