"use client";
import Image from "next/image";
import underlineEffect from "@/assets/Header/vector.svg";
import { semiBoldFont } from "@/utils/fonts";

const Header = () => {
  return (
    <header className="mb-0 bg-[#1B1B1B]">
      <div className="block pb-4">
        <div className="relative left-0 flex h-0">
          <div className="h-[30px] w-[75px] border border-[#D9D9D950] md:h-[40px] md:w-[80px] lg:h-[50px] lg:w-[100px]" />
          <div className="h-[30px] w-[60px] border border-[#D9D9D950] bg-[#D9D9D940] md:h-[40px] md:w-[90px] lg:h-[50px] lg:w-[120px]" />
        </div>
        <div className="relative left-[500px] h-0 sm:left-[200px] md:left-[350px] lg:left-[500px]">
          <div className="h-[20px] w-[45px] border border-[#D9D9D950] bg-[#D9D9D940] sm:h-[30px] sm:w-[70px] md:h-[40px] md:w-[90px] lg:h-[50px] lg:w-[120px]" />
        </div>
        <div className="relative left-[725px] sm:left-[350px] md:left-[500px] lg:left-[725px] 2xl:left-[848px]">
          <div className="h-[25px] w-[100px] border border-[#D9D9D950] sm:h-[30px] sm:w-[200px] md:h-[40px] md:w-[280px] lg:h-[50px] lg:w-[355px]" />
        </div>
        <div className="relative left-0 top-0 h-0">
          <Image
            src="https://ik.imagekit.io/internquest/java-min.svg?updatedAt=1709201833586"
            width={100}
            alt="java"
            height={100}
            className="mt-1 h-[75px] w-[75px] bg-[#4a4a4a] object-contain p-4 sm:mt-0 md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px]"
          />
        </div>
        <div className="absolute right-0 top-[90px] justify-end bg-[#4a4a4a] md:top-[110px] lg:top-[135px]">
          <Image
            src="https://ik.imagekit.io/internquest/npm-min.svg?updatedAt=1709201833487"
            width={200}
            height={100}
            alt="ex"
            className="h-[67px] w-[120px] bg-[#4a4a4a] object-contain px-4 md:h-[80px] md:w-[160px] lg:h-[100px] lg:w-[200px]"
          />
        </div>
        <div className="absolute right-[120px] top-[157px] justify-end bg-[#4a4a4a] md:right-[160px] md:top-[190px] lg:right-[200px] lg:top-[235px]">
          <Image
            src="https://ik.imagekit.io/internquest/express-min.svg?updatedAt=1709201833468"
            width={100}
            alt="ex"
            height={100}
            className="h-[75px] w-[75px] bg-[#4a4a4a] object-contain px-4 md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px]"
          />
        </div>
      </div>
      <div className="mt-48 flex w-full items-center justify-center space-y-6 px-4 md:mt-0 md:min-h-[900px] lg:px-56 lg:pt-24 2xl:px-80">
        <div className="relative py-4 text-center">
          <div className="absolute -top-4 -rotate-3 transform rounded-[15px] bg-[#3065EE] px-4 py-1 text-base font-medium text-white sm:mt-0 md:-top-5 md:text-[20px] xl:left-5">
            Land your dream internship
          </div>
          <h1
            data-aos="fade-right"
            data-aos-duration="1500"
            className={`text-[2.3rem] leading-[3.5rem] md:text-[3.1rem] md:leading-[4.75rem] ${semiBoldFont.className} max-w-[800px] text-left text-white md:text-center`}
          >
            Reimagining the way students land{" "}
            <span className="relative">
              dream{" "}
              <span className="absolute bottom-0 left-0 top-8 w-full lg:top-9">
                <Image
                  src={underlineEffect}
                  width={350}
                  height={100}
                  className="absolute mt-3 w-[300px] lg:mt-5 lg:w-[420px]"
                />
              </span>
            </span>
            internships in tech
          </h1>
          <p
            data-aos="fade-left"
            data-aos-duration="1500"
            className={`font-medium-sans mx-auto max-w-[760px] py-2 text-left text-[1.3rem] leading-[2.2rem] text-[#7A7A7A] md:pl-0 md:text-center md:text-[1.5rem] md:leading-[2.75rem] lg:py-4`}
          >
            Ever felt your skills didn’t get the spotlight they deserved? Let
            your skills speak through virtual internship challenges to showcase
            your work and stand out with proof-of-skills
          </p>

          <button className="mb-9 mt-4 h-[50px] w-[158px] rounded-[10px] bg-[#6941c6] text-white">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
