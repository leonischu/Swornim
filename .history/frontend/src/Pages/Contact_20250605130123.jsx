import React, { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Users, Award } from 'lucide-react'
import "./CSS/Contact.css"

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["Kathmandu, Nepal", "Thamel, Ward No. 26", "Near Kathmandu Guest House"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+977-1-4441234", "+977-9841234567", "24/7 Support Available"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@swornim.com", "support@swornim.com", "booking@swornim.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Emergency Only"],
  },
]

const teamMembers = [
  {
    id: 1,
    name: "Rajesh Sharma",
    position: "CEO & Founder",
    image: "/images/team/rajesh-sharma.jpg",
    experience: "15+ years",
    specialty: "Event Strategy & Management",
  },
  {
    id: 2,
    name: "Priya Maharjan",
    position: "Creative Director",
    image: "/images/team/priya-maharjan.jpg",
    experience: "12+ years",
    specialty: "Design & Decoration",
  },
  {
    id: 3,
    name: "Bikash Thapa",
    position: "Operations Manager",
    image: "/images/team/bikash-thapa.jpg",
    experience: "10+ years",
    specialty: "Logistics & Coordination",
  },
  {
    id: 4,
    name: "Sita Gurung",
    position: "Client Relations",
    image: "/images/team/sita-gurung.jpg",
    experience: "8+ years",
    specialty: "Customer Service",
  },
]

const ImageWithFallback = ({ src, alt, className, fallbackSrc = "https://via.placeholder.com/300x300/2c3342/FFD700?text=Team+Member" }) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc(fallbackSrc)
    }
  }

  return <img src={imgSrc || "/placeholder.svg"} alt={alt} className={className} onError={handleError} loading="lazy" />
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    budget: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for your message! We'll get back to you within 24 hours.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      guestCount: "",
      budget: "",
      message: "",
    })
  }

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Get In Touch</h1>
          <p>Ready to plan your perfect event? Let's make it happen together!</p>
          <div className="hero-stats">
            <div className="stat">
              <Users className="stat-icon" />
              <span className="stat-number">5000+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat">
              <Award className="stat-icon" />
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <MessageCircle className="stat-icon" />
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Contact Information */}
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="info-icon">
                  <info.icon className="icon" />
                </div>
                <div className="info-content">
                  <h3>{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form and Map */}
        <div className="contact-form-section">
          <div className="form-container">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="input"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="eventType">Event Type</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="select-input"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="conference">Conference</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="eventDate">Event Date</label>
                  <input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="guestCount">Number of Guests</label>
                  <input
                    id="guestCount"
                    name="guestCount"
                    type="number"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    placeholder="e.g., 150"
                    className="input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="budget">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="select-input"
                >
                  <option value="">Select budget range</option>
                  <option value="50000-100000">NPR 50,000 - 100,000</option>
                  <option value="100000-250000">NPR 100,000 - 250,000</option>
                  <option value="250000-500000">NPR 250,000 - 500,000</option>
                  <option value="500000-1000000">NPR 500,000 - 1,000,000</option>
                  <option value="1000000+">NPR 1,000,000+</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your event requirements, special requests, or any questions you have..."
                  rows={6}
                  className="textarea"
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                <Send className="icon" />
                Send Message
              </button>
            </form>
          </div>

          <div className="map-container">
            <h3>Find Us Here</h3>
            <div className="map-placeholder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2619207002!2d85.30493931506!3d27.715245982790!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a74aa1f23%3A0x74ebef82ad0975e!2sThamel%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1635789012345!5m2!1sen!2snp"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
            </div>
            <div className="location-details">
              <h4>Visit Our Office</h4>
              <p>We're located in the heart of Thamel, Kathmandu. Drop by for a consultation or just to say hello!</p>
              <div className="office-hours">
                <Clock className="icon" />
                <span>Open Monday - Saturday, 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <p>Our experienced team is dedicated to making your event dreams come true.</p>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="member-image">
                  <ImageWithFallback
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="member-img"
                  />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="position">{member.position}</p>
                  <p className="experience">{member.experience}</p>
                  <p className="specialty">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How far in advance should I book?</h3>
              <p>We recommend booking at least 3-6 months in advance for weddings and large events, and 2-4 weeks for smaller gatherings.</p>
            </div>
            <div className="faq-item">
              <h3>Do you provide catering services?</h3>
              <p>Yes, we work with top-rated caterers and can arrange complete catering services for your event.</p>
            </div>
            <div className="faq-item">
              <h3>What's included in your event planning package?</h3>
              <p>Our packages include venue booking, decoration, catering coordination, entertainment, and full event management.</p>
            </div>
            <div className="faq-item">
              <h3>Can you work within my budget?</h3>
              <p>We offer flexible packages and can customize our services to fit your budget requirements.</p>
            </div>
            <div className="faq-item">
              <h3>Do you handle destination events?</h3>
              <p>Yes, we organize events throughout Nepal and can coordinate destination events in popular locations.</p>
            </div>
            <div className="faq-item">
              <h3>What if I need to cancel or reschedule?</h3>
              <p>We understand that plans can change. Please refer to our cancellation policy or contact us to discuss your options.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
