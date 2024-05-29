
const TestimonialCard = ({ content }) => {
    return (

        <div className='h-full'>
            <blockquote className='text-base leading-[2rem] sm:text-lg sm:leading-[2.5rem] md:text-xl md:leading-[2.75rem] lg:text-[22px] lg:leading-[3rem] border border-[#D7D7D7] h-[320px] lg:h-[290px] p-4 flex items-center text-left font-normal tracking-[0] text-[#544D49]'>
                {content}
            </blockquote>

        </div>
    )
}

export default TestimonialCard
