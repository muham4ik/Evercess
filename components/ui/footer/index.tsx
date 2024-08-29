import Link from 'next/link'
import React from 'react'

const index = () => {
    return (
        <div className="container_fluid">
            <footer>
                <ul className='flex  sm:hidden  items-end justify-between px-[30px] pt-[120px] xl:pt-[100px] pb-[27px] '>
                    <li className="footer_i flex flex-col gap-p[5px] items-start">
                        <p className='font-IntroCond text-[12px] font-semibold leading-[12.93px] tracking-[0.03em] text-center text-[#FFFFFF63] '>Горячая линия</p>
                        <h3 className='text-[#fff] font-IntroCond text-[17.63px] font-semibold leading-[19px] lg:text-[15px] text-center xl:text-[17px]'>8 800 500 77 37</h3>
                        <p className='font-IntroCond text-[12px] font-semibold leading-[12.93px] tracking-[0.03em] text-center lg:text-start lg:text-[10px] text-[#FFFFFF63] '>ПН-ПТ с 9:00 до 18:00 (по Москве)</p>
                    </li>
                    <li className="footer_i flex  gap-[37px] px-[25.5px] lg:gap-[20px] pb-[0] md:hidden">
                        <Link href="#" className='font-IntroCond text-[14px] font-semibold m-0 tracking-[0.08em] text-left text-[#fff] transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105'>Evervess Cola</Link>
                        <Link href="#" className='font-IntroCond text-[14px] font-semibold m-0 tracking-[0.08em] text-left text-[#fff] transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105'>Evervess Tonic</Link>
                        <Link href="#" className='font-IntroCond text-[14px] font-semibold m-0 tracking-[0.08em] text-left text-[#fff] transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105'> О бренде</Link>
                        <Link href="#" className='font-IntroCond text-[14px] font-semibold m-0 tracking-[0.08em] text-left text-[#fff] transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105'>Рецепты</Link>
                    </li>
                    <li className="footer_i  md:hidden">
                        <p className='font-IntroCond text-[12px] font-semibold leading-[12.93px]  tracking-[0.03em] text-center  text-[#FFFFFF63]'>© 2023 ПепсиКо Холдингс </p>
                    </li>
                    <li className='hidden  md:flex lg:flex-col lg:items-end lg:gap-[13px]'>
                        <div className="footer_i flex  gap-[14px]  pb-[0]">
                            <Link href="#" className='font-IntroCond text-[14px] lg:text-[12px] font-semibold m-0 tracking-[0.08em] text-left text-[#fff] transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105'>Evervess Cola</Link>
                            <Link href="#" className='font-IntroCond text-[14px] lg:text-[12px] font-semibold m-0 tracking-[0.08em] text-left text-[#fff] transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105'>Evervess Tonic</Link>
                            <Link href="#" className='font-IntroCond text-[14px] lg:text-[12px] font-semibold m-0 tracking-[0.08em] text-left text-[#fff] transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105'> О бренде</Link>
                            <Link href="#" className='font-IntroCond text-[14px] lg:text-[12px] font-semibold m-0 tracking-[0.08em] text-left text-[#fff] transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105'>Рецепты</Link>
                        </div>
                        <div className="footer_i">
                            <p className='font-IntroCond text-[12px] font-semibold leading-[12.93px] lg:text-[10px] tracking-[0.03em] text-center  text-[#FFFFFF63]'>© 2023 ПепсиКо Холдингс </p>
                        </div>
                    </li>
                </ul>

                <ul className='hidden footer_mob sm:flex px-[25px] items-start justify-between'>
                    <li className='flex flex-col gap-[45px]'>
                        <div className='flex flex-col items-start gap-[5px]'>
                            <p className='font-IntroCond text-[12px] font-semibold leading-[12.93px] tracking-[0.03em] text-center text-[#FFFFFF63] '>Горячая линия</p>
                            <h3 className='text-[#fff] font-IntroCond text-[17.63px] font-semibold leading-[19px] lg:text-[15px] text-center '>8 800 500 77 37</h3>
                            <p className='font-IntroCond text-[12px] font-semibold leading-[12.93px] tracking-[0.03em] text-center lg:text-start lg:text-[10px] text-[#FFFFFF63] '>ПН-ПТ с 9:00 до 18:00 (по Москве)</p>
                        </div>
                        <p className='font-IntroCond text-[12px] font-semibold leading-[12.93px]  tracking-[0.03em] text-center  text-[#FFFFFF63]'>© 2023 ПепсиКо Холдингс </p>
                    </li>
                    <li className='flex flex-col items-end gap-[14px]'>
                        <Link href="#" className='font-IntroCond text-[12px]  font-semibold m-0 tracking-[0.08em] text-end text-[#fff] transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105'>Evervess Cola</Link>
                        <Link href="#" className='font-IntroCond text-[12px]  font-semibold m-0 tracking-[0.08em] text-end text-[#fff] transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105'>Evervess Tonic</Link>
                        <Link href="#" className='font-IntroCond text-[12px]  font-semibold m-0 tracking-[0.08em] text-end text-[#fff] transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105'> О бренде</Link>
                        <Link href="#" className='font-IntroCond text-[12px]  font-semibold m-0 tracking-[0.08em] text-end text-[#fff] transition-colors duration-200 ease-out hover:text-[#FFFFFF40] hover:scale-105 active:text-[#FFFFFF40] active:scale-105'>Рецепты</Link>

                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default index
