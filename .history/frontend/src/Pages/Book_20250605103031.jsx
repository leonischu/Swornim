import React, { useState } from "react"
import { Star, MapPin, Users, Wifi, Car, Camera, Music, Utensils, CalendarIcon, Clock, Award, Heart } from 'lucide-react'
import "./CSS/BookVenue.css"

const venues = [
  {
    id: 1,
    name: "Grand Ballroom Palace",
    location: "Kathmandu, Nepal",
    capacity: "500-800 guests",
    price: "NPR 150,000",
    rating: 4.8,
    reviews: 156,
    image: "/images/venues/grand-ballroom.jpg",
    amenities: ["WiFi", "Parking", "Catering", "Sound System", "Photography"],
    type: "Wedding Hall",
    description: "Luxurious ballroom with crystal chandeliers and marble floors, perfect for grand celebrations.",
    featured: true,
  },
  {
    id: 2,
    name: "Garden Paradise Resort",
    location: "Pokhara, Nepal",
    capacity: "200-400 guests",
    price: "NPR 80,000",
    rating: 4.6,
    reviews: 89,
    image: "/images/venues/garden-paradise.jpg",
    amenities: ["Garden", "Parking", "Catering", "Decoration", "Music"],
    type: "Outdoor Venue",
    description: "Beautiful outdoor venue with lush gardens and mountain views.",
    featured: false,
  },
  {
    id: 3,
    name: "Royal Banquet Hall",
    location: "Lalitpur, Nepal",
    capacity: "300-600 guests",
    price: "NPR 120,000",
    rating: 4.7,
    reviews: 124,
    image: "/images/venues/royal-banquet.jpg",
    amenities: ["AC", "Parking", "Catering", "Sound System", "Lighting"],
    type: "Banquet Hall",
    description: "Elegant banquet hall with modern amenities and professional service.",
    featured: true,
  },
  {
    id: 4,
    name: "Himalayan View Resort",
    location: "Nagarkot, Nepal",
    capacity: "100-250 guests",
    price: "NPR 60,000",
    rating: 4.9,
    reviews: 67,
    image: "/images/venues/himalayan-view.jpg",
    amenities: ["Mountain View", "Parking", "Catering", "Photography", "Decoration"],
    type: "Resort",
    description: "Stunning resort with panoramic Himalayan views and premium facilities.",
    featured: false,
  },
]

const testimonials = [
  {
    id: 1,
    name: "Priya & Rajesh",
    event: "Wedding Celebration",
    venue: "Grand Ballroom Palace",
    rating: 5,
    comment: "Absolutely magical! The Grand Ballroom Palace made our wedding day perfect. The staff was incredibly professional and the venue was breathtaking.",
    image: "/images/testimonials/couple-1.jpg",
    date: "December 2023"
  },
  {
    id: 2,
    name: "Sita Sharma",
    event: "Birthday Party",
    venue: "Garden Paradise Resort",
    rating: 5,
    comment: "The garden setting was perfect for my daughter's birthday. Beautiful decorations and excellent catering service. Highly recommended!",
    image: "/images/testimonials/family-1.jpg",
    date: "November 2023"
  },
  {
    id: 3,
    name: "Tech Solutions Pvt Ltd",
    event: "Corporate Event",
    venue: "Royal Banquet Hall",
    rating: 4,
    comment: "Professional venue with excellent facilities. Perfect for our annual conference. The team handled everything smoothly.",
    image: "/images/testimonials/corporate-1.jpg",
    date: "October 2023"
  },
]

const amenityIcons = {
  WiFi: Wifi,
  Parking: Car,
  Photography: Camera,
  "Sound System": Music,
  Music: Music,
  Catering: Utensils,
  AC: Users,
  Garden: Users,
  Decoration: Users,
  Lighting: Users,
  "Mountain View": Users,
}

const ImageWithFallback = ({ src, alt, className, fallbackSrc = "https://via.placeholder.com/400x300/2c3342/FFD700?text=Venue+Image" }) => {
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

export function Book() {
  const [selectedVenue, setSelectedVenue] = useState(null)
  const [eventType, setEventType] = useState("")
  const [guestCount, setGuestCount] = useState("")
  const [eventDate, setEventDate] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [showBookingForm, setShowBookingForm] = useState(false)

  const filteredVenues = filterType === "all" ? venues : venues.filter((venue) => venue.type.toLowerCase().includes(filterType.toLowerCase()))

  const handleBookVenue = (venue) => {
    setSelectedVenue(venue)
    setShowBookingForm(true)
  }

  const handleSubmitBooking = (e) => {
    e.preventDefault()
    alert(`Booking request submitted for ${selectedVenue?.name}!`)
    setShowBookingForm(false)
  }

  return (
    <div className="book-venue-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Book Your Perfect Venue</h1>
          <p>From intimate gatherings to grand celebrations, find the perfect space for your special event</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Venues</span>
            </div>
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Happy Events</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Cities</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Filters Section */}
        <div className="filters-section">
          <h2>Find Your Ideal Venue</h2>
          <div className="filter-group">
            <label htmlFor="venue-type">Venue Type</label>
            <select
              id="venue-type"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="select-input"
            >
              <option value="all">All Venues</option>
              <option value="wedding">Wedding Halls</option>
              <option value="outdoor">Outdoor Venues</option>
              <option value="banquet">Banquet Halls</option>
              <option value="resort">Resorts</option>
            </select>
          </div>
        </div>

        {/* Featured Venues */}
        <div className="featured-section">
          <h2>Featured Venues</h2>
          <div className="featured-venues">
            {venues.filter(venue => venue.featured).map((venue) => (
              <div key={venue.id} className="featured-venue-card">
                <div className="venue-image">
                  <ImageWithFallback
                    src={venue.image || "/placeholder.svg"}
                    alt={venue.name}
                    className="venue-img"
                  />
                  <div className="featured-badge">Featured</div>
                  <button className="favorite-btn">
                    <Heart className="icon" />
                  </button>
                </div>
                <div className="venue-content">
                  <div className="venue-header">
                    <h3 className="venue-name">{venue.name}</h3>
                    <div className="venue-type-badge">{venue.type}</div>
                  </div>
                  <p className="venue-description">{venue.description}</p>
                  <div className="venue-info">
                    <div className="location">
                      <MapPin className="icon" />
                      <span>{venue.location}</span>
                    </div>
                    <div className="capacity">
                      <Users className="icon" />
                      <span>{venue.capacity}</span>
                    </div>
                    <div className="rating">
                      <Star className="icon star-icon" />
                      <span>{venue.rating} ({venue.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="amenities">
                    {venue.amenities.slice(0, 4).map((amenity) => {
                      const IconComponent = amenityIcons[amenity] || Users
                      return (
                        <div key={amenity} className="amenity">
                          <IconComponent className="icon" />
                          <span>{amenity}</span>
                        </div>
                      )
                    })}
                  </div>
                  <div className="venue-footer">
                    <div className="price">{venue.price}/day</div>
                    <button className="book-button" onClick={() => handleBookVenue(venue)}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Venues Grid */}
        <div className="all-venues-section">
          <h2>All Venues</h2>
          <div className="venues-grid">
            {filteredVenues.map((venue) => (
              <div key={venue.id} className="venue-card">
                <div className="venue-image">
                  <ImageWithFallback
                    src={venue.image || "/placeholder.svg"}
                    alt={venue.name}
                    className="venue-img"
                  />
                  {venue.featured && <div className="featured-badge">Featured</div>}
                </div>
                <div className="venue-content">
                  <h3 className="venue-name">{venue.name}</h3>
                  <div className="venue-info">
                    <div className="location">
                      <MapPin className="icon" />
                      <span>{venue.location}</span>
                    </div>
                    <div className="capacity">
                      <Users className="icon" />
                      <span>{venue.capacity}</span>
                    </div>
                    <div className="rating">
                      <Star className="icon star-icon" />
                      <span>{venue.rating}</span>
                    </div>
                  </div>
                  <div className="amenities-preview">
                    {venue.amenities.slice(0, 3).map((amenity) => (
                      <span key={amenity} className="amenity-tag">{amenity}</span>
                    ))}
                  </div>
                  <div className="venue-footer">
                    <div className="price">{venue.price}/day</div>
                    <button className="book-button" onClick={() => handleBookVenue(venue)}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="testimonials-section">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="client-info">
                    <ImageWithFallback
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="client-image"
                      fallbackSrc="https://via.placeholder.com/60x60/2c3342/FFD700?text=Client"
                    />
                    <div className="client-details">
                      <h4 className="client-name">{testimonial.name}</h4>
                      <p className="event-type">{testimonial.event}</p>
                      <p className="venue-name">{testimonial.venue}</p>
                    </div>
                  </div>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="icon star-icon filled" />
                    ))}
                  </div>
                </div>
                <p className="testimonial-comment">"{testimonial.comment}"</p>
                <div className="testimonial-date">{testimonial.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="why-choose-section">
          <h2>Why Choose Our Venues</h2>
          <div className="features-grid">
            <div className="feature">
              <Award className="feature-icon" />
              <h3>Premium Quality</h3>
              <p>Hand-picked venues with exceptional standards and professional service</p>
            </div>
            <div className="feature">
              <Users className="feature-icon" />
              <h3>Expert Support</h3>
              <p>Dedicated event coordinators to help you plan every detail perfectly</p>
            </div>
            <div className="feature">
              <Clock className="feature-icon" />
              <h3>24/7 Service</h3>
              <p>Round-the-clock support to ensure your event runs smoothly</p>
            </div>
            <div className="feature">
              <Star className="feature-icon" />
              <h3>Best Prices</h3>
              <p>Competitive pricing with transparent costs and no hidden fees</p>
            </div>
          </div>
        </div>

        {/* Booking Modal */}
        {showBookingForm && selectedVenue && (
          <div className="booking-modal">
            <div className="booking-form-container">
              <div className="booking-form-card">
                <div className="modal-header">
                  <h2>Book {selectedVenue.name}</h2>
                  <button className="close-button" onClick={() => setShowBookingForm(false)}>
                    ×
                  </button>
                </div>
                <div className="modal-content">
                  <div className="venue-summary">
                    <ImageWithFallback
                      src={selectedVenue.image || "/placeholder.svg"}
                      alt={selectedVenue.name}
                      className="venue-thumbnail"
                    />
                    <div className="venue-details">
                      <h3>{selectedVenue.name}</h3>
                      <p>{selectedVenue.location}</p>
                      <div className="rating">
                        <Star className="icon star-icon" />
                        <span>{selectedVenue.rating} ({selectedVenue.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmitBooking} className="booking-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="event-type">Event Type</label>
                        <select
                          id="event-type"
                          value={eventType}
                          onChange={(e) => setEventType(e.target.value)}
                          className="select-input"
                          required
                        >
                          <option value="">Select event type</option>
                          <option value="wedding">Wedding</option>
                          <option value="birthday">Birthday Party</option>
                          <option value="anniversary">Anniversary</option>
                          <option value="corporate">Corporate Event</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="guest-count">Number of Guests</label>
                        <input
                          id="guest-count"
                          type="number"
                          placeholder="e.g., 150"
                          value={guestCount}
                          onChange={(e) => setGuestCount(e.target.value)}
                          className="input"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="event-date">Event Date</label>
                      <input
                        id="event-date"
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="special-requests">Special Requests</label>
                      <textarea
                        id="special-requests"
                        placeholder="Any special decorations, catering preferences, or other requirements..."
                        rows={4}
                        className="textarea"
                      />
                    </div>

                    <div className="booking-summary">
                      <h3>Booking Summary</h3>
                      <div className="summary-item">
                        <span>Venue:</span>
                        <span>{selectedVenue.name}</span>
                      </div>
                      <div className="summary-item">
                        <span>Price:</span>
                        <span>{selectedVenue.price}/day</span>
                      </div>
                      <div className="summary-item">
                        <span>Service Fee:</span>
                        <span>NPR 5,000</span>
                      </div>
                      <div className="summary-item total">
                        <span>Total:</span>
                        <span>{selectedVenue.price.replace('NPR ', 'NPR ')} + 5,000</span>
                      </div>
                    </div>

                    <button type="submit" className="submit-button">
                      Confirm Booking
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


