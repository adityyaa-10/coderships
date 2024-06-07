"use client";
import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import nextjs from '@/assets/ForStudents/nextjs.svg'
import code from '@/assets/ForStudents/code.svg'

const StudentsHeader = () => {
    const TypewriterMemoized = React.memo(Typewriter);
    return (
        // <div className="bg-[#1B1B1B]" >
        //     <div className=' items-center justify-center w-full flex flex-col py-9 md:py-16 lg:py-24 xl:py-40 max-w-[683px] mx-auto'>

        //     </div>

        


        // </div>
        <header className="bg-[#1B1B1B] text-white pb-24 relative">
            <div>
                <div className="absolute border border-t-0 w-[70px] h-[35px] lg:w-[100px] lg:h-[50px]  border-[#D7D7D750] left-[100px] lg:left-[200px]" />
                <div className="absolute top-[35px] lg:top-[50px] w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] bg-[#4A4A4A80]" />
                <div className="absolute top-0 right-[140px] lg:right-[200px] w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] bg-[#d9d9d925] flex justify-center" >
                    <Image src={nextjs} alt="" className="p-2" />
                </div>
                <div className="w-[140px] h-[70px] lg:w-[200px] lg:h-[100px] bg-[#d9d9d925] flex justify-center absolute top-[70px] lg:top-[100px] right-0" >
                    <Image src={code} alt="" className="p-2" />
                </div>
            </div>
            <div className="items-center justify-center pt-[180px] lg:pt-[250px] flex flex-col space-y-12 w-full">
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
        </header>
    )
}

export default StudentsHeader