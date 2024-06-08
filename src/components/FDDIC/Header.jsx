export const Header = () => {
    return (
        <header className="bg-[#1B1B1B] text-white">
            <div className="h-0" >
                <div className="flex w-full justify-between ">
                    <div>
                        <div className="border-b border-r w-[100px] h-[50px] lg:w-[200px] lg:h-[100px]  border-[#D7D7D750]" />
                        <div className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] border-b border-r border-[#D7D7D750]" />
                    </div>
                    <div className="flex top-[50px] relative">
                        <div className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] bg-[#d9d9d925]" />
                    </div>
                </div>
            </div>
            <div className="items-center justify-center pt-40 lg:pt-[220px] flex flex-col space-y-12 w-full">
                <h1 data-aos="fade-right" data-aos-duration="1500" className="text-[30px] leading-[3.2rem] md:text-4xl md:leading-[4rem] lg:text-[3rem] lg:leading-[4.5rem] tracking-wide font-bold max-w-[720px] px-4 text-left md:text-center">
                    Frontend Development <span className='text-[#8980F5]'>Dream Internship</span> Challenge
                </h1>
                <div data-aos="fade-left" data-aos-duration="2000" className="text-[1.4rem] lg:text-[1.5rem] text-[#FFFFFFE5] text-center border-2 border-[#D7D7D750] max-w-[600px] px-6 mx-4 py-8 lg:py12 leading-[2.75rem]">
                    where your journey to landing your dream frontend
                    development internship begins!
                </div>

                <div className="flex w-full justify-end relative top-[49px]">
                    <div className="h-[100px] w-[100px] border-[#D7D7D750] border border-b-0" />
                </div>
                <div className="flex w-full h-[50px] columns-3 ">
                    <div className="border-[#D7D7D750] border border-l-0 w-[500px]" />
                    <div className="border-[#D7D7D750] border border-l-0 border-r-0 w-[300px]" />
                    <div className="border-[#D7D7D750] border border-r-0 w-[480px] xl:w-screen" />
                </div>
            </div>
        </header>
    )
}

export default Header;