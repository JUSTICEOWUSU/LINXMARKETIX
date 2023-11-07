import style from "./HomeCarousel.module.css";
import React, { useState, useEffect } from 'react';



function HomeCarousel({ images }) {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 17000);
    return () => clearInterval(interval);
  }, [currentImage, images]);

  return (
    <div className={`${style.carouselContainer}`}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Carousel image ${index + 1}`}
          className={`${style.carouselImage} ${style[index === currentImage ? 'active' : '']}`}
        />
      ))}
    </div>
  );
};
export default HomeCarousel