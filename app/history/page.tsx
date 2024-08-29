"use client"

import YearSwiper from "@/components/carousel/index";
import HEader from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import './index.css';

const Page = () => {
  const years = ['1946', '1964', '2000', '2010', '2021', '2023', '2024'];

  return (
    <div className="container_fluid">
      <div className="main">
      <HEader/>  
        <div className="container mx-auto xl:px-[90px] ">      
           <div className="flex pt-[95px] flex-col items-center gap-[78px]  xflex xl:pt-[23px] lg:pt-[17px] md:pt-0  xl:gap-[67px]">
            <h1 className="font-pt-sans text-[100px] lgtext  xl:text-[66px]  font-bold leading-[97px] tracking-wider text-center text-[#fff]">
              История Evervess
            </h1>
            <YearSwiper years={years} />
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Page;
