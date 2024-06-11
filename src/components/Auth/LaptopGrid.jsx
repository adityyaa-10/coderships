import { boldFont } from "@/utils/fonts"
const LaptopGrid = () => {
    return (
        <div className="grid grid-cols-7 w-full aspect-square">
            <div className="border border-[#D7D7D7] border-y-0 border-r-0 flex items-center justify-center"></div>
            <div className="border border-[#D7D7D7] border-y-0 border-r-0 flex items-center justify-center"></div>
            <div className="border border-[#D7D7D7] border-y-0 border-r-0 flex items-center justify-center leading-[0] text-[100px]">
                <p className={`-mt-5 ${boldFont.className} text-[#00000033]`}>c</p>
            </div>
            <div className="border border-[#D7D7D7] border-y-0 border-r-0 flex items-center justify-center"></div>
            <div className="border border-[#D7D7D7] border-y-0 border-r-0 flex items-center justify-center"></div>
            <div className="border border-[#D7D7D7] border-y-0 border-r-0 flex items-center justify-center"></div>
            <div className="border border-[#D7D7D7] border-y-0 flex items-center justify-center"></div>

            <div className="border border-[#D7D7D7] border-b-0 border-x-0 flex items-center justify-center"></div>
            <div className="border border-[#D7D7D7] border-b-0 border-r-0 flex items-center justify-center col-span-2"></div>
            <div className="border border-[#D7D7D7] border-b-0 border-r-0 flex items-center justify-center"></div>
            <div className="border border-[#D7D7D7] border-b-0 border-r-0 flex items-center justify-center row-span-2"></div>
            <div className="border border-[#D7D7D7] border-b-0 border-r-0 flex items-center justify-center leading-[0] text-[100px]">
                <p className={`-mt-5 ${boldFont.className} text-[#00000033]`}>o</p>
            </div>
            <div className="border border-[#D7D7D7] border-b-0 flex items-center justify-center"></div>

            <div className="border-0 flex items-center justify-center"></div>
            <div className="border border-[#D7D7D7] border-b-0 border-x-0 flex items-center justify-center"></div>
            <div className="border border-[#D7D7D7] border-b-0 border-r-0 flex items-center justify-center"></div>
            <div className="border border-[#D7D7D7] border-b-0 border-r-0 flex items-center justify-center leading-[0] text-[100px]">
                <p className={` ${boldFont.className} text-[#00000033]`}>d</p>
            </div>
            <div className="border border-[#D7D7D7] border-b-0 flex items-center justify-center row-span-2 col-span-2 text-[#544D49E5] text-[30px] leading-[0]">Real Skills</div>

            <div className="border-0 flex items-center justify-center"></div>
            <div className="border-0 flex items-center justify-center"></div>
            <div className="border border-[#D7D7D7] border-b-0 border-r-0 flex items-center justify-center col-span-3 text-[#544D49E5] text-[30px] leading-[0]">Real Projects</div>

            <div className="border-0 flex items-center justify-center"></div>
            <div className="border-0 flex items-center justify-center"></div>
            <div className="border border-[#D7D7D7] border-b-0 border-r-0 flex items-center justify-center leading-[0] text-[100px]">
                <p className={`-mt-5 ${boldFont.className} text-[#00000033]`}>e</p>
            </div>
            <div className="border border-[#D7D7D7] border-b-0 flex items-center justify-center row-span-2 col-span-4"></div>

            <div className="border-0 flex items-center justify-center"></div>
            <div className="border-0 flex items-center justify-center"></div>
            <div className="border border-[#D7D7D7] border-b-0 border-x-0 flex items-center justify-center"></div>

            <div className="border-0 flex items-center justify-center"></div>
            <div className="border-0 flex items-center justify-center"></div>
            <div className="border-0 flex items-center justify-center"></div>
            <div className="border border-[#D7D7D7] border-r-0 flex items-center justify-center"></div>
            <div className="border border-[#D7D7D7] border-r-0 flex items-center justify-center  col-span-2"></div>
            <div className="border border-[#D7D7D7] flex items-center justify-center"></div>
        </div>
    )
}

export default LaptopGrid