const Banner = () => {
    return (
        <div className='flex items-center justify-center pt-8 md:pt-16 lg:pt-24 px-5'>
            <div className='relative flex flex-col lg:flex-row'>
                <div className='max-w-[720px] min-h-[400px] border lg:border-b-0 border-[#D7D7D7] p-2 md:p-5 flex flex-col justify-between'>
                    <h2 className='text-[27px] md:text-[36px] font-semibold text-[#2C2C2CE5] text-left leading-[3rem] md:leading-[3.5rem] px-4'>Code your way to <span className='text-[#9D66FFCC]'>dream internship{' '}</span>success with Coderships  </h2>
                    <p className='px-4 text-[#2C2C2C] leading-[2.2rem] text-[23px]'>
                        where skills shine & dreams come true
                    </p>
                </div>
                <div className='flex items-start justify-start lg:items-end lg:justify-end'>
                    <button className='bg-violet-500 px-4 py-2 text-white'>
                        Get started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner
