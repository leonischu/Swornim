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
    autoplaySpeed: 2000,
    pauseOnHover: true,
    fade: false,
  };

  const testimonials = [
    {
      name: "Serena Sharma",
      saying: "Swornim made my wedding unforgettable! Their attention to detail was amazing.",
      image: require("../Assets/serena_sharma.jpg"),
    },
    {
      name: "Priyanka Karki",
      saying: "Ayanka's birthday was a magical day, thanks to the incredible team of Swornim. From the beautiful decor to the perfectly organized activities, everything was flawless. Seeing her eyes light up with joy was the best gift I could ask for as a mother!",
      image: require("../Assets/priyanka_karki.jpg"),
    },
    {
      name: "Aarav Khadka",
      saying: "The team went above and beyond for our corporate event. Simply the best!",
      image: require("../Assets/aarav_khadka.jpg"),
    },
  ];

  const backgroundImage = require("../Assets/testimonial_bg.jpg");

  return (
    <div
      className="testimonial-carousel-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Slider {...settings}>
        {testimonials.map((client, index) => (
          <div key={index} className="testimonial-slide">
            <div className="testimonial-overlay">
              <img
                src={client.image}
                alt={client.name}
                className="testimonial-client-image"
              />
              <div className="testimonial-info">
                <h3 className="testimonial-client-name">{client.name}</h3>
                <div className="testimonial-cloud">
                  <p>{client.saying}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Clients;
