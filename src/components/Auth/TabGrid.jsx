import { boldFont } from "@/utils/fonts";

const TabGrid = () => {
    return (
        <div className="grid grid-cols-10 gap-0 h-52">
            <div className="border border-t-0 border-r-0 border-[#D7D7D7] flex items-center justify-center"></div>
            <div className="border border-t-0 border-r-0 border-[#D7D7D7] flex items-center justify-center col-span-2"></div>
            <div className="border border-[#D7D7D7] border-t-0 border-r-0 flex items-center justify-center leading-[0] text-[70px]">
                <p className={`-mt-4 ${boldFont.className} text-[#00000033]`}>c</p>
            </div>
            <div className="border border-t-0 border-r-0 border-[#D7D7D7] flex items-center justify-center col-span-3"></div>
            <div className="border border-t-0 border-r-0 border-[#D7D7D7] flex items-center justify-center"></div>
            <div className="border border-t-0 border-r-0 border-[#D7D7D7] flex items-center justify-center"></div>
            <div className="border border-t-0 border-r-0 border-[#D7D7D7] flex items-center justify-center"></div>

            <div className="border-0 flex items-center justify-center col-span-2"></div>
            <div className="border border-[#D7D7D7] border-t-0 border-r-0 flex items-center justify-center leading-[0] text-[70px]">
                <p className={`-mt-4 ${boldFont.className} text-[#00000033]`}>o</p>
            </div>
            <div className="border border-t-0 border-r-0 border-[#D7D7D7] flex items-center justify-center col-span-2"></div>
            <div className="border border-t-0 border-r-0 border-[#D7D7D7] flex items-center justify-center col-span-3 text-[#544D49E5] text-[22px] leading-[0]">Real Projects</div>
            <div className="border border-t-0 border-r-0 border-[#D7D7D7] flex items-center justify-center col-span-2"></div>

            <div className="border-0 flex items-center justify-center col-span-3"></div>
            <div className="border border-t-0 border-r-0 border-[#D7D7D7] flex items-center justify-center"></div>
            <div className="border border-t-0 border-r-0 border-[#D7D7D7] flex items-center justify-center col-span-3 text-[#544D49E5] text-[22px] leading-[0]">Real Skills</div>
            <div className="border border-[#D7D7D7] border-t-0 border-r-0 flex items-center justify-center leading-[0] text-[70px]">
                <p className={`${boldFont.className} text-[#00000033]`}>d</p>
            </div>
            <div className="border border-t-0 border-r-0 border-[#D7D7D7] flex items-center justify-center"></div>
            <div className="border border-[#D7D7D7] border-t-0 border-r-0 flex items-center justify-center leading-[0] text-[70px]">
                <p className={`-mt-4 ${boldFont.className} text-[#00000033]`}>e</p>
            </div>
        </div>
    );
};

export default TabGrid;
