import React from "react";
import "./CSS/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">CONTACT US</h1>
      <div className="contact-content">
        {/* Form Section */}
        <div className="contact-form">
          <form>
            <input
              type="text"
              placeholder="Name"
              className="contact-input"
            />
            <input
              type="email"
              placeholder="Email"
              className="contact-input"
            />
            <textarea
              placeholder="Your Message"
              className="contact-textarea"
            ></textarea>
            <button type="submit" className="contact-submit">
              Submit
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="contact-map">
          <iframe
            title="Pulchowk Map"
            src="https://www.google.com/maps/embed/v1/place?q=Pulchowk+Lalitpur+Nepal&key=YOUR_GOOGLE_MAPS_API_KEY"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export Contact;
