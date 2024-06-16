import { boldFont } from "@/utils/fonts";
const LaptopGrid = () => {
  return (
    <div className="grid aspect-square w-full grid-cols-7">
      <div className="flex items-center justify-center border border-y-0 border-r-0 border-[#D7D7D7]"></div>
      <div className="flex items-center justify-center border border-y-0 border-r-0 border-[#D7D7D7]"></div>
      <div className="flex items-center justify-center border border-y-0 border-r-0 border-[#D7D7D7] text-[100px] leading-[0]">
        <p className={`-mt-5 ${boldFont.className} text-[#00000033]`}>c</p>
      </div>
      <div className="flex items-center justify-center border border-y-0 border-r-0 border-[#D7D7D7]"></div>
      <div className="flex items-center justify-center border border-y-0 border-r-0 border-[#D7D7D7]"></div>
      <div className="flex items-center justify-center border border-y-0 border-r-0 border-[#D7D7D7]"></div>
      <div className="flex items-center justify-center border border-y-0 border-[#D7D7D7]"></div>

      <div className="flex items-center justify-center border border-x-0 border-b-0 border-[#D7D7D7]"></div>
      <div className="col-span-2 flex items-center justify-center border border-b-0 border-r-0 border-[#D7D7D7]"></div>
      <div className="flex items-center justify-center border border-b-0 border-r-0 border-[#D7D7D7]"></div>
      <div className="row-span-2 flex items-center justify-center border border-b-0 border-r-0 border-[#D7D7D7]"></div>
      <div className="flex items-center justify-center border border-b-0 border-r-0 border-[#D7D7D7] text-[100px] leading-[0]">
        <p className={`-mt-5 ${boldFont.className} text-[#00000033]`}>o</p>
      </div>
      <div className="flex items-center justify-center border border-b-0 border-[#D7D7D7]"></div>

      <div className="flex items-center justify-center border-0"></div>
      <div className="flex items-center justify-center border border-x-0 border-b-0 border-[#D7D7D7]"></div>
      <div className="flex items-center justify-center border border-b-0 border-r-0 border-[#D7D7D7]"></div>
      <div className="flex items-center justify-center border border-b-0 border-r-0 border-[#D7D7D7] text-[100px] leading-[0]">
        <p className={` ${boldFont.className} text-[#00000033]`}>d</p>
      </div>
      <div className="col-span-2 row-span-2 flex items-center justify-center border border-b-0 border-[#D7D7D7] text-[30px] leading-[0] text-[#544D49E5]">
        Real Skills
      </div>

      <div className="flex items-center justify-center border-0"></div>
      <div className="flex items-center justify-center border-0"></div>
      <div className="col-span-3 flex items-center justify-center border border-b-0 border-r-0 border-[#D7D7D7] text-[30px] leading-[0] text-[#544D49E5]">
        Real Projects
      </div>

      <div className="flex items-center justify-center border-0"></div>
      <div className="flex items-center justify-center border-0"></div>
      <div className="flex items-center justify-center border border-b-0 border-r-0 border-[#D7D7D7] text-[100px] leading-[0]">
        <p className={`-mt-5 ${boldFont.className} text-[#00000033]`}>e</p>
      </div>
      <div className="col-span-4 row-span-2 flex items-center justify-center border border-b-0 border-[#D7D7D7]"></div>

      <div className="flex items-center justify-center border-0"></div>
      <div className="flex items-center justify-center border-0"></div>
      <div className="flex items-center justify-center border border-x-0 border-b-0 border-[#D7D7D7]"></div>

      <div className="flex items-center justify-center border-0"></div>
      <div className="flex items-center justify-center border-0"></div>
      <div className="flex items-center justify-center border-0"></div>
      <div className="flex items-center justify-center border border-r-0 border-[#D7D7D7]"></div>
      <div className="col-span-2 flex items-center justify-center border border-r-0 border-[#D7D7D7]"></div>
      <div className="flex items-center justify-center border border-[#D7D7D7]"></div>
    </div>
  );
};

export default LaptopGrid;
