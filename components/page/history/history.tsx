import React from 'react';
import YearSwiper from "../../carousel/index";
import Footer from "@/components/ui/footer"
import './index.css';

const Index = () => {
  const years = ['1946', '1964', '2000', '2010', '2021', '2023', '2024'];

  return (
    <div className="container_fluid">
      <div className="main">
        <div className="container mx-auto xl:px-[90px] ">
          <div className="flex pt-[214px] flex-col items-center gap-[78px]  xl:pt-[100px] lg:pt-[202px]  xl:gap-[67px]">
            <h1 className="font-pt-sans text-[100px] lgtext  xl:text-[66px]  font-bold leading-[38px] tracking-wider text-center text-[#fff]">
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

export default Index;
