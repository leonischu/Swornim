import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      image: "../Components/Assets/venue.jpg",
      buttonText: "Book Now",
    },
    {
      title: "Hire Photographer",
      image: "../Components/Assets/photographer.jpg",
      buttonText: "Hire Now",
    },
    {
      title: "Hire Makeup Artist",
      image: "../Components/Assets/makeupartist.jpg",
      buttonText: "Hire Now",
    },
    {
      title: "Get Into Live Events",
      image: "../Components/Assets/liveevent.jpg",
      buttonText: "Explore Now",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                {slide.title}
              </h2>
              <button className="bg-primary px-6 py-2 text-white text-lg rounded-full shadow-md hover:bg-primary-dark transition">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;