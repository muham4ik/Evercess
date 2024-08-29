"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrL, ArrR, Logo } from '@/public/asstes' // to'g'ri `assets` yozilishi kerak
import Image from 'next/image'
import "./index.css"

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="container-fluid">
      {/* style={{position: 'fixed', width: '100%'}} style with header Fixed */}
      <header className='pb-[80px] lg:pb-[70px]' >
        <div className='md:hidden sm:hidden'>
          <div className="header_container lg:w-[837px]">
            <nav className="navbar flex items-center justify-between pt-[33px] lg:pt-[27px] ">
              <div className="nav_left flex items-center justify-center gap-[63px] lg:gap-[51px]">
                <Link href="#" className='text-white font-IntroCond text-[14px] lg:text-[11px] font-semibold leading-[15.09px] tracking-[0.08em] text-center transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105'>
                  Evervess Cola
                </Link>
                <Link href="#" className='text-white font-IntroCond text-[14px] lg:text-[11px] font-semibold leading-[15.09px] tracking-[0.08em] text-center transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105'>
                  Evervess Tonic
                </Link>
              </div>
              <div className="nav_right flex items-center gap-[85px] lg:gap-[61px]">
                <Link href="#" className='text-white font-IntroCond text-[14px] lg:text-[11px] font-semibold leading-[15.09px] tracking-[0.08em] text-center transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105'>
                  Рецепты
                </Link>
                <Link href="#" className='text-white font-IntroCond text-[14px] lg:text-[11px] font-semibold leading-[15.09px] tracking-[0.08em] text-center transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105 pr-[60px]'>
                  О бренде
                </Link>
              </div>
            </nav>
          </div>
          <div className='relative z-0'>
            <ul className='flex gap-[58px] lg:gap-[47.5px] items-center justify-center absolute top-[-20px] left-0 right-0 z-20 pointer-events-none'>
              <li><Image src={ArrL} alt='left arrow' className='w-full' /></li>
              <li><Image src={Logo} alt='logo' className='w-[157px]' /></li>
              <li><Image src={ArrR} alt='right arrow' className='w-full' /></li>
            </ul>
          </div>
        </div>
        <div className='hidden md:block smhid'>
          <nav className="navbar">
            <ul className='navbar_list flex items-center gap-[52px] px-[31px] py-[24px]'>
              <li><Link href="#">
                <Image src={Logo} alt='logo' />
              </Link>
              </li>
              <li className='flex flex-col items-start gap-[22px]'>
                <div className="link flex gap-[51px] items-center">
                  <Link href="#" className='pl-1 font-IntroCond text-[11.47px] font-semibold leading-[12.36px] tracking-[0.08em] text-center text-[#fff] transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105 ' >Evervess Cola</Link>
                  <Link href="#" className='font-IntroCond text-[11.47px] font-semibold leading-[12.36px] tracking-[0.08em] text-center text-[#fff] transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105 ' >Evervess Tonic</Link>
                  <Link href="#" className='font-IntroCond text-[11.47px] font-semibold leading-[12.36px] tracking-[0.08em] text-center text-[#fff] transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105 ' >Рецепты</Link>
                  <Link href="#" className='font-IntroCond text-[11.47px] font-semibold leading-[12.36px] tracking-[0.08em] text-center text-[#fff] transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105 ' >О бренде</Link>
                </div>
                <Image src={ArrL} alt='arr' />
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden sm:block">
          <nav className="navbar flex items-center justify-between px-[23px] py-[18px] ">
            <Link href="#">
              <Image src={Logo} alt='logo' width={100} height={75} />
            </Link>
            <div className="mobile">
              <button
                className="sm:block hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="text-white text-3xl">&#9776;</span>
              </button>
              <div
                className={` h-screen fixed top-0 left-0 right-0 bg-[#070a4af5] z-50 transition-transform transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
                  } hidden sm:block h-[80vh]`}
              >
                <button
                  className="absolute top-4 right-4 text-white text-3xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  &times;
                </button>
                <ul className="flex flex-col items-center justify-center h-full space-y-8 text-white text-2xl">
                  <li className='pl-1 font-IntroCond text-[11.47px] font-semibold leading-[16px] tracking-[0.08em] text-center text-[#fff] transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105 '>EVERVESS COLA</li>
                  <li className='pl-1 font-IntroCond text-[11.47px] font-semibold leading-[16px] tracking-[0.08em] text-center text-[#fff] transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105 '>EVERVESS TONIC</li>
                  <li className='pl-1 font-IntroCond text-[11.47px] font-semibold leading-[16px] tracking-[0.08em] text-center text-[#fff] transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105 '>РЕЦЕПТЫ</li>
                  <li className='pl-1 font-IntroCond text-[11.47px] font-semibold leading-[16px] tracking-[0.08em] text-center text-[#fff] transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105 '>О БРЕНДЕ</li>
                </ul>
              </div>
            </div>

          </nav>
        </div>
      </header>
    </div>
  )
}

export default Index;
