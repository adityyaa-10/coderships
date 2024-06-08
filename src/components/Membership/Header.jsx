import Image from 'next/image'
import nestjs from '@/assets/Membership/nestjs.svg'
import powershell from '@/assets/Membership/powershell.svg'
import c from '@/assets/Membership/c.svg'

const Header = () => {
    return (
        <div className='relative bg-[#1B1B1B]'>
            <div>
                <div className="absolute top-0 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] bg-[#4A4A4A80] flex justify-center items-center" >
                    <Image src={powershell} alt="" className="p-4" />
                </div>
                <div className="absolute top-[100px] left-[100px] lg:top-[150px] lg:left-[150px] w-[75px] h-[75px] lg:w-[100px] lg:h-[100px] bg-[#4A4A4A80] flex justify-center items-center" >
                    <Image src={c} alt="" className="p-2" />
                </div>
                <div className="absolute top-0 right-0 w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] bg-[#d9d9d925] flex justify-center" >
                    <Image src={nestjs} alt="" className="p-2" />
                </div>
                <div className="w-[100px] h-[70px] lg:w-[200px] lg:h-[100px] bg-[#d9d9d925] flex justify-center absolute top-[70px] lg:top-[100px] right-[70px] lg:right-[100px]" />
            </div>
            < div data-aos="zoom-in" data-aos-duration="1500" className={` space-y-8 flex flex-col items-start justify-center px-[60px] lg:px-[270px] pt-[200px] lg:pt-[270px] pb-[100px] lg:pb-[150px]`
            } >

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
        </div>
    )
}

export default Header