"use client";
import Image from "next/image";
import localfont from "next/font/local";
import underlineEffect from "@/assets/Header/vector.svg";

const semibold = localfont({
    src: [{ path: "../../fonts/GeneralSans-Semibold.otf" }],
    variable: "--font-semiboldSans",
});
const medium = localfont({
    src: [{ path: "../../fonts/GeneralSans-Medium.otf" }],
    variable: "--font-MediumSans",
});

const Header = () => {
    return (
        <header className="bg-[#1B1B1B] mb-0">
            <div className="block pb-4">
                <div className="relative flex h-0 left-0">
                    <div className=" border border-[#D9D9D950] w-[60px] h-[30px] md:w-[80px] md:h-[40px] lg:w-[100px] lg:h-[50px]" />
                    <div className=" border border-[#D9D9D950] bg-[#D9D9D940] w-[60px] h-[30px] md:w-[90px] md:h-[40px] lg:w-[120px] lg:h-[50px]" />
                </div>
                <div className="relative h-0 left-[500px] sm:left-[200px] md:left-[350px] lg:left-[500px]">
                    <div className="w-[45px] h-[20px] border border-[#D9D9D950] bg-[#D9D9D940] sm:w-[70px] sm:h-[30px] md:w-[90px] md:h-[40px] lg:w-[120px] lg:h-[50px]" />
                </div>
                <div className="relative left-[725px] sm:left-[350px] md:left-[500px] lg:left-[725px] 2xl:left-[848px]">
                    <div className="w-[100px] h-[25px]  border border-[#D9D9D950] sm:w-[200px] sm:h-[30px] md:w-[280px] md:h-[40px] lg:w-[355px] lg:h-[50px]" />
                </div>
                <div className="relative h-0 top-0 left-0">
                    <img
                        src="https://ik.imagekit.io/internquest/java-min.svg?updatedAt=1709201833586"
                        width={100}
                        height={100}
                        className="w-[60px] h-[60px] mt-1 sm:mt-0 md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] object-contain bg-[#4a4a4a]"
                        alt=""
                    />
                </div>
                <div className="absolute bg-[#4a4a4a] top-[90px] md:top-[110px] lg:top-[135px] right-0 justify-end">
                    <img
                        src="https://ik.imagekit.io/internquest/npm-min.svg?updatedAt=1709201833487"
                        alt=""
                        width={200}
                        height={100}
                        className="w-[90px] h-[45px] md:h-[80px] md:w-[160px] lg:h-[100px] lg:w-[200px] object-contain bg-[#4a4a4a] px-4"
                    />
                </div>
                <div className="absolute bg-[#4a4a4a] top-[135px] right-[90px] md:top-[190px] md:right-[160px] lg:top-[235px] lg:right-[200px] justify-end">
                    <img
                        src="https://ik.imagekit.io/internquest/express-min.svg?updatedAt=1709201833468"
                        width={100}
                        height={100}
                        alt="ex"
                        className="w-[45px] h-[45px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] bg-[#4a4a4a] px-4 object-contain"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center min-h-[900px] px-4 lg:px-56 2xl:px-80 space-y-6 lg:pt-24 w-full">
                <div className="relative text-center py-4">
                    <div className="absolute px-4 py-1 sm:mt-0 -top-4 md:-top-5 left-0 xl:left-5 transform -rotate-3 text-base md:text-[20px] font-medium text-white bg-[#3065EE] rounded-[15px]">
                        Land your dream internship
                    </div>
                    <h1
                        className={`text-[2.5rem] md:text-[3rem] leading-[3.25rem] md:leading-[4.75rem] ${semibold.className} text-white max-w-[850px] `}
                    >
                        Reimagining the way students land <span className="relative">
                            dream internships
                            <span className="absolute left-0 top-9 w-full bottom-0">
                                <Image src={underlineEffect} width={350} height={70} className='mt-5' />
                            </span>
                        </span>  in tech
                    </h1>
                    <p
                        className={`text-[1rem] leading-[2.2rem] md:text-[1.5rem] ${medium.variable} leading-[2.75rem] font-medium-sans text-[#7A7A7A] pt-5 lg:pt-8 max-w-[850px]`}
                    >
                        Ever felt your skills didn’t get the spotlight they deserved? Let
                        your skills speak through virtual internship challenges to
                        showcase your work and stand out with proof-of-skills
                    </p>
                    <button className="w-[158px] h-[50px] mt-4 bg-[#6941c6] text-white rounded-[10px]">
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;