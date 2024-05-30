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
                <div className="relative h-0 top-[0.5px] left-0">
                    {/* <img
                        src="https://ik.imagekit.io/internquest/java-min.svg?updatedAt=1709201833586"
                        width={100}
                        height={100}
                        className="w-[60px] h-[60px] mt-1 sm:mt-0 md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] object-contain bg-[#4a4a4a]"
                        alt=""
                    /> */}
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100" height="100" fill="#D9D9D9" fillOpacity="0.2" />
                        <path d="M41.0405 68.6594C41.0405 68.6594 38.4336 70.1764 42.8983 70.6883C48.308 71.3062 51.0724 71.2177 57.0323 70.0911C57.0323 70.0911 58.6023 71.0727 60.7909 71.9237C47.4259 77.6494 30.5444 71.5917 41.0405 68.6594ZM39.4065 61.1863C39.4065 61.1863 36.4818 63.3514 40.9503 63.8141C46.7291 64.4107 51.2917 64.4594 59.1908 62.9391C59.1908 62.9391 60.2807 64.0465 61.9973 64.6513C45.8416 69.3763 27.8472 65.0232 39.4065 61.1863Z" fill="white" fillOpacity="0.6" />
                        <path d="M53.173 48.5076C56.4679 52.3002 52.3089 55.7099 52.3089 55.7099C52.3089 55.7099 60.6701 51.3945 56.831 45.9881C53.2441 40.9487 50.4944 38.4456 65.3814 29.8116C65.3814 29.8121 42.0129 35.6467 53.173 48.5076Z" fill="white" fillOpacity="0.4" />
                        <path d="M70.8485 74.1877C70.8485 74.1877 72.7784 75.7791 68.7223 77.0091C61.0102 79.3453 36.6174 80.0497 29.8427 77.1026C27.4086 76.0427 31.975 74.5733 33.4116 74.2632C34.9095 73.9389 35.7648 73.998 35.7648 73.998C33.0562 72.091 18.2577 77.7441 28.2491 79.3655C55.495 83.7821 77.9147 77.3766 70.8485 74.1877ZM42.2956 53.442C42.2956 53.442 29.8892 56.3891 37.9026 57.4605C41.2866 57.9133 48.0296 57.8094 54.3148 57.2822C59.45 56.8507 64.6032 55.9292 64.6032 55.9292C64.6032 55.9292 62.7941 56.7052 61.4838 57.5988C48.8827 60.9134 24.5457 59.3696 31.5528 55.9812C37.4766 53.1161 42.2956 53.442 42.2956 53.442ZM64.5518 65.8818C77.3602 59.228 71.4375 52.8334 67.3037 53.6947C66.293 53.9052 65.8397 54.0884 65.8397 54.0884C65.8397 54.0884 66.2159 53.4984 66.9334 53.2446C75.1109 50.3708 81.3988 61.7228 64.2959 66.2192C64.2959 66.2181 64.4922 66.0404 64.5518 65.8818Z" fill="white" fillOpacity="0.6" />
                        <path d="M56.831 15.8679C56.831 15.8679 63.9229 22.9641 50.1028 33.8727C39.0198 42.6259 47.5757 47.6156 50.099 53.319C43.6289 47.4822 38.8831 42.3432 42.0665 37.5608C46.7412 30.5422 59.6917 27.1379 56.831 15.8679Z" fill="white" fillOpacity="0.4" />
                        <path d="M43.5545 83.9177C55.8461 84.7036 74.7264 83.4802 75.1732 77.6637C75.1732 77.6637 74.3141 79.8687 65.0139 81.6181C54.5216 83.5934 41.5781 83.3632 33.9038 82.0961C33.9038 82.0966 35.4761 83.3982 43.5545 83.9177Z" fill="white" fillOpacity="0.6" />
                    </svg>
                </div>
                <div className="absolute h-0 top-[90px] md:top-[110px] lg:top-[135px] right-0 justify-end">
                    <svg width="205" height="100" viewBox="0 0 205 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="205" height="100" fill="#D9D9D9" fillOpacity="0.25" />
                        <svg x="25" y="20" width="155" height="61" viewBox="0 0 155 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0V51.5417H42.9167V60.1667H77.1667V51.5417H154.333V0H0ZM42.9167 17.2917V42.875H34.2917V17.2917H25.625V42.875H8.66667V8.625H42.9167V17.2917ZM85.7917 42.875H68.8333V51.5417H51.5417V8.625H85.7917V42.875ZM145.958 9.25V42.875H137.333V17.2917H128.708V42.875H120.042V17.2917H111.417V42.875H94.4583V8.625H145.958V9.25Z" fill="white" fillOpacity="0.3" />
                        </svg>
                    </svg>
                </div>

                <div className="absolute h-0 right-[90px] sm:right-[100px] md:right-[150px] lg:right-[200px] top-[135px] md:top-[190px] lg:top-[235px] justify-end">
                    <img
                        src="https://ik.imagekit.io/internquest/express-min.svg?updatedAt=1709201833468"
                        width={100}
                        height={100}
                        alt="ex"
                        className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] bg-[#4a4a4a] px-4 object-contain"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center min-h-[900px] px-4 lg:px-56 2xl:px-80 space-y-6 lg:pt-24 w-full">
                <div className="relative text-center py-4">
                    <div className="absolute px-4 py-1 sm:mt-0 -top-4 md:-top-5 left-0 xl:left-5 transform -rotate-3 text-base md:text-[20px] font-medium text-white bg-[#3065EE] rounded-[15px]">
                        Land your dream internship
                    </div>
                    <h1
                        className={`text-[26px] md:text-[3rem] leading-[3rem] md:leading-[4.75rem] ${semibold.className} text-white max-w-[720px] mx-auto `}
                    >
                        Reimagining the way students land dream internships in tech
                    </h1>
                    <div className="relative w-full flex justify-center mt-4">
                        <Image src={underlineEffect} width={400} height={120} className="absolute bottom-0" />
                    </div>
                    <p
                        className={`text-[1.5rem] ${medium.variable} leading-[2.75rem] font-medium-sans text-[#7A7A7A] pt-5 lg:pt-2 max-w-[720px]`}
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
