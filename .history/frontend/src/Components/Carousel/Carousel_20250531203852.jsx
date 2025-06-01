import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      title: "Book Your Event",
      image: require("../Assets/venue.jpg"),
      buttonText: "Book Now",
    },
    {
      title: "Hire Photographer",
      image: require("../Assets/photographer.jpg"),
      buttonText: "Hire Now",
    },
    {
      title: "Hire Makeup Artist",
      image: require("../Assets/makeupartist.jpg"),
      buttonText: "Hire Now",
    },
    {
      title: "Get Into Live Events",
      image: require("../Assets/liveevent.jpg"),
      buttonText: "Explore Now",
    },
  ];

return (
  <div className="carousel-container">
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="carousel-slide">
          <img
            src={slide.image}
            alt={slide.title}
            className="carousel-image"
          />
          <div className="carousel-overlay">
            <h2 className="carousel-title">{slide.title}</h2>
            <button className="carousel-button">{slide.buttonText}</button>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default Carousel;