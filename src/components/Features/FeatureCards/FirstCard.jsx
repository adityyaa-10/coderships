import React from 'react'
import Image from 'next/image';

const FirstCard = () => {
    return (
        <div className="flex flex-col items-center pt-8 md:pt-16">
            <div className="text-center text-2xl md:text-4xl  flex items-center justify-center text-[#2D232385] px-4">
                Let companies apply to you
            </div>

            <div className="flex flex-col lg:flex-row w-full h-auto mt-8 md:mt-16">
                <div className="w-full lg:w-1/2 flex items-center justify-center text-base md:text-lg lg:text-xl flex-col  text-[#544D49] bg-[#FFD5D2] p-6 md:p-9 ">
                    <p className='leading-[2.25rem] md:leading-[3.1rem]'>
                        Gone are the days of tirelessly applying for 100s of internships & hoping for a callback or completing multiple coding assignments as a part of interview process only to get ghosted...
                    </p>
                    <br />
                    <br />
                    <p className='leading-[2.25rem] md:leading-[3.1rem]'>
                        Say hello to a revolutionary way of landing dream internship opportunities! Let startups apply to you seeing the projects you built as a part of Coderships.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 bg-[#FF553D] grid grid-cols-5 relative h-[500px] md:h-screen">
                    <div className="absolute inset-0 flex items-center justify-center p-4 md:p-16">
                        <Image src={'/firstcard.png'} fill className='p-8 md:p-24' alt="Central Image" />
                    </div>

                    <div className="grid grid-rows-5">
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                    </div>
                    <div className="grid grid-rows-5">
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                    </div>
                    <div className="grid grid-rows-5">
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                    </div>
                    <div className="grid grid-rows-5">
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                    </div>
                    <div className="grid grid-rows-5">
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstCard
