import Image from "next/image";
import nestjs from "@/assets/Membership/nestjs.svg";
import powershell from "@/assets/Membership/powershell.svg";
import c from "@/assets/Membership/c.svg";
import { semiBoldFont } from "@/utils/fonts";

const Header = () => {
  return (
    <div className="relative bg-[#1B1B1B]">
      <div>
        <div className="absolute top-0 flex h-[100px] w-[100px] items-center justify-center bg-[#4A4A4A80] lg:h-[150px] lg:w-[150px]">
          <Image src={powershell} alt="" className="p-4" />
        </div>
        <div className="absolute left-[100px] top-[100px] flex h-[75px] w-[75px] items-center justify-center bg-[#4A4A4A80] lg:left-[150px] lg:top-[150px] lg:h-[100px] lg:w-[100px]">
          <Image src={c} alt="" className="p-2" />
        </div>
        <div className="absolute right-0 top-0 flex h-[70px] w-[70px] justify-center bg-[#d9d9d925] lg:h-[100px] lg:w-[100px]">
          <Image src={nestjs} alt="" className="p-2" />
        </div>
        <div className="absolute right-[70px] top-[70px] flex h-[70px] w-[100px] justify-center bg-[#d9d9d925] lg:right-[100px] lg:top-[100px] lg:h-[100px] lg:w-[200px]" />
      </div>
      <div
        className={`flex flex-col items-start justify-center space-y-8 px-[60px] pb-[100px] pt-[200px] lg:px-[270px] lg:pb-[150px] lg:pt-[270px]`}
      >
        <h1 className={`${semiBoldFont.className} text-[2.75rem] text-white`}>
          You are just one membership
          <br />
          away from your dream internship
        </h1>

        <p className={`text-[1.5rem] text-[#ffffff60]`}>
          Designed for those students serious about landing dream <br />
          internships in tech. We can&apos;t wait to see what you can achieve
        </p>

        <button className="h-[50px] w-[140px] items-center rounded-[5px] bg-[#6941c6] text-center text-[1.125rem] text-white">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Header;
