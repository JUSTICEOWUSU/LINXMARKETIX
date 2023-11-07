import React, { useState, useEffect, useRef } from 'react';
import style from './ReviewsCarousel.module.css';

const ReviewsCarousel = ({ items }) => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const carouselRef = useRef(null);

  const nextItem = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;
    const itemWidth = carouselElement.clientWidth;

    const timer = setInterval(() => {
      nextItem();
    }, 10000);

    carouselElement.scrollTo({
      left: currentItemIndex * itemWidth,
      behavior: 'smooth',
    });

    return () => clearInterval(timer);
  }, [currentItemIndex, items.length]);

  return (
    <div className={style.carouselContainer}>
    <div className={style.carousel} ref={carouselRef}>
      {items.map((item, index) => (
        <div key={index} className={`${style.carouselItem} ${style[index === currentItemIndex ? 'active' : '']}`}>
          <h1 className={style.paragraph}>{item.paragraph}</h1>
          <div className={style.info}>
            <h3 className={style.name}>{item.name}</h3>
            <p className={style.role}>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
    </div>

  );
};

export default ReviewsCarousel;
