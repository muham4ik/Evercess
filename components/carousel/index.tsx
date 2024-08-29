"use client";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import IMG from "./images/img.png";
import IMG2 from "./images/img2.png";
import IMG3 from "./images/img3.png";
import IMG4 from "./images/img4.png";
import IMG5 from "./images/img5.png";
import IMG6 from "./images/img6.png";
import IMG7 from "./images/img7.png";
import Red_Fon from './images/red-fon.png'
import Yellow_Fon from './images/yellow-fon.png'
import Blue_Fon from './images/blue-fon.png'
import Pink_Fon from './images/pink-fon.png'
import Image from "next/image";

interface YearSwiperProps {
  years: string[];
}

const YearSwiper: React.FC<YearSwiperProps> = ({ years }) => {
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
    const yearsElements = document.querySelectorAll(".year");
    yearsElements.forEach((el, idx) => {
      el.classList.toggle("activeYear", idx <= current);
    });
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay:true,
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
      <div className="container">
        <div className="swiperContainer">
          <div className="years flex items-center">
            <div className="line">
              <div
                className="progress"
                style={{
                  width: `${(activeIndex / (years.length - 1)) * 100}%`,
                }}
              />
            </div>
            {years.map((year, index) => (
              <div
                key={year}
                className={`year ${index === activeIndex ? "activeYear" : ""}`}
                onClick={() => handleYearClick(index)}
              >
                <p className="font-IntroCond text-[14px] xl:text-[12px] xl:leading-[12.93px] font-medium leading-[15.09px] tracking-[0.03em] text-center">
                  {year}
                </p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 100 }}></div>
          <Slider ref={sliderRef} {...settings}>
            <div className="carusel-left">
              <Image src={IMG} alt="IMG" />
              <div className="carusel-left-content">
                <h4>1946</h4>
                <h2>ПРЕМИАЛЬНАЯ СЕРИЯ</h2>
                <p>
                  PepsiCo США выпускает премиальную содовую, которая отлично
                  сочетается с коктейлями
                </p>
                <Image style={{position: 'absolute', top: 100, left: -400}} src={Blue_Fon} alt="Blue"/>
              </div>
            </div>
            <div className="carusel-right">
              <div>
                <h2>1964</h2>
                <h4>
                  Открытие <br />
                  Европы
                </h4>
                <p>
                  Evervess открывает Европу: Англия, Германия, Испания и другие
                  страны наслаждаются изысканными коктейлями
                </p>
              </div>
              <Image src={IMG2} alt="IMG" />
            </div>
            <div className="carusel-left">
              <Image src={IMG3} alt="IMG" />
              <div className="carusel-left-content">
                <h4>2000</h4>
                <h2>ПРИХОД В РОССИЮ</h2>
                <p>
                  Бренд приходит в Россию открывать новую культуру вкусного
                  миксинга
                </p>
                <Image src={Yellow_Fon} alt="Yellow Fon"/>
              </div>
            </div>
            <div className="carusel-right">
              <div>
                <h2>2010</h2>
                <h4>
                  культовые <br />
                  рестораны и бары
                </h4>
                <p>
                  Evervess открывает Европу Англия, Германия, Испания и другие
                  страны наслаждаются изысканными коктейлями
                </p>
                <Image src={Red_Fon} alt="FON" />
              </div>
              <Image src={IMG4} alt="IMG" />
            </div>
            <div className="carusel-left" style={{position: 'relative'}}>
              <Image src={IMG5} alt="IMG" />
              <div className="carusel-left-content">
                <h4>2021</h4>
                <h2>НОВЫЙ ДИЗАЙН</h2>
                <p>
                  Evervess предстает в новом модном дизайне с главным элементом
                  - короной, символом красивой и вкусной жизни
                </p>
                <Image style={{position: 'absolute', top: 0, right: -400}} src={Pink_Fon} alt="Pink Fon"/>
              </div>
            </div>
            <div className="carusel-right">
              <div>
                <h2>2023</h2>
                <h4>
                  Современная <br />
                  Качественная КОЛа
                </h4>
                <p>Evervess предстает новую качественную Колу</p>
              </div>
              <Image src={IMG6} alt="IMG" />
            </div>
            <div className="carusel-left">
              <Image src={IMG7} alt="IMG" />
              <div className="carusel-left-content">
                <h4>2024</h4>
                <h2>Смена дизайна на синий</h2>
                <p>Evervess предстает новую качественную Колу</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default YearSwiper;
