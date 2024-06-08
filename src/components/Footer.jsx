import Link from 'next/link';
const MainFooter = () => {
    return (
        <div>
            <div className="flex w-full h-[60px] columns-3 ">
                <div className="border-[#D7D7D7] border border-l-0 w-[20%]" />
                <div className="border-[#D7D7D7] border border-l-0 w-[10%]" />
                <div className="border-[#D7D7D7] border border-l-0 w-[10%]" />
                <div className="border-[#D7D7D7] border border-l-0 w-[30%]" />
                <div className="border-[#D7D7D7] border border-l-0 w-[10%]" />
                <div className="border-[#D7D7D7] border border-l-0 w-[30%]" />
                <div className="border-[#D7D7D7] border border-l-0 w-[20%]" />
                <div className="border-[#D7D7D7] border border-l-0 w-[30%]" />
                <div className="border-[#D7D7D7] border border-l-0 w-[10%]" />
                <div className="border-[#D7D7D7] border border-x-0 w-screen" />
            </div>
            <div className='w-full flex'>
                <div className='grid grid-cols-1 md:grid-cols-2 w-[10%]'>
                    <div className='border border-[#D7D7D7] flex items-center justify-center border-t-0 border-l-0 md:col-span-2'></div>
                    <div className='border border-[#D7D7D7] flex items-center justify-center border-t-0 border-l-0'></div>
                    <div className='border border-[#D7D7D7] flex items-center justify-center border-t-0 border-l-0 md:row-span-2'></div>
                    <div className='border border-[#D7D7D7] flex items-center justify-center border-t-0 border-l-0'></div>
                    <div className='border border-[#D7D7D7] flex items-center justify-center border-t-0 border-l-0 md:row-span-2 md:col-span-2'></div>
                </div>
                <div className="bg-black w-[90%] ml-auto">
                    <div className="relative">
                        <div className='container px-5 md:px-12 lg:px-32 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
                            <div className="w-full md:w-1/2 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                                <a className="flex font-medium text-white justify-center md:justify-start">
                                    <span className="text-5xl">{'{Coderships}'}</span>
                                </a>
                                <p className="mt-5 text-xl text-[#FFFFFFB2] max-w-[350px] leading-[2rem] mx-auto md:mx-0">Build It, Prove It, Land Your Dream Internship</p>
                            </div>
                            <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center w-full md:w-1/2">
                                <div className="w-full md:w-1/2 px-4">
                                    <nav className="list-none mb-10">
                                        <li className="text-[#858585] py-2">
                                            <Link href={'/about'}>About us</Link>
                                        </li>
                                        <li className="text-[#858585] py-2">
                                            <Link href={'/forstudents'}>For Students</Link>
                                        </li>
                                    </nav>
                                </div>
                                <div className="w-full md:w-1/2 px-4 pb-6 md:pb-0">
                                    <nav className="list-none mb-10">
                                        <li className="text-[#858585] py-2">
                                            <Link href={'/fddic'} >FDDIC'24</Link>
                                        </li>
                                        <li className="text-[#858585] py-2">
                                            <Link href={'/membership'}>Membership</Link>
                                        </li>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className='absolute right-0 bottom-0 font-extrabold text-[#FFFFFF33] md:-mb-11 px-4 md:px-0'>
                            <p className="text-[3.5rem] sm:text-[4rem] md:text-[8rem] text-[#FFFFFF33] text-center">coderships</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='bg-white flex justify-between px-11'>
                <div className="container mx-auto py-4 px-5 flex justify-between">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clipRule="evenodd" d="M27.1221 19.7917C27.1221 22.3251 25.0613 24.3826 22.5312 24.3826H7.46928C4.93914 24.3826 2.87834 22.325 2.87834 19.7917V10.208C2.87778 9.3915 3.09651 8.58985 3.51168 7.8868L10.861 15.2361C11.9605 16.3388 13.4329 16.9464 15.0018 16.9464C16.5675 16.9464 18.0399 16.3388 19.1394 15.2361L26.4887 7.8868C26.9039 8.58984 27.1226 9.3915 27.122 10.208V19.7917H27.1221ZM22.5312 5.61711H7.46928C6.42443 5.61711 5.45992 5.97072 4.68836 6.55906L12.1116 13.9855C12.88 14.7506 13.9055 15.175 15.0018 15.175C16.0949 15.175 17.1204 14.7506 17.8888 13.9855L25.312 6.55906C24.5405 5.97072 23.5761 5.61711 22.5312 5.61711ZM22.5312 3.8457H7.46928C3.9618 3.8457 1.10693 6.70057 1.10693 10.208V19.7918C1.10693 23.3025 3.9618 26.1541 7.46928 26.1541H22.5312C26.0386 26.1541 28.8935 23.3025 28.8935 19.7918V10.208C28.8935 6.70051 26.0386 3.8457 22.5312 3.8457Z" fill="#544D49" />
                    </svg>

                    <div className="inline-flex  z-50">
                        <Link href={'/terms'} className="pr-6 text-[#544D49E5]">Terms</Link>
                        <p className="pr-3 text-[#544D49E5]">Privacy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainFooter;
