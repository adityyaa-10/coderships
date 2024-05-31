const Header = () => {
    return (
        <div className={` bg-[#1B1B1B] space-y-8 flex flex-col items-start justify-center p-12 sm:p-24 md:p-32 lg:p-40 xl:p-48`} >
            <h1 className={`font-semibold text-[2.75rem] text-white `}>
                You are just one membership
                <br />
                away from your dream internship
            </h1>

            <p className={`  text-[1.5rem] text-[#ffffff60] `}>
                Designed for those students serious about landing dream <br />
                internships in tech. We can&apos;t wait to see what you can achieve
            </p>

            <button className=' bg-[#6941c6] text-white w-[140px] items-center text-center h-[50px] text-[1.125rem] rounded-[5px] ' >
                Apply Now
            </button>
        </div>
    )
}

export default Header