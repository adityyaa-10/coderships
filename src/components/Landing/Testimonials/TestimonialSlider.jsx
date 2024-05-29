"use client";
import React, { useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import CardData from './CardData';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import localFont from 'next/font/local';

const regularFont = localFont({
    src: '../../../fonts/GeneralSans-Medium.otf',
    style: 'normal',
});

const TestimonialSlider = () => {
    const sliderRef = useRef(null);
    const next = () => {
        sliderRef.current?.slickNext();
    };
    const previous = () => {
        sliderRef.current?.slickPrev();
    };
    const settings = {
        centerMode: true,
        dots: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            }
        ],
    };
    return (
        <section className="relative">
            <div className="md:flex">

                <div className="w-full ">
                    <div className="slider-container mt-4 lg:mt-0">
                        <Slider
                            ref={sliderRef}
                            {...settings}
                        >
                            {CardData.map((card) => (
                                <div key={card.key} className="px-2">
                                    <TestimonialCard
                                        content={card.content}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className={`mt-4 md:mt-9 flex ${regularFont.className} px-4`}>
                        <button className="button rounded-full bg-[#4A5FF7] p-2" onClick={previous}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        <button className="button ml-3 rounded-full bg-[#4A5FF7] p-2" onClick={next}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default TestimonialSlider;
