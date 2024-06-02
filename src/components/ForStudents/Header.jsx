"use client";
import React from "react";
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
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

                <p className='leading-[2.5rem] text-[#FFFFFF60] px-4 max-w-[667px]'>
                    Are you ready to take your coding skills to the next level & land your dream
                    internship? Look no further than Coderships is the ultimate platform for
                    students to upskill, compete, showcase & win dream internship offers.
                </p>
            </div>

            <div className="bg-black flex items-center justify-center text-white">
                <h2 className='max-w-[641px] text-[3.59vw] lg:text-[1.5vw] mx-auto py-9 md:py-16 lg:py-24 px-4 md:px-7'>
                    Your passport to land dream internships in tech
                </h2>
            </div>

        </div>
    )
}

export default Header