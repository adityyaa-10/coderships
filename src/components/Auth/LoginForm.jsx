"use client";
import Link from "next/link";
import { boldFont } from "@/utils/fonts";
import React from "react";
import { Typewriter } from 'react-simple-typewriter';



const LoginForm = () => {
    const TypewriterMemoized = React.memo(Typewriter);
    return (
        <div className='w-full flex flex-col items-center justify-center lg:items-start lg:ml-10 xl:ml-24 px-4 lg:px-0 py-8 md:py-20 lg:py-32'>
            <div className='text-left'>
                <h1 className={`text-[#9D66FFCC] text-[50px] lg:text-[70px] ${boldFont.className}`}>
                    <TypewriterMemoized
                        words={['Build it', 'Experience it', 'Land it']}
                        loop={0}
                        cursor
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    /></h1>
                <p className='pt-4 text-[1.125rem] lg:text-[24px] max-w-[470px] text-[#544D49CC] leading-[2rem] lg:leading-[2.5rem]'>From Code to Career: Virtual Internships That Get You Hired</p>
            </div>

            <div className='mt-10 w-full max-w-md'>
                <form className='space-y-6'>
                    <div>
                        <label htmlFor='email' className='block text-[15px] text-[#505050BF]'>Email address</label>
                        <input type='email' name='email' id='email' placeholder="hello@coderships.tech" required className='mt-2 block w-full h-[55px] pl-4 border border-gray-300 text-lg placeholder:text-[#2C2C2C66] text-[#2C2C2CE5]' />
                    </div>
                    <div>
                        <label htmlFor='password' className='block text-[15px] text-[#505050BF]'>Password</label>
                        <input type='password' name='password' id='password' placeholder="password" required className='mt-2 block w-full h-[55px] pl-4 border border-gray-300 text-lg placeholder:text-[#2C2C2C66] text-[#2C2C2CE5]' />
                    </div>
                    <div>
                        <button type='submit' className=' flex justify-center py-3 px-4 text-sm font-medium text-white bg-[#9D66FFCC]'> Sign in </button>
                    </div>
                </form>
                <div className='text-[14px] lg:text-[18px] text-left mt-5'>
                    <Link href='/signup' className='text-[#4A4A4A]'>
                        Don't have an invite code? <span className="text-[#6F71EE]">{' '}Join Waitlist</span>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default LoginForm
