"use client";

import React from 'react';
import Link from 'next/link';
import { Logo, ArrL, ArrR } from "@/public/asstes";
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='block'>
      <div className="container mx-auto flex items-center px-8 py-6">
        <nav className='navbar flex items-center sm:justify-between sm:w-full sm:px-4 gap-[52px]'>
          <Link href="#">
            <Image src={Logo} alt='Logo' width={96} height={68} className='sm:w-[77px]' />
          </Link>
          <ul className='flex flex-col sm:hidden'>
            <li className='flex items-center gap-[51px] text-[#fff] ml-2'>
              <Link href="#" className='text-center font-IntroCond text-[11px] leading-[107.775%] not-italic font-semibold uppercase hover:text-[#ABABAB] transition-all duration-200 ease-out'>Evervess Cola</Link>
              <Link href="#" className='text-center font-IntroCond text-[11px] leading-[107.775%] not-italic font-semibold uppercase hover:text-[#ABABAB] transition-all duration-200 ease-out'>Evervess</Link>
              <Link href="#" className='text-center font-IntroCond text-[11px] leading-[107.775%] not-italic font-semibold uppercase hover:text-[#ABABAB] transition-all duration-200 ease-out'>Рецепты</Link>
              <Link href="#" className='text-center font-IntroCond text-[11px] leading-[107.775%] not-italic font-semibold uppercase hover:text-[#ABABAB] transition-all duration-200 ease-out'>О бренде</Link>
            </li>
            <li className='p-0 mt-[22px]'>
              <Image src={ArrR} alt="Right Arrow" width={548} />
            </li>
          </ul>
          <div className="mobile">
          <button 
            className="sm:block hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-white text-3xl">&#9776;</span>
          </button>
          <div 
            className={`fixed top-0 left-0 right-0 bg-[#000] z-50 transition-transform transform ${
              isMenuOpen ? 'translate-y-0' : '-translate-y-full'
            } hidden sm:block h-[80vh]`}
          >
            <button 
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={() => setIsMenuOpen(false)}
            >
              &times;
            </button>
            <ul className="flex flex-col items-center justify-center h-full space-y-8 text-white text-2xl">
              <li>EVERVESS COLA</li>
              <li>EVERVESS TONIC</li>
              <li>РЕЦЕПТЫ</li>
              <li>О БРЕНДЕ</li>
            </ul>
          </div>
          </div>
         
        </nav>
      </div>
    </header>
  );
};

export default Header;
