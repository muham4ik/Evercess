import React from 'react'
import Header from "../../components/ui/header"
import Mini from "../../components/ui/headerMenu"
import "./index.css"
import { Left ,Right } from '@/public/asstes'
import Image from 'next/image'
const page = () => {
  return (
   <>
   <div className="container_fluid">
    <div className="main">
        <ul>
        <li className='md:hidden sm:hidden'><Header/></li>
        <li className='hidden md:block sm:block'><Mini/></li>
        </ul>
  
    <section>
        <div className="section_container mx-auto sm:px-2">
            <div className="hero_s flex flex-col gap-[34px] pt-[252px] xl:pt-[110px] pl-[345px] pb-[311px] xl:pb-[250px]">
                <h1 className='text-[75px] xl:text-[70px] not-italic font-semibold leading-[97%] tracking-wide-3.3 uppercase text-[#fff]   '>
                потрясающий вкус Cola*
                </h1>
                <p className='text-[#fff] not-italic font-normal leading-normal'>Evervess Cola дарит ощущение прохлады и оставляет приятное послевкусие. Cola идеально подходит для любого момента, будь то утренний перерыв или вечерний отдых.</p>
                <button className='flex items-center justify-center w-[309.488px] gap-[4px]   btn'>
                   <Image src={Left} alt="arrow"/>
                   <p className='text-[#fff] text-[14px]  font-semibold tracking-custom uppercase leading-[107.775%]'>
                   Подобрать рецепт
                   </p>
                   <Image src={Right} alt="arrow"/>
                </button>
            </div>
        </div>
    </section>
    </div>
   </div>
   </>
  )
}

export default page