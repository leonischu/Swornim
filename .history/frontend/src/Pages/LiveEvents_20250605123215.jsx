import React, { useState } from "react"
import { Calendar, MapPin, Clock, Users, Ticket, Star, Music, Mic, Camera, Heart, CreditCard } from 'lucide-react'
import "./CSS/LiveEvents.css"

const events = [
  {
    id: 1,
    title: "Nepali Folk Music Festival",
    artist: "Various Artists",
    date: "2024-02-15",
    time: "18:00",
    venue: "Dasarath Stadium, Kathmandu",
    price: "NPR 1,500",
    category: "Music",
    image: "/images/events/folk-music-festival.jpg",
    rating: 4.8,
    attendees: 2500,
    description: "Experience the rich heritage of Nepali folk music with renowned artists from across the country.",
    ticketsLeft: 150,
    featured: true,
    organizer: "Nepal Cultural Foundation",
    duration: "4 hours",
    ageLimit: "All Ages",
  },
  {
    id: 2,
    title: "Stand-up Comedy Night",
    artist: "Rajesh Hamal & Friends",
    date: "2024-02-20",
    time: "19:30",
    venue: "Nepal Academy Hall, Kathmandu",
    price: "NPR 800",
    category: "Comedy",
    image: "/images/events/comedy-night.jpeg",
    rating: 4.6,
    attendees: 300,
    description: "Get ready to laugh out loud with Nepal's finest comedians in an evening full of humor.",
    ticketsLeft: 45,
    featured: false,
    organizer: "Comedy Club Nepal",
    duration: "2.5 hours",
    ageLimit: "18+",
  },
  {
    id: 3,
    title: "Rock Concert - The Shadows",
    artist: "The Shadows Band",
    date: "2024-02-25",
    time: "20:00",
    venue: "Club Déjà Vu, Thamel",
    price: "NPR 2,000",
    category: "Music",
    image: "/images/events/rock-concert.jpeg",
    rating: 4.9,
    attendees: 500,
    description: "Rock the night away with The Shadows, Nepal's premier rock band.",
    ticketsLeft: 25,
    featured: true,
    organizer: "Rock Nepal Productions",
    duration: "3 hours",
    ageLimit: "16+",
  },
  {
    id: 4,
    title: "Cultural Dance Performance",
    artist: "Nepal Dance Academy",
    date: "2024-03-01",
    time: "17:00",
    venue: "National Theatre, Kathmandu",
    price: "NPR 1,200",
    category: "Dance",
    image: "/images/events/cultural-dance.jpeg",
    rating: 4.7,
    attendees: 400,
    description: "Witness the beauty of traditional Nepali dances performed by skilled artists.",
    ticketsLeft: 80,
    featured: false,
    organizer: "Nepal Dance Academy",
    duration: "2 hours",
    ageLimit: "All Ages",
  },
]

const categoryIcons = {
  Music: Music,
  Comedy: Mic,
  Dance: Users,
  Theatre: Camera,
}

const ImageWithFallback = ({ src, alt, className, fallbackSrc = "https://via.placeholder.com/400x300/2c3342/FFD700?text=Event+Image" }) => {
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

export function LiveEvents() {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [ticketQuantity, setTicketQuantity] = useState(1)
  const [filterCategory, setFilterCategory] = useState("all")
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [paymentStep, setPaymentStep] = useState(1)

  const filteredEvents = events.filter((event) => {
    const matchesCategory = filterCategory === "all" || event.category.toLowerCase() === filterCategory.toLowerCase()
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.artist.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleBookTicket = (event) => {
    setSelectedEvent(event)
    setShowBookingForm(true)
    setPaymentStep(1)
  }

  const handleKhaltiPayment = () => {
    const totalAmount = Number.parseInt(selectedEvent.price.replace("NPR ", "").replace(",", "")) * ticketQuantity + 50
    
    // Simulate Khalti payment integration
    alert(`Redirecting to Khalti for payment of NPR ${totalAmount}`)
    
    // In real implementation, you would integrate with Khalti SDK here
    setTimeout(() => {
      alert("Payment successful! Your tickets have been booked.")
      setShowBookingForm(false)
      setPaymentStep(1)
    }, 2000)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="live-events-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Live Events & Entertainment</h1>
          <p>Discover amazing live performances, concerts, and shows happening near you</p>
          <div className="hero-features">
            <div className="feature">
              <Ticket className="feature-icon" />
              <span>Instant Booking</span>
            </div>
            <div className="feature">
              <CreditCard className="feature-icon" />
              <span>Secure Payment</span>
            </div>
            <div className="feature">
              <Star className="feature-icon" />
              <span>Best Events</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Search and Filters */}
        <div className="search-filters-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search events, artists, or venues..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-group">
            <label htmlFor="category-filter">Category</label>
            <select
              id="category-filter"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="select-input"
            >
              <option value="all">All Categories</option>
              <option value="music">Music</option>
              <option value="comedy">Comedy</option>
              <option value="dance">Dance</option>
              <option value="theatre">Theatre</option>
            </select>
          </div>
        </div>

        {/* Featured Events */}
        <div className="featured-section">
          <h2>Featured Events</h2>
          <div className="featured-events">
            {events
              .filter((event) => event.featured)
              .map((event) => (
                <div key={event.id} className="featured-event-card">
                  <div className="event-image">
                    <ImageWithFallback
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="event-img"
                    />
                    <div className="featured-badge">Featured</div>
                    <button className="favorite-button">
                      <Heart className="icon" />
                    </button>
                    <div className="tickets-left-badge">
                      {event.ticketsLeft} tickets left
                    </div>
                  </div>
                  <div className="event-content">
                    <div className="event-category">
                      {React.createElement(categoryIcons[event.category] || Music, { className: "icon" })}
                      <span>{event.category}</span>
                    </div>
                    <h3 className="event-title">{event.title}</h3>
                    <p className="event-artist">{event.artist}</p>
                    <p className="event-description">{event.description}</p>
                    
                    <div className="event-details">
                      <div className="event-date">
                        <Calendar className="icon" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="event-time">
                        <Clock className="icon" />
                        <span>{event.time} • {event.duration}</span>
                      </div>
                      <div className="event-venue">
                        <MapPin className="icon" />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                    
                    <div className="event-stats">
                      <div className="rating">
                        <Star className="icon star-icon" />
                        <span>{event.rating}</span>
                      </div>
                      <div className="attendees">
                        <Users className="icon" />
                        <span>{event.attendees} attending</span>
                      </div>
                      <div className="age-limit">
                        <span>{event.ageLimit}</span>
                      </div>
                    </div>
                    
                    <div className="event-footer">
                      <div className="price-info">
                        <span className="price">{event.price}</span>
                        <span className="organizer">by {event.organizer}</span>
                      </div>
                      <button className="book-ticket-button" onClick={() => handleBookTicket(event)}>
                        <Ticket className="icon" />
                        Book Ticket
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Events Grid */}
        <div className="all-events-section">
          <h2>All Events</h2>
          <div className="events-grid">
            {filteredEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <ImageWithFallback
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="event-img"
                  />
                  {event.featured && <div className="featured-badge">Featured</div>}
                  <div className="tickets-left-badge">
                    {event.ticketsLeft} left
                  </div>
                </div>
                <div className="event-content">
                  <div className="event-category">
                    {React.createElement(categoryIcons[event.category] || Music, { className: "icon" })}
                    <span>{event.category}</span>
                  </div>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-artist">{event.artist}</p>
                  
                  <div className="event-info">
                    <div className="event-date-time">
                      <Calendar className="icon" />
                      <span>{formatDate(event.date)} at {event.time}</span>
                    </div>
                    <div className="event-venue">
                      <MapPin className="icon" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                  
                  <div className="event-stats">
                    <div className="rating">
                      <Star className="icon star-icon" />
                      <span>{event.rating}</span>
                    </div>
                    <span className="age-limit">{event.ageLimit}</span>
                  </div>
                  
                  <div className="event-footer">
                    <span className="price">{event.price}</span>
                    <button className="book-button" onClick={() => handleBookTicket(event)}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Modal */}
        {showBookingForm && selectedEvent && (
          <div className="booking-modal">
            <div className="booking-form-container">
              <div className="booking-form-card">
                <div className="modal-header">
                  <h2>Book Tickets - {selectedEvent.title}</h2>
                  <button className="close-button" onClick={() => setShowBookingForm(false)}>
                    ×
                  </button>
                </div>
                <div className="modal-content">
                  {paymentStep === 1 && (
                    <>
                      <div className="event-summary">
                        <ImageWithFallback
                          src={selectedEvent.image || "/placeholder.svg"}
                          alt={selectedEvent.title}
                          className="event-thumbnail"
                        />
                        <div className="event-info">
                          <h3>{selectedEvent.title}</h3>
                          <p>{selectedEvent.artist}</p>
                          <div className="event-details">
                            <span>{formatDate(selectedEvent.date)}</span>
                            <span>{selectedEvent.time}</span>
                            <span>{selectedEvent.venue}</span>
                          </div>
                          <div className="rating">
                            <Star className="icon star-icon" />
                            <span>{selectedEvent.rating} • {selectedEvent.attendees} attending</span>
                          </div>
                        </div>
                      </div>

                      <div className="ticket-selection">
                        <label htmlFor="ticket-quantity">Number of Tickets</label>
                        <select
                          id="ticket-quantity"
                          value={ticketQuantity.toString()}
                          onChange={(e) => setTicketQuantity(Number.parseInt(e.target.value))}
                          className="select-input"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num.toString()}>
                              {num} Ticket{num > 1 ? "s" : ""}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="booking-summary">
                        <h3>Booking Summary</h3>
                        <div className="summary-row">
                          <span>Ticket Price:</span>
                          <span>{selectedEvent.price}</span>
                        </div>
                        <div className="summary-row">
                          <span>Quantity:</span>
                          <span>{ticketQuantity}</span>
                        </div>
                        <div className="summary-row">
                          <span>Subtotal:</span>
                          <span>NPR {Number.parseInt(selectedEvent.price.replace("NPR ", "").replace(",", "")) * ticketQuantity}</span>
                        </div>
                        <div className="summary-row">
                          <span>Service Fee:</span>
                          <span>NPR 50</span>
                        </div>
                        <div className="summary-row total">
                          <span>Total:</span>
                          <span>NPR {Number.parseInt(selectedEvent.price.replace("NPR ", "").replace(",", "")) * ticketQuantity + 50}</span>
                        </div>
                      </div>

                      <button 
                        className="continue-button" 
                        onClick={() => setPaymentStep(2)}
                      >
                        Continue to Payment
                      </button>
                    </>
                  )}

                  {paymentStep === 2 && (
                    <>
                      <div className="payment-section">
                        <h3>Payment Information</h3>
                        <div className="customer-info">
                          <div className="form-row">
                            <div className="form-group">
                              <label htmlFor="customer-name">Full Name</label>
                              <input
                                id="customer-name"
                                type="text"
                                placeholder="Enter your full name"
                                className="input"
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="customer-email">Email Address</label>
                              <input
                                id="customer-email"
                                type="email"
                                placeholder="Enter your email"
                                className="input"
                                required
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="customer-phone">Phone Number</label>
                            <input
                              id="customer-phone"
                              type="tel"
                              placeholder="Enter your phone number"
                              className="input"
                              required
                            />
                          </div>
                        </div>

                        <div className="payment-method">
                          <h4>Payment Method</h4>
                          <div className="khalti-payment">
                            <div className="khalti-option">
                              <ImageWithFallback
                                src="/images/khalti-logo.png"
                                alt="Khalti"
                                className="khalti-logo"
                                fallbackSrc="https://via.placeholder.com/120x40/5D2E86/ffffff?text=Khalti"
                              />
                              <div className="khalti-info">
                                <h5>Pay with Khalti</h5>
                                <p>Secure payment gateway for Nepal</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="payment-summary">
                          <div className="summary-row">
                            <span>Event:</span>
                            <span>{selectedEvent.title}</span>
                          </div>
                          <div className="summary-row">
                            <span>Tickets:</span>
                            <span>{ticketQuantity} × {selectedEvent.price}</span>
                          </div>
                          <div className="summary-row total">
                            <span>Total Amount:</span>
                            <span>NPR {Number.parseInt(selectedEvent.price.replace("NPR ", "").replace(",", "")) * ticketQuantity + 50}</span>
                          </div>
                        </div>

                        <div className="payment-buttons">
                          <button 
                            className="back-button" 
                            onClick={() => setPaymentStep(1)}
                          >
                            Back
                          </button>
                          <button className="khalti-pay-button" onClick={handleKhaltiPayment}>
                            <CreditCard className="icon" />
                            Pay with Khalti
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

