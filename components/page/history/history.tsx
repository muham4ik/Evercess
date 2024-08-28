import React from 'react';
import { Con1, Con2, Con3, Con4, Con5, Con6, Con7 } from "@/public/contents";
import Image from "next/image";
import YearSwiper from "../../../components/carousel/index";
import './index.css';

const Index = () => {
  const years = ['1946', '1964', '2000', '2010', '2021', '2023', '2024'];
  const content = [
    <div key={1} className="content-wrapper relative w-full h-[569px] xl:h-[425px] xl:w-[100%]">
      <Image src={Con1}  layout='responsive' alt="content" />
    </div>,
    <div key={2} className="content-wrapper relative w-full h-[569px] xl:h-[425px] xl:w-[100%]">
      <Image src={Con2}  layout='responsive' alt="content" />
    </div>,
    <div key={3} className="content-wrapper relative w-full h-[569px] xl:h-[425px] xl:w-[100%]">
      <Image src={Con3}  layout='responsive' alt="content" />
    </div>,
    <div key={4} className="content-wrapper relative w-full h-[569px] xl:h-[425px] xl:w-[100%]">
      <Image src={Con4}  layout='responsive' alt="content" />
    </div>,
    <div key={5} className="content-wrapper relative w-full h-[569px] xl:h-[425px] xl:w-[100%]">
      <Image src={Con5}  layout='responsive' alt="content" />
    </div>,
    <div key={6} className="content-wrapper relative w-full h-[569px] xl:h-[425px] xl:w-[100%]">
      <Image src={Con6}  layout='responsive' alt="content" />
    </div>,
    <div key={7} className="content-wrapper relative w-full h-[569px] xl:h-[425px] xl:w-[100%]">
      <Image src={Con7} fill alt="content" />
    </div>,
  ];

  return (
    <div className="container_fluid">
      <div className="main">
        <div className="container mx-auto xl:px-[90px]">
          <div className="flex pt-[214px] flex-col items-center gap-[78px]  xl:pt-[100px] lg:pt-[202px]  xl:gap-[67px]">
            <h1 className="font-pt-sans text-[100px] lgtext  xl:text-[66px]  font-bold leading-[97px] tracking-wider text-center text-[#fff]">
              История Evervess
            </h1>
            <YearSwiper years={years} content={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
