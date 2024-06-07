"use client"
import Link from 'next/link'
import LoginSignupGrid from '@/components/LoginSignupGrid'
import localfont from "next/font/local";
import MainFooter from '@/components/Footer'
import React from "react";
import { Typewriter } from 'react-simple-typewriter'

const boldFont = localfont({
    src: [
        {
            path: "../../fonts/GeneralSans-Bold.otf"
        }
    ],
    variable: "--font-MediumSans"
});

const SignupPage = () => {
    const TypewriterMemoized = React.memo(Typewriter);
    return (
        <div className="bg-white">
            <div className='relative flex'>
                <div className='w-full lg:w-1/2 h-screen flex flex-col justify-center items-center px-5 lg:px-0'>
                    <div className='text-left'>
                        <h1 className={`text-[#8980F580] text-[50px] lg:text-[70px] ${boldFont.className}`}>
                            <TypewriterMemoized
                                words={['Build it', 'Build it']}
                                loop={0}
                                cursor
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            /></h1>
                        <p className='pt-4  text-[1.125rem] lg:text-[24px] max-w-[470px] text-[#544D49CC] leading-[2rem] lg:leading-[2.5rem]'>From Code to Career: Virtual Internships That Get You Hired</p>
                    </div>

                    <div className='mt-10 w-full max-w-md'>
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email address</label>
                                <input type='email' name='email' id='email' required className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                            </div>
                            <div>
                                <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
                                <input type='password' name='password' id='password' required className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                            </div>
                            <div>
                                <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700'>Confirm Password</label>
                                <input type='password' name='confirmPassword' id='confirmPassword' required className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='text-sm'>
                                    <Link href='/login' className='font-medium text-indigo-600 hover:text-indigo-500'> Already have an account? Log in here</Link>
                                </div>
                            </div>
                            <div>
                                <button type='submit' className='w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'> Sign up </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='hidden lg:flex w-1/2'>
                    <LoginSignupGrid />
                </div>
            </div>
            <MainFooter />
        </div>
    )
}

export default SignupPage
