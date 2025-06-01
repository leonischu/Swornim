import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Clients.css";

const Clients = () => {
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
      name: "Serena Sharma",
      saying: "Swornim made my wedding unforgettable! Their attention to detail was amazing.",
      image: require("../Assets/serena_sharma.jpg"),
    },
    {
      name: "Priyanka Karki",
      saying: "The team went above and beyond for our corporate event. Simply the best!",
      image: require("../Assets/priyanka_karki.jpg"),
    },
    {
      name: "Aarav Khadka",
      saying: "I couldn’t have asked for a better team to handle my birthday bash. Highly recommend!",
      image: require("../Assets/aarav_khadka.jpg"),
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

export default Clients;

