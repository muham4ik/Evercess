"use client";
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./index.css";

interface YearSwiperProps {
  years: string[];
  content: React.ReactNode[];
}

const YearSwiper: React.FC<YearSwiperProps> = ({ years, content }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sliderRef = useRef<Slider>(null);

  const handleYearClick = (index: number) => {
    setActiveIndex(index);
    sliderRef.current?.slickGoTo(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (oldIndex: number, newIndex: number) => setActiveIndex(newIndex),
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
