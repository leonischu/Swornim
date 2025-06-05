import React, { useState } from "react"
import { Star, MapPin, Camera, Palette, Music, Utensils, Users, Award, Clock } from "lucide-react"
import "./CSS/Hire.css"

const professionals = [
  {
    id: 1,
    name: "Serene Sharma",
    profession: "Wedding Photographer",
    category: "Photography",
    location: "Kathmandu, Nepal",
    rating: 4.9,
    reviews: 156,
    price: "NPR 25,000",
    experience: "8 years",
    image: "../Components/Assets/serena_sharma.jpg",
    portfolio: ["../Components/Assets/photography1.jpg", "../Components/Assets/photography2.jpg", "../Components/Assets/photography3.jpg"],
    services: ["Wedding Photography", "Pre-wedding Shoots", "Event Coverage", "Portrait Photography"],
    description:
      "Specialized in capturing beautiful moments with artistic flair. Award-winning photographer with 8+ years of experience.",
    availability: "Available",
    featured: true,
  },
  {
    id: 2,
    name: "Sita Maharjan",
    profession: "Makeup Artist",
    category: "Beauty",
    location: "Lalitpur, Nepal",
    rating: 4.8,
    reviews: 203,
    price: "NPR 15,000",
    experience: "6 years",
    image: "../Components/Assets/sita_maharjan.jpg",
    portfolio: ["/images/portfolio-1.jpg", "/images/portfolio-2.jpg", "/images/portfolio-3.jpg"],
    services: ["Bridal Makeup", "Party Makeup", "Traditional Makeup", "Hair Styling"],
    description: "Expert in bridal and party makeup with natural and glamorous looks. Certified makeup artist.",
    availability: "Available",
    featured: true,
  },
  {
    id: 3,
    name: "Rajesh Thapa",
    profession: "DJ & Music Producer",
    category: "Music",
    location: "Pokhara, Nepal",
    rating: 4.7,
    reviews: 89,
    price: "NPR 20,000",
    experience: "5 years",
    image: "/images/placeholder-profile.jpg",
    portfolio: ["/images/portfolio-1.jpg", "/images/portfolio-2.jpg", "/images/portfolio-3.jpg"],
    services: ["Wedding DJ", "Party DJ", "Sound System", "Music Production"],
    description: "Professional DJ with extensive music library and high-quality sound equipment.",
    availability: "Busy",
    featured: false,
  },
  {
    id: 4,
    name: "Maya Gurung",
    profession: "Event Decorator",
    category: "Decoration",
    location: "Kathmandu, Nepal",
    rating: 4.6,
    reviews: 124,
    price: "NPR 30,000",
    experience: "7 years",
    image: "/images/placeholder-profile.jpg",
    portfolio: ["/images/portfolio-1.jpg", "/images/portfolio-2.jpg", "/images/portfolio-3.jpg"],
    services: ["Wedding Decoration", "Birthday Decoration", "Corporate Events", "Floral Arrangements"],
    description: "Creative decorator specializing in elegant and themed decorations for all occasions.",
    availability: "Available",
    featured: false,
  },
  {
    id: 5,
    name: "Bikash Shrestha",
    profession: "Catering Chef",
    category: "Catering",
    location: "Bhaktapur, Nepal",
    rating: 4.8,
    reviews: 167,
    price: "NPR 800/person",
    experience: "10 years",
    image: "/images/placeholder-profile.jpg",
    portfolio: ["/images/portfolio-1.jpg", "/images/portfolio-2.jpg", "/images/portfolio-3.jpg"],
    services: ["Wedding Catering", "Corporate Catering", "Traditional Nepali Cuisine", "Continental Food"],
    description: "Master chef with expertise in Nepali and international cuisines. Hygiene certified.",
    availability: "Available",
    featured: true,
  },
  {
    id: 6,
    name: "Anita Rai",
    profession: "Event Coordinator",
    category: "Planning",
    location: "Kathmandu, Nepal",
    rating: 4.9,
    reviews: 98,
    price: "NPR 40,000",
    experience: "9 years",
    image: "/images/placeholder-profile.jpg",
    portfolio: ["/images/portfolio-1.jpg", "/images/portfolio-2.jpg", "/images/portfolio-3.jpg"],
    services: ["Wedding Planning", "Corporate Events", "Birthday Parties", "Anniversary Celebrations"],
    description: "Professional event coordinator ensuring seamless execution of your special events.",
    availability: "Available",
    featured: false,
  },
]

const categoryIcons = {
  Photography: Camera,
  Beauty: Palette,
  Music: Music,
  Decoration: Users,
  Catering: Utensils,
  Planning: Award,
}

export function Hire() {
  const [selectedProfessional, setSelectedProfessional] = useState(null)
  const [filterCategory, setFilterCategory] = useState("all")
  const [showHireForm, setShowHireForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [eventDate, setEventDate] = useState("")
  const [eventType, setEventType] = useState("")
  const [budget, setBudget] = useState("")

  const filteredProfessionals = professionals.filter((professional) => {
    const matchesCategory =
      filterCategory === "all" || professional.category.toLowerCase() === filterCategory.toLowerCase()
    const matchesSearch =
      professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      professional.profession.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleHireProfessional = (professional) => {
    setSelectedProfessional(professional)
    setShowHireForm(true)
  }

  const handleSubmitHire = (e) => {
    e.preventDefault()
    alert(`Hire request sent to ${selectedProfessional?.name}!`)
    setShowHireForm(false)
  }

  return (
    <div className="hire-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Hire Professional Services</h1>
          <p>Connect with skilled professionals to make your event perfect and memorable</p>
        </div>
      </div>

      <div className="container">
        {/* Search and Filters */}
        <div className="search-filters-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search professionals, services, or locations..."
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
              <option value="photography">Photography</option>
              <option value="beauty">Beauty & Makeup</option>
              <option value="music">Music & DJ</option>
              <option value="decoration">Decoration</option>
              <option value="catering">Catering</option>
              <option value="planning">Event Planning</option>
            </select>
          </div>
        </div>

        {/* Featured Professionals */}
        <div className="featured-section">
          <h2>Featured Professionals</h2>
          <div className="featured-professionals">
            {professionals
              .filter((prof) => prof.featured)
              .map((professional) => (
                <div key={professional.id} className="featured-professional-card">
                  <div className="professional-header">
                    <div className="professional-avatar">
                      <img src={professional.image || "/placeholder.svg"} alt={professional.name} />
                    </div>
                    <div className="featured-badge">Featured</div>
                    <div className={`availability-status ${professional.availability.toLowerCase()}`}>
                      {professional.availability}
                    </div>
                  </div>
                  <div className="professional-content">
                    <div className="professional-info">
                      <h3 className="professional-name">{professional.name}</h3>
                      <p className="professional-title">{professional.profession}</p>
                      <div className="professional-details">
                        <div className="location">
                          <MapPin className="icon" />
                          <span>{professional.location}</span>
                        </div>
                        <div className="experience">
                          <Clock className="icon" />
                          <span>{professional.experience} experience</span>
                        </div>
                      </div>
                      <div className="rating-reviews">
                        <div className="rating">
                          <Star className="icon star-icon" />
                          <span>{professional.rating}</span>
                        </div>
                        <span className="reviews">({professional.reviews} reviews)</span>
                      </div>
                    </div>

                    <div className="portfolio-preview">
                      <h4>Portfolio</h4>
                      <div className="portfolio-images">
                        {professional.portfolio.slice(0, 3).map((image, index) => (
                          <img
                            key={index}
                            src={image || "/placeholder.svg"}
                            alt={`Portfolio ${index + 1}`}
                            className="portfolio-thumb"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="services-list">
                      <h4>Services</h4>
                      <div className="services">
                        {professional.services.slice(0, 3).map((service) => (
                          <span key={service} className="service-badge">
                            {service}
                          </span>
                        ))}
                        {professional.services.length > 3 && (
                          <span className="service-badge outline">+{professional.services.length - 3} more</span>
                        )}
                      </div>
                    </div>

                    <div className="professional-footer">
                      <div className="pricing">
                        <span className="price">Starting from {professional.price}</span>
                      </div>
                      <button
                        className={`hire-button ${professional.availability === "Busy" ? "disabled" : ""}`}
                        onClick={() => handleHireProfessional(professional)}
                        disabled={professional.availability === "Busy"}
                      >
                        {professional.availability === "Busy" ? "Currently Busy" : "Hire Now"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Professionals Grid */}
        <div className="all-professionals-section">
          <h2>All Professionals</h2>
          <div className="professionals-grid">
            {filteredProfessionals.map((professional) => (
              <div key={professional.id} className="professional-card">
                <div className="card-header">
                  <div className="card-header-content">
                    <div className="professional-avatar">
                      <img src={professional.image || "/placeholder.svg"} alt={professional.name} />
                    </div>
                    <div className="professional-basic-info">
                      <h3 className="professional-name">{professional.name}</h3>
                      <p className="professional-title">{professional.profession}</p>
                      <div className="category">
                        {React.createElement(categoryIcons[professional.category] || Users, { className: "icon" })}
                        <span>{professional.category}</span>
                      </div>
                    </div>
                    {professional.featured && <div className="featured-badge">Featured</div>}
                  </div>
                </div>
                <div className="card-content">
                  <div className="professional-stats">
                    <div className="location">
                      <MapPin className="icon" />
                      <span>{professional.location}</span>
                    </div>
                    <div className="rating">
                      <Star className="icon star-icon" />
                      <span>
                        {professional.rating} ({professional.reviews})
                      </span>
                    </div>
                  </div>

                  <p className="description">{professional.description}</p>

                  <div className="services-preview">
                    {professional.services.slice(0, 2).map((service) => (
                      <span key={service} className="service-tag">
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="card-footer">
                    <div className="pricing-availability">
                      <span className="price">{professional.price}</span>
                      <div className={`availability-indicator ${professional.availability.toLowerCase()}`}>
                        {professional.availability}
                      </div>
                    </div>
                    <button
                      className={`hire-button ${professional.availability === "Busy" ? "disabled" : ""}`}
                      onClick={() => handleHireProfessional(professional)}
                      disabled={professional.availability === "Busy"}
                    >
                      {professional.availability === "Busy" ? "Busy" : "Hire"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hire Form Modal */}
        {showHireForm && selectedProfessional && (
          <div className="hire-modal">
            <div className="hire-form-container">
              <div className="hire-form-card">
                <div className="card-header">
                  <h2>Hire {selectedProfessional.name}</h2>
                  <button className="close-button" onClick={() => setShowHireForm(false)}>
                    ×
                  </button>
                </div>
                <div className="card-content">
                  <div className="professional-summary">
                    <div className="summary-avatar">
                      <img src={selectedProfessional.image || "/placeholder.svg"} alt={selectedProfessional.name} />
                    </div>
                    <div className="summary-info">
                      <h3>{selectedProfessional.name}</h3>
                      <p>{selectedProfessional.profession}</p>
                      <div className="summary-rating">
                        <Star className="icon star-icon" />
                        <span>
                          {selectedProfessional.rating} ({selectedProfessional.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmitHire} className="hire-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="event-type">Event Type</label>
                        <select
                          id="event-type"
                          value={eventType}
                          onChange={(e) => setEventType(e.target.value)}
                          className="select-input"
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
                        <label htmlFor="event-date">Event Date</label>
                        <input
                          id="event-date"
                          type="date"
                          value={eventDate}
                          onChange={(e) => setEventDate(e.target.value)}
                          className="input"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="budget">Budget Range</label>
                        <select
                          id="budget"
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="select-input"
                        >
                          <option value="">Select budget range</option>
                          <option value="10000-25000">NPR 10,000 - 25,000</option>
                          <option value="25000-50000">NPR 25,000 - 50,000</option>
                          <option value="50000-100000">NPR 50,000 - 100,000</option>
                          <option value="100000+">NPR 100,000+</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="duration">Event Duration</label>
                        <select id="duration" className="select-input">
                          <option value="">Select duration</option>
                          <option value="half-day">Half Day (4 hours)</option>
                          <option value="full-day">Full Day (8 hours)</option>
                          <option value="multi-day">Multiple Days</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="services-needed">Services Needed</label>
                      <div className="services-checkboxes">
                        {selectedProfessional.services.map((service) => (
                          <label key={service} className="service-checkbox">
                            <input type="checkbox" />
                            <span>{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="special-requirements">Special Requirements</label>
                      <textarea
                        id="special-requirements"
                        placeholder="Describe any specific requirements, preferences, or additional details..."
                        rows={4}
                        className="textarea"
                      />
                    </div>

                    <div className="contact-info">
                      <h4>Your Contact Information</h4>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="client-name">Full Name</label>
                          <input id="client-name" placeholder="Your full name" className="input" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="client-phone">Phone Number</label>
                          <input id="client-phone" placeholder="Your phone number" className="input" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="client-email">Email Address</label>
                        <input id="client-email" type="email" placeholder="Your email address" className="input" />
                      </div>
                    </div>

                    <div className="hire-summary">
                      <h4>Hire Summary</h4>
                      <div className="summary-item">
                        <span>Professional:</span>
                        <span>{selectedProfessional.name}</span>
                      </div>
                      <div className="summary-item">
                        <span>Service:</span>
                        <span>{selectedProfessional.profession}</span>
                      </div>
                      <div className="summary-item">
                        <span>Starting Price:</span>
                        <span>{selectedProfessional.price}</span>
                      </div>
                      <div className="summary-item note">
                        <span>Note:</span>
                        <span>Final pricing will be discussed based on your requirements</span>
                      </div>
                    </div>

                    <button type="submit" className="submit-hire-button">
                      Send Hire Request
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
