"use client"
import Image from 'next/image'
import underlineEffect from "@/assets/Header/vector.svg";
import localfont from "next/font/local"

const regular = localfont(
    {
        src: [
            {
                path: "../../fonts/GeneralSans-Semibold.otf"
            }
        ],
        variable: "--font-regularGeneral"
    }
)

const medium = localfont(
    {
        src: [
            {
                path: "../../fonts/GeneralSans-Medium.otf"
            }
        ],
        variable: "--font-regularGeneral"
    }
)

const SecondPara = () => {
    return (
        <div className="py-9 md:py-16` lg:py-32 text-black text-center space-y-4 px-4">
            <h3 className={` ${regular.className} tracking-[-0.015em] text-[2.5rem] relative inline-block`}>
                A new way to land <span className="relative">
                    dream internships
                    <span className="absolute left-0 top-7 w-full bottom-0">
                        <Image src={underlineEffect} width={320} height={50} className='mt-5' />
                    </span>
                </span> in tech
            </h3>
            <p className={` ${medium.className} text-[22px] text-[#544D49] leading-[2.75rem]`}>
                At BrightIntern, we&apos;re on a mission to empower students to realize their full coding <br />
                potential and seize the best internship opportunities available. Through our innovative <br />
                platform, students can harness the power of Codeships to showcase their skills, stand <br />
                out to top employers, and secure referrals to their dream companies.
            </p>
        </div>


    )
}

export default SecondPara