import { semiBoldFont } from '@/utils/fonts';
import TestimonialSlider from './TestimonialSlider';


const Testimonials = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="2000" className="pb-6 md:pb-24 text-black text-center space-y-4 ">
            <h3 className={`${semiBoldFont.className} tracking-[-0.015em] text-[1.75rem] leading-[3rem] lg:text-[2.5rem] relative inline-block m-4`}>
                Here’s what students have to say
            </h3>
            <div className='max-w-[1200px] mx-auto'>
                <TestimonialSlider />
            </div>
        </div >


    )
}

export default Testimonials