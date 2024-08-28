"use client";
import React, { useState, useRef, useEffect } from 'react';
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

  useEffect(() => {
    updateYearClasses(activeIndex);
  }, [activeIndex]);

  const handleYearClick = (index: number) => {
    setActiveIndex(index);
    sliderRef.current?.slickGoTo(index);
  };

  const updateYearClasses = (current: number) => {
    const yearsElements = document.querySelectorAll('.year');
    yearsElements.forEach((el, idx) => {
      el.classList.toggle('activeYear', idx <= current);
    });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,  // Tugmalarni olib tashlash
    beforeChange: (oldIndex: number, newIndex: number) => {
      setActiveIndex(newIndex);
    },
    afterChange: (current: number) => {
      updateYearClasses(current);
    },
  };

  return (
    <div className="main">
      <div className="swiperContainer">
        <div className="years flex items-center">
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
              <p className='font-IntroCond text-[14px] xl:text-[12px] xl:leading-[12.93px] font-medium leading-[15.09px] tracking-[0.03em] text-center'>{year}</p>
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
    </div>
  );
};

export default YearSwiper;
