"use client";
import CountUp from "react-countup";
import { semiBoldFont, boldFont } from "@/utils/fonts";
const Prize = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#171717] px-5 py-9 md:py-16 lg:py-20">
      <h4 className="text-center text-[1.75rem] font-semibold tracking-[.015em] text-white">
        What awaits for you...
      </h4>

      <p className="pt-5 text-center text-[18px] leading-[2.25rem] text-[#FFFFFFE5] lg:pt-10 lg:text-[1.5rem]">
        A chance to secure a dream internship offer with a starting stipend of
      </p>

      <div
        className={`flex items-baseline gap-2 text-[#FFFFFF80] ${semiBoldFont.className}`}
      >
        <p
          className={`text-xl sm:text-[1.5rem] lg:text-[3rem] ${boldFont.className}`}
        >
          Rs.
        </p>
        <p className="text-[4.5rem] sm:text-[6rem] lg:text-[8rem]">
          <CountUp end={100000} duration={4} delay={2} separator="," />
        </p>
      </div>
    </div>
  );
};

export default Prize;
