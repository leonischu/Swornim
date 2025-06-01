import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialCarousel.css";

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const testimonials = [
    {
      name: "John Doe",
      saying: "Swornim made my wedding unforgettable! Their attention to detail was amazing.",
      image: require("../Assets/john_doe.jpg"),
    },
    {
      name: "Jane Smith",
      saying: "The team went above and beyond for our corporate event. Simply the best!",
      image: require("../Assets/jane_smith.jpg"),
    },
    {
      name: "Aarav Thapa",
      saying: "I couldn’t have asked for a better team to handle my birthday bash. Highly recommend!",
      image: require("../Assets/aarav_thapa.jpg"),
    },
  ];

  return (
    <div className="testimonial-carousel-container">
      <Slider {...settings}>
        {testimonials.map((client, index) => (
          <div key={index} className="testimonial-slide">
            <div className="testimonial-overlay">
              <img
                src={client.image}
                alt={client.name}
                className="testimonial-client-image"
              />
              <div className="testimonial-cloud">
                <p>{client.saying}</p>
              </div>
              <h3 className="testimonial-client-name">- {client.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;

