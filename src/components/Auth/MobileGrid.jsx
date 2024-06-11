import { boldFont } from "@/utils/fonts"


const MobileGrid = () => {
    return (
        <div className="grid grid-cols-6 gap-0 h-52">
            <div className="border border-t-0 border-r-0 border-[#D7D7D7] flex items-center justify-center"></div>
            <div className="border border-t-0 border-r-0 border-[#D7D7D7] flex items-center justify-center"></div>
            <div className="border border-[#D7D7D7] border-t-0 border-r-0 flex items-center justify-center leading-[0] text-[55px]">
                <p className={`-mt-3 ${boldFont.className} text-[#00000033]`}>c</p>
            </div>
            <div className="border border-t-0 border-r-0 border-[#D7D7D7] flex items-center justify-center row-span-2"></div>
            <div className="border border-t-0 border-r-0 border-[#D7D7D7] flex items-center justify-center col-span-2"></div>
            <div className="border border-t-0 border-r-0 border-[#D7D7D7] flex items-center justify-center col-span-3 text-[#544D49E5] text-[18px] leading-[0]">Real Projects</div>
            <div className="border border-[#D7D7D7] border-t-0 border-r-0 flex items-center justify-center leading-[0] text-[55px]">
                <p className={`-mt-3 ${boldFont.className} text-[#00000033]`}>o</p>
            </div>
            <div className="border border-t-0 border-r-0 border-[#D7D7D7] flex items-center justify-center"></div>

            <div className="border border-t-0 border-x-0 border-[#D7D7D7] flex items-center justify-center col-span-3"></div>
            <div className="border border-t-0 border-r-0 border-[#D7D7D7] flex items-center justify-center col-span-2"></div>
            <div className="border border-[#D7D7D7] border-t-0 border-r-0 flex items-center justify-center leading-[0] text-[55px]">
                <p className={`${boldFont.className} text-[#00000033]`}>d</p>
            </div>

            <div className="border border-[#D7D7D7] border-t-0 border-r-0 flex items-center justify-center leading-[0] text-[55px]">
                <p className={`-mt-3 ${boldFont.className} text-[#00000033]`}>e</p>
            </div>
            <div className="border border-t-0 border-[#D7D7D7] flex items-center justify-center col-span-3 text-[#544D49E5] text-[18px] leading-[0]">Real Skills</div>
        </div>
    )
}

export default MobileGrid
