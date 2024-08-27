import React from 'react'
import Header from '@/components/ui/header'
import Mini from "@/components/ui/headerMenu"
import "./index.css"
import LeftCola from "../../public/asstes/images/cola_05.svg"
import RightCola from "../../public/asstes/images/cola_051.svg"
import Image from 'next/image'
import Vertical from "../../public/asstes/images/vertical.png"

const Page = () => {
    return (
        <>
            <div className="container_fluid">
                <div className="sugarr flex flex-col gap-[80px] lg:gap-[60px] md:gap-[24px]">
                    <ul>
                        <li className='md:hidden sm:hidden'><Header /></li>
                        <li className='hidden md:block sm:block'><Mini /></li>
                    </ul>
                    <div className="header_container head flex flex-col gap-[67px] lg:gap-[47px] md:gap-[102px]">
                        <h2 className="text-[#fff] text sm:text-[32px] font-pt-sans text-[100px] xl:text-[66px] lg:text-[50px] font-bold leading-[97px] tracking-[0.03em] text-center md:text-[50px]">
                            Evervess Cola
                        </h2>
                        <ul className="image flex items-center gap-[145px] xl:gap-[102px] lg:gap-[80px] bak justify-center mb-[151px] lg:mb-[120px] sm:mb-[175px]">
                            <li className='flex flex-col gap-[24px] items-center xl:gap-[17px] lg:gap-[15px]'>
                                <Image src={LeftCola} alt="leftcola" className='xl:w-[112px] lg:w-[90px] sm:w-[51px]' />
                                <p className='font-IntroCond text-[#fff] text-[19.96px] xl:text-[14px] lg:text-[12px] sm:text-[14px] font-semibold leading-[21.52px] tracking-[0.08em] text-center'>C сахаром</p>
                            </li>
                            <ul>
                                <Image src={Vertical} alt='vertical' className='xl:h-[188px] lg:h-[150px]' />
                            </ul>
                            <li className='flex flex-col gap-[24px] items-center xl:gap-[17px] lg:gap-[15px]'>
                                <Image src={RightCola} alt="rightcola" className='xl:w-[112px] lg:w-[90px] sm:w-[51px]' />
                                <p className='font-IntroCond text-[#fff] text-[19.96px] xl:text-[14px] lg:text-[12px] sm:text-[14px] font-semibold leading-[21.52px] tracking-[0.08em] text-center'>без сахара</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
