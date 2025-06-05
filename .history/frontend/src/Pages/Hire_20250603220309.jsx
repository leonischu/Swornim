import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, Camera, Palette, Music, Utensils, Users, Award, Clock } from "lucide-react"
import Image from "next/image"
import "./CSS/Hire.css"

const professionals = [
  {
    id: 1,
    name: "Priya Sharma",
    profession: "Wedding Photographer",
    category: "Photography",
    location: "Kathmandu, Nepal",
    rating: 4.9,
    reviews: 156,
    price: "NPR 25,000",
    experience: "8 years",
    image: "/placeholder.svg?height=300&width=300",
    portfolio: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
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
    image: "/placeholder.svg?height=300&width=300",
    portfolio: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
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
    image: "/placeholder.svg?height=300&width=300",
    portfolio: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
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
    image: "/placeholder.svg?height=300&width=300",
    portfolio: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
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
    image: "/placeholder.svg?height=300&width=300",
    portfolio: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
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
    image: "/placeholder.svg?height=300&width=300",
    portfolio: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
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

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="search-filters-section">
          <div className="search-bar">
            <Input
              placeholder="Search professionals, services, or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-group">
            <Label htmlFor="category-filter">Category</Label>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="photography">Photography</SelectItem>
                <SelectItem value="beauty">Beauty & Makeup</SelectItem>
                <SelectItem value="music">Music & DJ</SelectItem>
                <SelectItem value="decoration">Decoration</SelectItem>
                <SelectItem value="catering">Catering</SelectItem>
                <SelectItem value="planning">Event Planning</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Featured Professionals */}
        <div className="featured-section">
          <h2>Featured Professionals</h2>
          <div className="featured-professionals">
            {professionals
              .filter((prof) => prof.featured)
              .map((professional) => (
                <Card key={professional.id} className="featured-professional-card">
                  <div className="professional-header">
                    <Avatar className="professional-avatar">
                      <AvatarImage src={professional.image || "/placeholder.svg"} alt={professional.name} />
                      <AvatarFallback>
                        {professional.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <Badge className="featured-badge">Featured</Badge>
                    <div className={`availability-status ${professional.availability.toLowerCase()}`}>
                      {professional.availability}
                    </div>
                  </div>
                  <CardContent className="professional-content">
                    <div className="professional-info">
                      <h3 className="professional-name">{professional.name}</h3>
                      <p className="professional-title">{professional.profession}</p>
                      <div className="professional-details">
                        <div className="location">
                          <MapPin className="w-4 h-4" />
                          <span>{professional.location}</span>
                        </div>
                        <div className="experience">
                          <Clock className="w-4 h-4" />
                          <span>{professional.experience} experience</span>
                        </div>
                      </div>
                      <div className="rating-reviews">
                        <div className="rating">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{professional.rating}</span>
                        </div>
                        <span className="reviews">({professional.reviews} reviews)</span>
                      </div>
                    </div>

                    <div className="portfolio-preview">
                      <h4>Portfolio</h4>
                      <div className="portfolio-images">
                        {professional.portfolio.slice(0, 3).map((image, index) => (
                          <Image
                            key={index}
                            src={image || "/placeholder.svg"}
                            alt={`Portfolio ${index + 1}`}
                            width={80}
                            height={80}
                            className="portfolio-thumb"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="services-list">
                      <h4>Services</h4>
                      <div className="services">
                        {professional.services.slice(0, 3).map((service) => (
                          <Badge key={service} variant="secondary" className="service-badge">
                            {service}
                          </Badge>
                        ))}
                        {professional.services.length > 3 && (
                          <Badge variant="outline">+{professional.services.length - 3} more</Badge>
                        )}
                      </div>
                    </div>

                    <div className="professional-footer">
                      <div className="pricing">
                        <span className="price">Starting from {professional.price}</span>
                      </div>
                      <Button
                        className="hire-button"
                        onClick={() => handleHireProfessional(professional)}
                        disabled={professional.availability === "Busy"}
                      >
                        {professional.availability === "Busy" ? "Currently Busy" : "Hire Now"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Professionals Grid */}
        <div className="all-professionals-section">
          <h2>All Professionals</h2>
          <div className="professionals-grid">
            {filteredProfessionals.map((professional) => (
              <Card key={professional.id} className="professional-card">
                <CardHeader>
                  <div className="card-header-content">
                    <Avatar className="professional-avatar">
                      <AvatarImage src={professional.image || "/placeholder.svg"} alt={professional.name} />
                      <AvatarFallback>
                        {professional.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="professional-basic-info">
                      <CardTitle className="professional-name">{professional.name}</CardTitle>
                      <p className="professional-title">{professional.profession}</p>
                      <div className="category">
                        {React.createElement(categoryIcons[professional.category] || Users, { className: "w-4 h-4" })}
                        <span>{professional.category}</span>
                      </div>
                    </div>
                    {professional.featured && <Badge className="featured-badge">Featured</Badge>}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="professional-stats">
                    <div className="location">
                      <MapPin className="w-4 h-4" />
                      <span>{professional.location}</span>
                    </div>
                    <div className="rating">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>
                        {professional.rating} ({professional.reviews})
                      </span>
                    </div>
                  </div>

                  <p className="description">{professional.description}</p>

                  <div className="services-preview">
                    {professional.services.slice(0, 2).map((service) => (
                      <Badge key={service} variant="outline" className="service-tag">
                        {service}
                      </Badge>
                    ))}
                  </div>

                  <div className="card-footer">
                    <div className="pricing-availability">
                      <span className="price">{professional.price}</span>
                      <div className={`availability-indicator ${professional.availability.toLowerCase()}`}>
                        {professional.availability}
                      </div>
                    </div>
                    <Button
                      className="hire-button"
                      onClick={() => handleHireProfessional(professional)}
                      disabled={professional.availability === "Busy"}
                    >
                      {professional.availability === "Busy" ? "Busy" : "Hire"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Hire Form Modal */}
        {showHireForm && selectedProfessional && (
          <div className="hire-modal">
            <div className="hire-form-container">
              <Card className="hire-form-card">
                <CardHeader>
                  <CardTitle>Hire {selectedProfessional.name}</CardTitle>
                  <Button variant="ghost" className="close-button" onClick={() => setShowHireForm(false)}>
                    ×
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="professional-summary">
                    <Avatar className="summary-avatar">
                      <AvatarImage
                        src={selectedProfessional.image || "/placeholder.svg"}
                        alt={selectedProfessional.name}
                      />
                      <AvatarFallback>
                        {selectedProfessional.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="summary-info">
                      <h3>{selectedProfessional.name}</h3>
                      <p>{selectedProfessional.profession}</p>
                      <div className="summary-rating">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>
                          {selectedProfessional.rating} ({selectedProfessional.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmitHire} className="hire-form">
                    <div className="form-row">
                      <div className="form-group">
                        <Label htmlFor="event-type">Event Type</Label>
                        <Select value={eventType} onValueChange={setEventType}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="birthday">Birthday Party</SelectItem>
                            <SelectItem value="anniversary">Anniversary</SelectItem>
                            <SelectItem value="corporate">Corporate Event</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="form-group">
                        <Label htmlFor="event-date">Event Date</Label>
                        <Input
                          id="event-date"
                          type="date"
                          value={eventDate}
                          onChange={(e) => setEventDate(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select value={budget} onValueChange={setBudget}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10000-25000">NPR 10,000 - 25,000</SelectItem>
                            <SelectItem value="25000-50000">NPR 25,000 - 50,000</SelectItem>
                            <SelectItem value="50000-100000">NPR 50,000 - 100,000</SelectItem>
                            <SelectItem value="100000+">NPR 100,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="form-group">
                        <Label htmlFor="duration">Event Duration</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="half-day">Half Day (4 hours)</SelectItem>
                            <SelectItem value="full-day">Full Day (8 hours)</SelectItem>
                            <SelectItem value="multi-day">Multiple Days</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="form-group">
                      <Label htmlFor="services-needed">Services Needed</Label>
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
                      <Label htmlFor="special-requirements">Special Requirements</Label>
                      <Textarea
                        id="special-requirements"
                        placeholder="Describe any specific requirements, preferences, or additional details..."
                        rows={4}
                      />
                    </div>

                    <div className="contact-info">
                      <h4>Your Contact Information</h4>
                      <div className="form-row">
                        <div className="form-group">
                          <Label htmlFor="client-name">Full Name</Label>
                          <Input id="client-name" placeholder="Your full name" />
                        </div>
                        <div className="form-group">
                          <Label htmlFor="client-phone">Phone Number</Label>
                          <Input id="client-phone" placeholder="Your phone number" />
                        </div>
                      </div>
                      <div className="form-group">
                        <Label htmlFor="client-email">Email Address</Label>
                        <Input id="client-email" type="email" placeholder="Your email address" />
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

                    <Button type="submit" className="submit-hire-button">
                      Send Hire Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
