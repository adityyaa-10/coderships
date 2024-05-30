export const Header = () => {
    return (
        <header className="bg-[#1B1B1B] text-white relative overflow-hidden">
            <div className="h-0" >
                <div className="flex w-full justify-between ">
                    <div>
                        <div className="border-b border-r w-[100px] h-[50px] lg:w-[200px] lg:h-[100px]  border-[#D7D7D750]" />
                    </div>
                    <div className="top-0 -right-[20px] absolute">
                        <div className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] bg-[#D9D9D940]" />
                    </div>
                    <div className="top-[50px] lg:top-[100px] right-[30px] lg:right-[80px] absolute">
                        <div className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] bg-[#D9D9D91A]" />
                    </div>
                    <div className="top-0 right-[80px] lg:right-[180px] absolute">
                        <div className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] border border-[#D7D7D750]" />
                    </div>
                </div>
            </div>
            <div className="items-center justify-center pt-40 lg:pt-[220px] flex flex-col space-y-12 w-full">
                <h1 className="text-[1.5rem] leading-[3rem] md:text-4xl md:leading-[4rem] lg:text-[3rem] lg:leading-[4.5rem] tracking-wide font-bold  text-center max-w-[677px] px-4">
                    Unlock your potential, <span className='text-[#8980F5]'>#ProveYourskills</span> with Coderships
                </h1>
                <div className="text-[1.5rem] text-[#FFFFFFE5] text-center border-2 border-[#D7D7D750] max-w-[650px] px-6 mx-4 py-14">
                    where your journey to landing your dream frontend <br />
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