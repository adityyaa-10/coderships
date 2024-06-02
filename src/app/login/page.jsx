import Image from 'next/image'
import github from '@/assets/Login/github.svg'
import gitlab from '@/assets/Login/gitlab.svg'
import google from '@/assets/Login/google.svg'
import Link from 'next/link'

const LoginPage = () => {
    return (
        <div className="relative">
            <div className='flex justify-between items-start w-full '>
                <div className="text-black flex py-6 w-full flex-col items-center justify-center lg:items-start lg:justify-between min-h-screen ">
                    <div className="px-7 lg:px-16 py-12 lg:py-24">
                        <h1 className='text-[2rem] tracking-[-0.28px] font-medium'>
                            Sign in to your account
                        </h1>

                        <div className="text-center pt-4">
                            <div className="flex gap-4 items-start">
                                <button className='border hover px-6 py-3 flex gap-2 hover:text-white transition-opacity items-center text-[14px] lg:text-[17px]'>
                                    <Image src={github} alt="" />  GitHub
                                </button>
                                <div className="">
                                    <button className='border hover px-6 py-3 flex gap-2 hover:text-white transition-opacity items-center text-[14px] lg:text-[17px]'>
                                        <Image src={gitlab} alt="" />  GitLab
                                    </button>
                                    <p className='text-[14px] lg:text-[17px] pt-6'> or</p>
                                </div>
                                <button className='border hover px-6 py-3 flex gap-2 hover:text-white transition-opacity items-center text-[14px] lg:text-[17px]'>
                                    <Image src={google} alt="" />  Google
                                </button>
                            </div>
                        </div>
                        <div className="max-w-[400px]">
                            <div className="flex flex-col gap-4 pt-2">
                                <label htmlFor="email" className='text-[14px] lg:text-[17px]'>Email</label>
                                <input type="email" id="email" className='border border-[#e2e2e2] px-4 py-3 text-[14px] lg:text-[17px]' />
                            </div>
                            <div className="flex flex-col gap-4 pt-6">
                                <label htmlFor="password" className='text-[14px] lg:text-[17px]'>Password</label>
                                <input type="password" id="password" className='border border-[#e2e2e2] px-4 py-3 text-[14px] lg:text-[17px]' />
                            </div>
                            <button className='border px-6 py-3 flex gap-2 hover:text-white hover:bg-[#8a05ff] transition-opacity items-center text-[14px] lg:text-[17px] mt-8'>
                                Sign in
                            </button>
                            <div className="text-[#4d4d4d] pt-6  space-y-2">
                                <p className='text-[14px] lg:text-[17px]'>
                                    Don't have an account?  <Link href="/signup" className='hover:bg-[#e6daff] underline ' >
                                        Sign Up</Link>.
                                </p>


                                <p className='text-[12px] lg:text-[14px] pt-8'>
                                    This site is protected by <Link href="#" className='hover:bg-[#e6daff] underline ' >
                                        Captcha</Link>. Its <Link href="#" className='hover:bg-[#e6daff] underline ' >
                                        Privacy Policy</Link> and Terms of Service apply.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hidden lg:block absolute z-[0] top-0 right-0 pointer-events-none">
                    <div class="w-full h-screen mx-auto">
                        <div class="lg:grid lg:grid-cols-16 lg:grid-rows-rebrand-10">
                            <div class="relative flex row-span-1 col-start-6 col-span-11">
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                            </div>

                            <div class="relative flex row-span-1 col-start-7 col-span-10">
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                            </div>

                            <div class="relative flex row-span-1 col-start-8 col-span-9">
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                            </div>

                            <div class="relative flex row-span-1 col-start-9 col-span-8">
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                            </div>

                            <div class="relative flex row-span-1 col-start-9 col-span-8">
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                            </div>

                            <div class="relative flex row-span-1 col-start-8 col-span-9">
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-t border-l border-solid border-[#e2e2e2] before:content-[''] before:absolute before:-top-[1px] before:left-0 before:w-full before:h-[1px] before:bg-rebrand-gray-100"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                            </div>

                            <div class="relative flex row-span-1 col-start-9 col-span-8">
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                            </div>

                            <div class="relative flex row-span-1 col-start-10 col-span-7">
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2] before:content-[''] before:absolute before:-top-[1px] before:left-0 before:w-full before:h-[1px] before:bg-rebrand-gray-100"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                                <div class="relative w-[75px] h-[75px] xl:w-[90px] xl:h-[90px] border-b border-l border-solid border-[#e2e2e2]"></div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default LoginPage


