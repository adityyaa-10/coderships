import Image from 'next/image'


const Gateway = () => {
    return (
        <div className={`flex flex-col md:flex-row max-w-[1250px] mx-auto justify-center items-center px-4 md:px-8 py-20`} >
            <div className="w-full md:w-2/3">
                <h2 className={`text-[2rem] leading-[3rem] text-[#8980f5] font-semibold  `}>
                    Coderships - A new gateway for top
                    1% internship opportunities in tech
                </h2>

                <p className='text-[1.25rem] text-[#544D49] leading-[2.5rem] pt-6 '>
                    As a platform aimed at building the community of top 1% interns,
                    Coderships are highly selective and students who are committed
                    to showcase their skills to startups and excel in their career are only
                    awarded with membership with acceptance rate less than 25%
                </p>
            </div>
            <div className="w-full md:w-1/3 mt-7 lg:mt-0 flex items-center justify-center">
                <Image src={'/one.svg'} width={230} height={500} alt="" />
            </div>
        </div>
    )
}

export default Gateway