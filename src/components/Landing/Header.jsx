"use client"
import Image from "next/image"
import localfont from "next/font/local"
import underlineEffect from "@/assets/Header/vector.svg"

const semibold = localfont(
    {
        src: [
            {
                path: "../../fonts/GeneralSans-Semibold.otf"
            }
        ],
        variable: "--font-semiboldSans"
    }
)


const medium = localfont(
    {
        src: [
            {
                path: "../../fonts/GeneralSans-Medium.otf"
            }
        ],
        variable: "--font-MediumSans"
    }
)




const Header = () => {
    return (
        <header className=" bg-[#1B1B1B] overflow-hidden">
            <div className="hidden lg:block">
                <div className="flex h-0 left-[130px] relative ">
                    <div className="w-[100px] h-[50px] border border-[#D9D9D950] " />
                    <div className="w-[120px] h-[50px] border border-[#d7d7d7] bg-[#D9D9D940]" />
                </div>

                <div className="left-[500px] relative h-0">
                    <div className="w-[120px] h-[50px] border border-[#d7d7d7] bg-[#D9D9D940]" />
                </div>


                <div className="left-[725px] 2xl:left-[848px] relative ">
                    <div className="w-[355px] h-[50px] border border-[#D9D9D950] " />
                </div>


                <div className="h-0 top-0 left-[130px]  relative " >
                    <img src="https://ik.imagekit.io/internquest/java-min.svg?updatedAt=1709201833586" width={100} height={100} className="w-[100px] h-[100px] py-4 object-contain bg-[#4a4a4a]" alt="" />
                </div>
                <div className="h-0 right-10 top-[135px] absolute justify-end " >
                    <img src="https://ik.imagekit.io/internquest/npm-min.svg?updatedAt=1709201833487" alt="" width={200} height={100} className="h-[100px] w-[200px] object-contain 2xl:hidden bg-[#4a4a4a]" />
                </div>
                <div className="h-0 right-[200px] lg:right-[200px] 2xl:right-[333px]  top-[235px] absolute justify-end" >
                    <img src="https://ik.imagekit.io/internquest/express-min.svg?updatedAt=1709201833468" width={100} height={100} alt="ex" className="w-[100px] h-[100px] bg-[#4a4a4a] px-4 object-contain " />
                </div>
            </div>
            <div className="flex items-center  justify-center min-h-[900px] max-h-[900px] px-4 lg:px-56 2xl:px-80 space-y-6 lg:pt-24 w-full">
                <div className="text-center  relative" >
                    <div className="absolute mt-0-7 sm:mt-0 -top-16 left-0 transform -rotate-6 text-[20px] font-medium text-white bg-[#3065EE] px-4 py-1 rounded-[15px]">
                        Land your dream internship
                    </div>
                    <h1 className={`text-[3rem] leading-[4.75rem] ${semibold.className} text-white max-w-[850px]`}>
                        Reimagining the way students<br className="hidden lg:block" />
                        get dream internship opportunities
                    </h1>
                    <Image src={underlineEffect} width={400} height={120} className="pb-4" />

                    <p
                        className={`text-[1.5rem] ${medium.variable} leading-[2.75rem] font-medium-sans text-[#7A7A7A]`}

                    >
                        Ever felt your skills didn’t get the spotlight they deserved? Let your skills <br />
                        speak through virtual internship challenges to showcase your work and <br />
                        stand out with proof-of-skills
                    </p>

                    <button
                        className="h-[50px] rounded-[10px] w-[158px] mt-4 bg-[#6941c6] text-white"
                    >
                        Get Started
                    </button>

                </div>
            </div>

        </header>
    )
}

export default Header