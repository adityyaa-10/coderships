"use client";
import CountUp from 'react-countup'
import { semiBoldFont, boldFont } from '@/utils/fonts'
const Prize = () => {
    return (
        <div className="bg-[#171717] flex flex-col items-center justify-center px-5 py-9 md:py-16 lg:py-20">
            <h4 className="font-semibold text-center text-[1.75rem] text-white tracking-[.015em]">
                What awaits for you...
            </h4>

            <p className=' text-[18px] leading-[2.25rem] lg:text-[1.5rem] text-[#FFFFFFE5] pt-5 lg:pt-10 text-center'>
                A chance to secure a dream internship offer with a starting stipend of
            </p>

            <div className={`text-[#FFFFFF80] flex gap-2 items-baseline ${semiBoldFont.className}`}>
                <p className={`text-xl sm:text-[1.5rem] lg:text-[3rem] ${boldFont.className}`}>Rs.</p>
                <p className='text-[4.5rem] sm:text-[6rem] lg:text-[8rem]'>
                    <CountUp end={100000} duration={4} delay={2} separator="," />
                </p>
            </div >
        </div >
    )
}

export default Prize
