"use client"
import Image from 'next/image'
import underlineEffect from "@/assets/Header/vector.svg";
import localfont from "next/font/local"
import TestimonialSlider from './TestimonialSlider';

const regular = localfont(
    {
        src: [
            {
                path: "../../../fonts/GeneralSans-Semibold.otf"
            }
        ],
        variable: "--font-regularGeneral"
    }
)

const Testimonials = () => {
    return (
        <div className="pb-6 md:pb-24 text-black text-center space-y-4 px-4">
            <h3 className={` ${regular.className} tracking-[-0.015em] text-[2.5rem] pb-0 md:pb-9 inline-block`}>
                Here’s what students have to say
            </h3>
            <div>
                <TestimonialSlider />
            </div>
        </div >


    )
}

export default Testimonials