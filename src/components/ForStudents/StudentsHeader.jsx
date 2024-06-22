"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import nextjs from "@/assets/ForStudents/nextjs.svg";
import code from "@/assets/ForStudents/code.svg";

const StudentsHeader = () => {
  const TypewriterMemoized = React.memo(Typewriter);
  return (
    <header className="relative bg-[#1B1B1B] pb-24 text-white">
      <div>
        <div className="absolute left-[80px] h-[35px] w-[70px] border border-t-0 border-[#D7D7D750] lg:left-[200px] lg:h-[50px] lg:w-[100px]" />
        <div className="absolute top-[35px] h-[80px] w-[80px] bg-[#4A4A4A80] lg:top-[50px] lg:h-[200px] lg:w-[200px]" />
        <div className="absolute right-[115px] top-0 flex h-[60px] w-[60px] justify-center bg-[#d9d9d925] lg:right-[200px] lg:h-[100px] lg:w-[100px]">
          <Image src={nextjs} alt="" className="p-2" />
        </div>
        <div className="absolute right-0 top-[60px] flex h-[60px] w-[115px] justify-center bg-[#d9d9d925] lg:top-[100px] lg:h-[100px] lg:w-[200px]">
          <Image src={code} alt="" className="p-2" />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center pt-[180px] lg:pt-[250px]">
        <h1
          className={`px-4 text-start text-[2.5rem] font-semibold text-white md:px-6 lg:px-0 lg:text-[3rem]`}
        >
          <span className="font-medium">Compete in coderships to get</span>{" "}
          <br />
        </h1>
        <h2
          className={`px-4 text-start text-[2.5rem] font-semibold text-white md:px-6 lg:px-0 lg:text-[3rem]`}
        >
          <TypewriterMemoized
            words={["dream internship offers", "referral in dream companies"]}
            loop={0}
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <p className="mx-auto max-w-[720px] px-4 py-4 text-left text-[1.3rem] leading-[2.2rem] text-[#7A7A7A] md:pl-0 md:text-center md:text-[1.5rem] md:leading-[2.75rem] lg:px-0">
          Are you ready to take your coding skills to the next level & land your
          dream internship? Look no further than Coderships is the ultimate
          platform for students to upskill, compete, showcase & win dream
          internship offers.
        </p>
        <button className="mb-9 mt-4 h-[50px] w-[158px] rounded-[10px] bg-[#6941c6] text-white">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default StudentsHeader;
