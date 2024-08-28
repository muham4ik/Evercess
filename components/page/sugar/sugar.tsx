import Header from "../../ui/header"
import React from 'react'
import "./sugar.css"
import Image from 'next/image';
import Left from '@/public/asstes/icons/left.svg';
import Right from '@/public/asstes/icons/right.svg';
const Sugar = () => {
    return (
        <div className="container_fluid">
            <div className="main_sugar min-h-screen">
                <Header />
                <div className="container ">
                    <div className="nimadur flex items-center justify-center">
                        <div className="nima w-[50%] md:w-full "></div>
                        <div className="sixty  w-[60%] md:w-full md:m-auto flex items-start flex-col  gap-[34px] pt-[222px] xl:pt-[70px]  pb-[303px] xl:pb-[191px] ">
                            <div className="head">
                                <h1 className=" font-PT text-[110px] mdtext font-bold leading-[106.7px] lg:leading-[60.14px] tracking-[0.03em] text-left text-[#fff]
                                lg:text-[75px]">потрясающий вкус Cola <span className="font-PT text-[110px] lg:text-[60px] font-bold leading-[106.7px] lg:leading-[60.14px] tracking-[0.03em] text-left text-[#fff]">*</span></h1>
                            </div>
                            <div className="btm flex flex-col gap-[34px]">
                                <p className="font-PT mdp text-[18px] font-normal leading-[23.29px] text-left text-[#fff] w-[543px]">Evervess Cola дарит ощущение прохлады и оставляет приятное послевкусие. Cola идеально подходит для любого момента, будь то утренний перерыв или вечерний отдых.</p>
                                <button className="btn flex items-center justify-center w-[309.49px] px-[32px] py-[18px] gap-[4px] bg-[#FFFFFF1A] border-2 border-transparent transition-all duration-300 hover:border-[#FFFFFFE3] hover:border-solid hover:border-[2px]">
                                    <Image src={Left} alt="left" />
                                    <p className="text-[#fff] font-IntroCond text-[14px] font-semibold leading-[15.09px] tracking-[0.08em] text-center">Подобрать рецепт</p>
                                    <Image src={Right} alt="right" />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sugar