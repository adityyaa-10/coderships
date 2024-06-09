import Image from 'next/image'
import underlineEffect from "@/assets/Header/vector.svg";
import { semiBoldFont } from '@/utils/fonts';


const SecondPara = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="2500" className="py-9 md:py-16` lg:py-32 text-black text-left md:text-center space-y-4 px-4">
            <h3 className={` ${semiBoldFont.className} tracking-[-0.015em] text-[1.75rem] leading-[3rem] lg:text-[2.5rem] relative inline-block`}>
                A new way to land{' '}
                <span className="relative ">
                    dream  {' '}
                    <span className="absolute left-0 top-7 w-full bottom-0">
                        <Image src={underlineEffect} width={320} height={50} className='mt-1 lg:mt-5' />
                    </span>
                </span>
                internships in tech
            </h3>
            <p className={`text-[20px] leading-[2.5rem] lg:text-[22px] text-[#544D49] lg:leading-[2.75rem] max-w-[850px] mx-auto`}>
                We&apos;re on a mission to empower students to realize their full coding
                potential and seize the best internship opportunities available. Through our innovative
                platform, students can harness the power of Coderships to showcase their skills, stand
                out to top employers, and secure referrals to their dream companies.
            </p>
        </div>


    )
}

export default SecondPara