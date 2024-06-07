import Image from 'next/image'
import github from '@/assets/Login/github.svg'
import gitlab from '@/assets/Login/gitlab.svg'
import google from '@/assets/Login/google.svg'
import Link from 'next/link'
import LoginSignupGrid from '@/components/LoginSignupGrid'
import localfont from "next/font/local";
import Navbar from '@/components/Navbar'
import MainFooter from '@/components/Footer'

const boldFont = localfont({
    src: [
        {
            path: "../../fonts/GeneralSans-Bold.otf"
        }
    ],
    variable: "--font-MediumSans"
});

const LoginPage = () => {
    return (
        <div className="bg-white">
            <Navbar />
            <div className='relative flex'>
                <div className='w-full lg:w-1/2 h-screen flex flex-col justify-center items-center px-5 lg:px-0'>
                    <div className='text-left'>
                        <h1 className={`text-[#8980F580] text-[50px] lg:text-[70px] ${boldFont.className}`}>Build it</h1>
                        <p className='pt-4 text-[1.125rem] lg:text-[24px] max-w-[470px] text-[#544D49CC] leading-[2rem] lg:leading-[2.5rem]'>From Code to Career: Virtual Internships That Get You Hired</p>
                    </div>

                    <div className='mt-10 w-full max-w-md'>
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email address</label>
                                <input type='email' name='email' id='email' required className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                            </div>
                            <div>
                                <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
                                <input type='password' name='password' id='password' required className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
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
                                <button type='submit' className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'> Sign in </button>
                            </div>
                        </form>
                        <div className='mt-6'>
                            <div className='relative'>
                                <div className='absolute inset-0 flex items-center'>
                                    <div className='w-full border-t border-gray-300' />
                                </div>
                                <div className='relative flex justify-center text-sm'>
                                    <span className='px-2 bg-white text-gray-500'> Or continue with </span>
                                </div>
                            </div>
                            <div className='mt-6 grid grid-cols-3 gap-3'>
                                <div>
                                    <button type='button' className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
                                        <span className='sr-only'>Sign in with GitHub</span>
                                        <Image src={github} alt='GitHub' width={20} height={20} />
                                    </button>
                                </div>
                                <div>
                                    <button type='button' className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
                                        <span className='sr-only'>Sign in with GitLab</span>
                                        <Image src={gitlab} alt='GitLab' width={20} height={20} />
                                    </button>
                                </div>
                                <div>
                                    <button type='button' className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
                                        <span className='sr-only'>Sign in with Google</span>
                                        <Image src={google} alt='Google' width={20} height={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
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

export default LoginPage
