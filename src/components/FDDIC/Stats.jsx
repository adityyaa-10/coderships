const Stats = () => {
    return (
        <div className={` bg-[#0C0C0C] flex flex-wrap items-center justify-between w-full px-4 md:px-16 xl:px-24 py-9 lg:py-12`} >
            <div className='text-center py-6 lg:pb-0 w-full lg:w-1/4'>
                <p className="text-[1.75rem] md:text-[2rem] text-[#FFFFFFCC] font-bold">24 hrs</p>
                <p className="text-[18px] md:text-[1rem]  text-[#666666]">Time Commitment</p>
            </div>
            <div className='text-center py-6 lg:pb-0 w-full lg:w-1/4'>
                <p className="text-[1.75rem] md:text-[2rem] text-[#FFFFFFCC] font-bold">On Campus</p>
                <p className="text-[18px] md:text-[1rem]  text-[#666666]">Location</p>
            </div>
            <div className='text-center py-6 w-full lg:w-1/4'>
                <p className="text-[1.75rem] md:text-[2rem] text-[#FFFFFFCC] font-bold">50+</p>
                <p className="text-[18px] md:text-[1rem]  text-[#666666]">Startups</p>
            </div>
            <div className='text-center py-6 w-full lg:w-1/4'>
                <p className="text-[1.75rem] md:text-[2rem] text-[#FFFFFFCC] font-bold">05</p>
                <p className="text-[18px] md:text-[1rem]  text-[#666666]">Coderboats</p>
            </div>

        </div>
    )
}

export default Stats