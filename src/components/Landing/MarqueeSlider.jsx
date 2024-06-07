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

const imageSources1 = [
    "https://ik.imagekit.io/internquest/Group%2074-min.svg?updatedAt=1709201321935",
    "https://ik.imagekit.io/internquest/Group%2070-min.svg?updatedAt=1709201321903",
    "https://ik.imagekit.io/internquest/Group%2065-min.svg?updatedAt=1709201319273",
    "https://ik.imagekit.io/internquest/Group%2069-min.svg?updatedAt=1709201319219",
    "https://ik.imagekit.io/internquest/Group%2049-min.svg?updatedAt=1709201319281",
    "https://ik.imagekit.io/internquest/Group%2062-min.svg?updatedAt=1709201319215",
    "https://ik.imagekit.io/internquest/Group%2059-min.svg?updatedAt=1709201319271",
    "https://ik.imagekit.io/internquest/Group%2074-min.svg?updatedAt=1709201321935",
    "https://ik.imagekit.io/internquest/Group%2070-min.svg?updatedAt=1709201321903",
    "https://ik.imagekit.io/internquest/Group%2065-min.svg?updatedAt=1709201319273",
    "https://ik.imagekit.io/internquest/Group%2069-min.svg?updatedAt=1709201319219",
    "https://ik.imagekit.io/internquest/Group%2049-min.svg?updatedAt=1709201319281",
    "https://ik.imagekit.io/internquest/Group%2062-min.svg?updatedAt=1709201319215",
    "https://ik.imagekit.io/internquest/Group%2059-min.svg?updatedAt=1709201319271",
];

const imageSources2 = [
    "https://ik.imagekit.io/internquest/Group%2064-min.svg?updatedAt=1709201319241",
    "https://ik.imagekit.io/internquest/Group%2047-min.svg?updatedAt=1709201319230",
    "https://ik.imagekit.io/internquest/Group%2048-min.svg?updatedAt=1709201319222",
    "https://ik.imagekit.io/internquest/Group%2067-min.svg?updatedAt=1709201319227",
    "https://ik.imagekit.io/internquest/Group%2046-min.svg?updatedAt=1709201319232",
    "https://ik.imagekit.io/internquest/Group%2076-min.svg",
    "https://ik.imagekit.io/internquest/Group%2072-min.svg",
    "https://ik.imagekit.io/internquest/Group%2075-min.svg",
    "https://ik.imagekit.io/internquest/Group%2064-min.svg?updatedAt=1709201319241",
    "https://ik.imagekit.io/internquest/Group%2047-min.svg?updatedAt=1709201319230",
    "https://ik.imagekit.io/internquest/Group%2048-min.svg?updatedAt=1709201319222",
    "https://ik.imagekit.io/internquest/Group%2067-min.svg?updatedAt=1709201319227",
    "https://ik.imagekit.io/internquest/Group%2046-min.svg?updatedAt=1709201319232",
    "https://ik.imagekit.io/internquest/Group%2076-min.svg",
    "https://ik.imagekit.io/internquest/Group%2072-min.svg",
    "https://ik.imagekit.io/internquest/Group%2075-min.svg",
];

const ImageMarquee = ({ imageSources, direction = 'left' }) => (
    <Marquee direction={direction} gradient={true} gradientWidth={120} gradientColor='#0c0c0c'>
        <div className="flex">
            {imageSources.map((src, index) => (
                <Image key={index} src={src} width={100} height={100} alt='' className='ml-4' />
            ))}
        </div>
    </Marquee>
);

const MarqueeSlider = () => {
    return (
        <div className='bg-[#0c0c0c] py-11 lg:py-24 w-full flex flex-col lg:flex-row items-center justify-center'>
            <div className="w-full lg:w-2/5 flex items-center justify-center ">
                <p className={`${medium.variable} text-[#ffffffe0] text-[22px] leading-[42px] md:text-2xl xl:text-3xl px-4 pb-11 lg:pb-0 md:leading-[50px] xl:leading-[70px] max-w-[470px] text-left lg:ml-6`}>
                    Win referrals to your dream companies by showcasing your skills through Coderships
                </p>
            </div>
            <div className="w-full lg:w-3/5 space-y-4">
                <ImageMarquee imageSources={imageSources1} />
                <ImageMarquee imageSources={imageSources2} direction='right' />
            </div>
        </div>
    );
};

export default MarqueeSlider;
