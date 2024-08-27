"use client";
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./index.css";

const YearSwiper = ({ years, content }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleYearClick = (index) => {
    setActiveIndex(index);
    sliderRef.current.slickGoTo(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
  };

  return (
    <div className="swiperContainer">
      <div className="years">
        <div className="line">
          <div 
            className="progress" 
            style={{ width: `${(activeIndex / (years.length - 1)) * 100}%` }} 
          />
        </div>
        {years.map((year, index) => (
          <div
            key={year}
            className={`year ${index === activeIndex ? 'activeYear' : ''}`}
            onClick={() => handleYearClick(index)}
          >
            {year}
          </div>
        ))}
      </div>
      <Slider ref={sliderRef} {...settings}>
        {content.map((item, index) => (
          <div key={index} className="content">
            {item}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default YearSwiper;
