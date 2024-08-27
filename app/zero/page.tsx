"use client"

import Header from "../../components/ui/headerZ";
import Mini from "../../components/ui/headerMenu";
import Image from 'next/image';
import { Left, Right } from '@/public/asstes';
import './index.css';

const Page = () => {

  return (
    <div className="container_fluid">
      <div className="main">
        <ul>
          <li className='md:hidden sm:hidden'><Header/></li>
          <li className='hidden md:block sm:block'><Mini/></li>
        </ul>
        <section>
          <div className="section_container mx-auto sm:px-2">
            <div className="hero_s flex flex-col gap-[25px] pt-[170px] xl:pt-[110px] sm:pl-[20px] sm:pb-[100px] pl-[350px] xl:pl-[378px] pb-[350px] lg:pb-[300px] xl:pb-[250px]">
              <div className="herot flex flex-col gap-[30px] xl:gap-[10px] sm:items-center">
                <h1 className='text-[75px] xl:text-[60px] sm:text-center sm:text-[32px] not-italic font-semibold leading-[97%] tracking-wide-3.3 uppercase text-[#fff]'>
                  потрясающий вкус Cola*
                </h1>
                <p className='text text-[60px] xl:text-[45px] sm:text-[24px] font-semibold leading-[107.775%] tracking-[2.7px] uppercase text-white md:44px'>
                  zero sugar**
                </p>
              </div>
              <p className='text-[#fff] not-italic font-normal leading-normal sm:text-[14px] sm:leading-[1.5] firstp'>
                Evervess Cola дарит ощущение прохлады и оставляет приятное послевкусие. Cola идеально подходит для любого момента, будь то утренний перерыв или вечерний отдых.
              </p>
              <button className='flex items-center justify-center w-[309.488px] gap-[4px] sm:w-[300px] btn'>
                <Image src={Left} alt="arrow"/>
                <p className='text-[#fff] text-[14px] font-semibold tracking-custom uppercase leading-[107.775%]'>
                  Подобрать рецепт
                </p>
                <Image src={Right} alt="arrow"/>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
