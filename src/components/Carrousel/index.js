import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;

  const goToNextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  return (
    <div className="carousel">
      <div className="carousel__image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide ${index}`}
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
      </div>
      <button className="carousel__prev-button" onClick={goToPrevSlide}>
        Prev
      </button>
      <button className="carousel__next-button" onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;