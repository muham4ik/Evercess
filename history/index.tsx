import React from 'react'
import { Con1, Con2, Con3, Con4, Con5, Con6, Con7 } from "@/public/contents";
import Image from "next/image";
import YearSwiper from "@/components/carousel/index";
const Index = () => {
    const years = ['1946', '1964', '2000', '2010', '2021', '2023' ,'2024'];
    const content = [
      <div className="content-wrapper"><Image src={Con1} layout='responsive' width={1133} height={569} alt="content"/></div>,
      <div className="content-wrapper"><Image src={Con2} layout='responsive' width={1133} height={569} alt="content"/></div>,
      <div className="content-wrapper"><Image src={Con3} layout='responsive' width={1133} height={569} alt="content"/></div>,
      <div className="content-wrapper"><Image src={Con4} layout='responsive' width={1133} height={569} alt="content"/></div>,
      <div className="content-wrapper"><Image src={Con5} layout='responsive' width={1133} height={569} alt="content"/></div>,
      <div className="content-wrapper"><Image src={Con6} layout='responsive' width={1133} height={569} alt="content"/></div>,
      <div className="content-wrapper"><Image src={Con7} layout='responsive' width={1133} height={569} alt="content"/></div>,
    ];
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1 className="font-PT text-[#fff] text-[100px] font-bold leading-[97px] tracking-[0.03em] text-center">History of Evervess</h1>
    <YearSwiper years={years} content={content} />
  </div>
  )
}

export default Index;