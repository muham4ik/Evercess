import React from 'react'
import Link from 'next/link'
import { Logo, ArrL, ArrR } from '@/public/asstes'
import Image from 'next/image'

const index = () => {
  return (
    <header>
      <div className="container_fluid">
        <nav className="navbar">
          <ul className='flex gap-[58px] items-center pt-[19px] pb-[3px]'>
            <li>
              <div className="pl-[380px] xl:pl-[130px] flex items-center gap-[63px] pb-[29px] lg:pl-[50px] lg:gap-[51px]">
                <Link href="#" className='text-[#fff] text-center text-[14px] not-italic font-semibold leading-[107.775%] uppercase font-IntroCond hover:text-[#ABABAB] transition-all duration-200 ease-out lg:text-[11px]'>Evervess Cola</Link>
                <Link href="#" className='text-[#fff] pr-[29px] text-center text-[14px] not-italic font-semibold leading-[107.775%] uppercase font-IntroCond hover:text-[#ABABAB] transition-all duration-200 ease-out lg:text-[11px]'>Evervess Tonic</Link>
              </div>
              <Image src={ArrL} alt="left" />
            </li>
            <li>
              <Link href="#"><Image src={Logo} alt="Logo" width={157} height={112} /></Link>
            </li>
            <li>
              <div className="pl-[150px] flex items-center gap-[44px] pb-[29px] lg:pl-[123px] lg:gap-[36px]">
                <Link href="#" className='text-[#fff] text-center text-[14px] not-italic font-semibold leading-[107.775%] uppercase font-IntroCond hover:text-[#ABABAB] transition-all duration-200 ease-out lg:text-[11px]'>Рецепты</Link>
                <Link href="#" className='text-[#fff] text-center text-[14px] not-italic font-semibold leading-[107.775%] uppercase font-IntroCond hover:text-[#ABABAB] transition-all duration-200 ease-out lg:text-[11px]'>О бренде</Link>
              </div>
              <Image src={ArrR} alt='right' />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default index
