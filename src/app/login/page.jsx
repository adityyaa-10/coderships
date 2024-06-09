"use client";
import Link from 'next/link'
import LoginSignupGrid from '@/components/LoginSignupGrid'
import MainFooter from '@/components/Footer'
import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import { boldFont } from '@/utils/fonts'

const LoginPage = () => {
    const TypewriterMemoized = React.memo(Typewriter);
    return (
        <>
            <div className="max-w-[1550px] mx-auto">
                <div className='relative '>
                    <div className='w-full flex flex-col items-center justify-center lg:items-start lg:ml-10 xl:ml-24 lg:px-0 py-8 md:py-20 lg:py-32'>
                        <div className='text-left'>
                            <h1 className={`text-[#8980F580] text-[50px] lg:text-[70px] ${boldFont.className}`}><TypewriterMemoized
                                words={['Build it', 'Build it']}
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
                                    <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email address</label>
                                    <input type='email' name='email' id='email' required className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                                </div>
                                <div>
                                    <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
                                    <input type='password' name='password' id='password' required className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <input id='remember-me' name='remember-me' type='checkbox' className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded' />
                                        <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'> Remember me </label>
                                    </div>

                                    <div className='text-sm'>
                                        <Link href='/forgot-password' className='font-medium text-indigo-600 hover:text-indigo-500'> Forgot your password? </Link>
                                    </div>
                                </div>
                                <div>
                                    <button type='submit' className='w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'> Sign in </button>
                                </div>
                            </form>
                        </div>
                        <div className='text-sm text-left mt-5'>
                            <Link href='/signup' className='font-medium text-indigo-600 hover:text-indigo-500'> Don't have an account? Sign up here</Link>
                        </div>
                    </div>

                    <div className='hidden lg:block w-full absolute top-0 right-0 max-w-[750px]'>
                        <LoginSignupGrid />
                    </div>
                </div>
            </div>

            <MainFooter />
        </>
    )
}

export default LoginPage
