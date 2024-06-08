import React from 'react'

const Banner = () => {
    return (
        <div className='flex items-center justify-center pt-8 md:pt-16 lg:pt-24 px-5'>
            <div className='relative flex flex-row'>
                <div className='w-[320px] h-[320px] md:w-[500px] md:h-[500px] border border-b-0 border-[#D7D7D7] p-2 md:p-5 flex flex-col justify-between'>
                    <h2 className='text-2xl md:text-4xl font-semibold text-[#2D2323E5] text-center '>Ready to start your journey towards landing top 1% internships in tech?</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quas? Dicta ipsum veniam inventore itaque laudantium
                    </p>
                </div>
                <div className='flex items-end justify-end'>
                    <button className='bg-violet-500 px-4 py-2 text-white'>
                        Get started
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Banner
