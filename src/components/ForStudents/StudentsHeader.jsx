"use client";
import React from "react";
import { Typewriter } from 'react-simple-typewriter'

const StudentsHeader = () => {
    const TypewriterMemoized = React.memo(Typewriter);
    return (
        <div className="bg-[#1B1B1B]" >
            <div className=' items-center justify-center w-full flex flex-col py-9 md:py-16 lg:py-24 xl:py-40 max-w-[683px] mx-auto'>
                <h1 className={`text-[2.5rem] lg:text-[3rem] font-semibold text-start text-white px-4 md:px-6 lg:px-0`} >
                    <span className='font-medium'>Compete in coderships to get</span> <br />
                    <TypewriterMemoized
                        words={['dream internship offers', 'referral dream companies']}
                        loop={0}
                        cursor
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>

                <p className='text-[1.3rem] leading-[2.2rem] md:text-[1.5rem] text-left md:text-center md:leading-[2.75rem] font-medium-sans text-[#7A7A7A] md:pl-0 py-2 lg:py-4 max-w-[720px] mx-auto px-4 lg:px-0'>
                    Are you ready to take your coding skills to the next level & land your dream
                    internship? Look no further than Coderships is the ultimate platform for
                    students to upskill, compete, showcase & win dream internship offers.
                </p>
                <button className="w-[158px] h-[50px] mt-4 bg-[#6941c6] text-white rounded-[10px] mb-9">
                    Get Started
                </button>
            </div>

            <div className="bg-black flex items-center justify-center text-white">
                <p className='text-[1.75rem] max-w-[300px] lg:max-w-full text-left leading-[3.2rem] lg:text-center lg:text-[2.2vw] mx-auto py-9 md:py-16 lg:py-24 md:px-7'>
                    Your passport to land dream internships in tech
                </p>
            </div>


        </div>
    )
}

export default StudentsHeader