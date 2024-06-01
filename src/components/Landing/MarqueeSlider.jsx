"use client";

import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import localfont from "next/font/local";

const medium = localfont({
    src: [
        {
            path: "../../fonts/GeneralSans-Medium.otf"
        }
    ],
    variable: "--font-MediumSans"
});

const MarqueeSlider = () => {
    return (
        <div className='bg-[#0c0c0c] py-11 lg:py-24 w-full flex flex-col lg:flex-row items-center justify-center'>
            <div className="w-full lg:w-2/5 flex items-center justify-center ">
                <p className={`${medium.variable} text-[#ffffffe0] text-[22px] leading-[42px] md:text-2xl xl:text-3xl px-4 pb-11 lg:pb-0 md:leading-[50px] xl:leading-[70px]  text-left lg:ml-6`}>
                    Win referrals to your dream companies by showcasing your skills through Coderships
                </p>
            </div>
            <div className="w-full lg:w-3/5 space-y-4">
                <Marquee gradient={true} gradientWidth={120} gradientColor='#0c0c0c'>
                    <div className="flex">
                        <Image src="https://ik.imagekit.io/internquest/Group%2074-min.svg?updatedAt=1709201321935" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2070-min.svg?updatedAt=1709201321903" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2065-min.svg?updatedAt=1709201319273" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2069-min.svg?updatedAt=1709201319219" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2049-min.svg?updatedAt=1709201319281" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2062-min.svg?updatedAt=1709201319215" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2059-min.svg?updatedAt=1709201319271" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2074-min.svg?updatedAt=1709201321935" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2070-min.svg?updatedAt=1709201321903" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2065-min.svg?updatedAt=1709201319273" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2069-min.svg?updatedAt=1709201319219" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2049-min.svg?updatedAt=1709201319281" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2062-min.svg?updatedAt=1709201319215" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2059-min.svg?updatedAt=1709201319271" width={100} height={100} alt='' className='ml-4' />
                    </div>
                </Marquee>
                <Marquee direction='right' gradient={true} gradientWidth={120} gradientColor='#0c0c0c'>
                    <div className="flex">
                        <Image src="https://ik.imagekit.io/internquest/Group%2064-min.svg?updatedAt=1709201319241" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2047-min.svg?updatedAt=1709201319230" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2048-min.svg?updatedAt=1709201319222" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2067-min.svg?updatedAt=1709201319227" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2046-min.svg?updatedAt=1709201319232" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2076-min.svg" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2072-min.svg" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2075-min.svg" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2064-min.svg?updatedAt=1709201319241" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2047-min.svg?updatedAt=1709201319230" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2048-min.svg?updatedAt=1709201319222" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2067-min.svg?updatedAt=1709201319227" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2046-min.svg?updatedAt=1709201319232" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2076-min.svg" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2072-min.svg" width={100} height={100} alt='' className='ml-4' />
                        <Image src="https://ik.imagekit.io/internquest/Group%2075-min.svg" width={100} height={100} alt='' className='ml-4' />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default MarqueeSlider;
