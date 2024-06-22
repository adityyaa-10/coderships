import { semiBoldFont } from "@/utils/fonts";
export const Header = () => {
  return (
    <header className="bg-[#1B1B1B] text-white">
      <div className="h-0">
        <div className="flex w-full justify-between">
          <div>
            <div className="h-[50px] w-[100px] border-b border-r border-[#D7D7D750] lg:h-[100px] lg:w-[200px]" />
            <div className="h-[50px] w-[50px] border-b border-r border-[#D7D7D750] lg:h-[100px] lg:w-[100px]" />
          </div>
          <div className="relative top-[50px] flex">
            <div className="h-[50px] w-[50px] bg-[#d9d9d925] lg:h-[100px] lg:w-[100px]" />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center space-y-12 pt-40 lg:pt-[220px]">
        <h1
          className={` ${semiBoldFont.className}} max-w-[720px] px-4 text-left text-[30px] font-bold leading-[3.2rem] tracking-wide md:text-center md:text-4xl md:leading-[4rem] lg:text-[3rem] lg:leading-[4.5rem]`}
        >
          Frontend Development{" "}
          <span className="text-[#8980F5]">Dream Internship</span> Challenge
        </h1>
        <div className="lg:py12 mx-4 max-w-[600px] border-2 border-[#D7D7D750] px-6 py-8 text-center text-[1.4rem] leading-[2.75rem] text-[#FFFFFFE5] lg:text-[1.5rem]">
          where your journey to landing your dream frontend development
          internship begins!
        </div>

        <div className="relative top-[49px] flex w-full justify-end">
          <div className="h-[100px] w-[100px] border border-b-0 border-[#D7D7D750]" />
        </div>
        <div className="flex h-[50px] w-full columns-3">
          <div className="w-[500px] border border-l-0 border-[#D7D7D750]" />
          <div className="w-[300px] border border-l-0 border-r-0 border-[#D7D7D750]" />
          <div className="w-[480px] border border-r-0 border-[#D7D7D750] xl:w-screen" />
        </div>
      </div>
    </header>
  );
};

export default Header;
