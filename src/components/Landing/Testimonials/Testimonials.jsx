"use client"
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
        <div className="pb-6 md:pb-24 text-black text-center space-y-4 -mt-11 lg:-mt-20">
            <h3 className={` ${regular.className} tracking-[-0.015em] text-[2.5rem] pb-0 md:pb-9 inline-block`}>
                Here’s what students have to say
            </h3>
            <div className='max-w-[1200px] mx-auto'>
                <TestimonialSlider />
            </div>
        </div >


    )
}

export default Testimonials