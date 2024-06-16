import { boldFont } from "@/utils/fonts";

const TabGrid = () => {
  return (
    <div className="grid h-52 grid-cols-10 gap-0">
      <div className="flex items-center justify-center border border-r-0 border-t-0 border-[#D7D7D7]"></div>
      <div className="col-span-2 flex items-center justify-center border border-r-0 border-t-0 border-[#D7D7D7]"></div>
      <div className="flex items-center justify-center border border-r-0 border-t-0 border-[#D7D7D7] text-[70px] leading-[0]">
        <p className={`-mt-4 ${boldFont.className} text-[#00000033]`}>c</p>
      </div>
      <div className="col-span-3 flex items-center justify-center border border-r-0 border-t-0 border-[#D7D7D7]"></div>
      <div className="flex items-center justify-center border border-r-0 border-t-0 border-[#D7D7D7]"></div>
      <div className="flex items-center justify-center border border-r-0 border-t-0 border-[#D7D7D7]"></div>
      <div className="flex items-center justify-center border border-r-0 border-t-0 border-[#D7D7D7]"></div>

      <div className="col-span-2 flex items-center justify-center border-0"></div>
      <div className="flex items-center justify-center border border-r-0 border-t-0 border-[#D7D7D7] text-[70px] leading-[0]">
        <p className={`-mt-4 ${boldFont.className} text-[#00000033]`}>o</p>
      </div>
      <div className="col-span-2 flex items-center justify-center border border-r-0 border-t-0 border-[#D7D7D7]"></div>
      <div className="col-span-3 flex items-center justify-center border border-r-0 border-t-0 border-[#D7D7D7] text-[22px] leading-[0] text-[#544D49E5]">
        Real Projects
      </div>
      <div className="col-span-2 flex items-center justify-center border border-r-0 border-t-0 border-[#D7D7D7]"></div>

      <div className="col-span-3 flex items-center justify-center border-0"></div>
      <div className="flex items-center justify-center border border-r-0 border-t-0 border-[#D7D7D7]"></div>
      <div className="col-span-3 flex items-center justify-center border border-r-0 border-t-0 border-[#D7D7D7] text-[22px] leading-[0] text-[#544D49E5]">
        Real Skills
      </div>
      <div className="flex items-center justify-center border border-r-0 border-t-0 border-[#D7D7D7] text-[70px] leading-[0]">
        <p className={`${boldFont.className} text-[#00000033]`}>d</p>
      </div>
      <div className="flex items-center justify-center border border-r-0 border-t-0 border-[#D7D7D7]"></div>
      <div className="flex items-center justify-center border border-r-0 border-t-0 border-[#D7D7D7] text-[70px] leading-[0]">
        <p className={`-mt-4 ${boldFont.className} text-[#00000033]`}>e</p>
      </div>
    </div>
  );
};

export default TabGrid;
