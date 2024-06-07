import localfont from "next/font/local"
import TestimonialSlider from './TestimonialSlider';

const regular = localfont(
    {
        src: [
            {
                path: "../../../fonts/GeneralSans-Semibold.otf"
            }
        ],
        variable: "--font-regularGeneral"
    }
)

const Testimonials = () => {
    return (
        <div className="pb-6 md:pb-24 text-black text-center space-y-4 ">
            <h3 className={`${regular.className} tracking-[-0.015em] text-[1.75rem] leading-[3rem] lg:text-[2.5rem] relative inline-block mx-4`}>
                Here’s what students have to say
            </h3>
            <div className='max-w-[1200px] mx-auto'>
                <TestimonialSlider />
            </div>
        </div >


    )
}

export default Testimonials