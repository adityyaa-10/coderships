export const Header = () => {
    return (
        <header className="bg-[#1B1B1B] text-white">
            <div className="h-0" >
                <div className="flex w-full justify-between ">
                    <div>
                        <div className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] bg-[#D9D9D91A]" />
                    </div>
                    <div className="flex top-0 relative">
                        <div className="w-[100px] h-[50px] lg:w-[200px] lg:h-[100px] border border-[#D7D7D750]" />
                    </div>
                </div>
            </div>
            <div className="items-center justify-center pt-24 lg:pt-[220px] flex flex-col space-y-12 w-full">
                <h1 data-aos="fade-right" data-aos-duration="1500" className="text-[1.5rem] leading-[3rem] md:text-4xl md:leading-[4rem] lg:text-[3rem] lg:leading-[4.5rem] tracking-wide font-bold  text-center max-w-[677px] px-4">
                    Features designed to <span className='text-[#8980F5]'>Launch your Career </span> in tech
                </h1>
                <div data-aos="fade-left" data-aos-duration="1500" className="text-[1.5rem] text-[#FFFFFFE5] border-2 border-[#D7D7D750] max-w-[650px] px-6 mx-4 py-14">
                    Discover the unique features that Coderships has to
                    offer, designed to revolutionize the way students
                    demonstrate their coding skills
                </div>

                <div className="flex w-full justify-end relative top-[49px]">
                    <div className="h-[100px] w-[50px] border-[#D7D7D750] border border-b-0" />
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