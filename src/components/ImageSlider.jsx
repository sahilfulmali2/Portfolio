import React from 'react';
import Slider from 'react-slick';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [
    "https://via.placeholder.com/800x400?text=Slide+1",
    "https://via.placeholder.com/800x400?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
  ];

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
